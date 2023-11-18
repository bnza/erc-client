import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
import { stringify } from "qs";
import { useUiApiFetchPending, useUiAppSnackbar } from "~/stores/ui";

export function useApiFetch<ResourceType>(
  url: string | (() => string),
  options: UseFetchOptions<ResourceType> = {},
) {
  const appConfig = useAppConfig();
  const { token } = useAuth();

  const { query, ..._options } = options;

  const _url = computed(() => {
    let _url = url as string;
    if (typeof url !== "string") {
      _url = url();
    }
    return query?.value ? _url + "?" + stringify(query.value) : _url;
  });

  const defaults: UseFetchOptions<ResourceType> = {
    baseURL: appConfig.apiBaseUrl,
    // this overrides the default key generation, which includes a hash of
    // url, method, headers, etc. - this should be used with care as the key
    // is how Nuxt decides how responses should be deduplicated between
    // client and server
    key: typeof url === "string" ? url : url(),

    // set user token if connected
    headers: token.value ? { Authorization: token.value } : {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      const message = "Expired JWT Token";
      if (_ctx.response?._data?.message === message) {
        const uiSnackbarStore = useUiAppSnackbar();
        uiSnackbarStore.show({
          _text: "Authorization expired. Please login again",
          _color: "error",
          _vertical: true,
          _timeout: -1,
        });
        const { signOut } = useAuth();
        signOut({ callbackUrl: "/" });
      }
      console.log(_ctx);
      // throw new myBusinessError()
    },
    watch: [_url],
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(_options, defaults);
  const uiApiFetchPending = useUiApiFetchPending();
  uiApiFetchPending.$patch({ pending: true });
  return useFetch<ResourceType>(_url, params as Record<string, any>).finally(
    () => {
      uiApiFetchPending.$patch({ pending: false });
    },
  );
}
