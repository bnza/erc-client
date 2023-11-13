import type { UseFetchOptions } from "nuxt/app";
import type { SiteResourceItem, JsonLdResourceCollection } from "~/composables";
import { useResourceCollection } from "~/composables/useResourceCollection";

export async function fetchCollection(
  options: UseFetchOptions<JsonLdResourceCollection<SiteResourceItem>> = {},
) {
  return useResourceCollection("/sites", options);
}

export function useSiteResource() {
  const { isAuthenticated } = useAppAuth();

  const _headers = [
    {
      key: "id",
      value: "id",
      title: "ID",
    },
    {
      key: "code",
      value: "code",
      title: "code",
    },
    {
      key: "name",
      value: "name",
      title: "name",
    },
    {
      key: "public",
      value: "public",
      title: "public",
      sortable: false,
    },
  ] as const;

  const _protectedField = ["public"];

  const headers = computed(() =>
    isAuthenticated.value
      ? _headers
      : _headers.filter((h) => !_protectedField.includes(h.key)),
  );

  return { headers, isAuthenticated };
}
