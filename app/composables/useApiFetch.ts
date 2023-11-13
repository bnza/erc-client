import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import type {ProtectedResourceItem} from "~/composables/resources";

export function useApiFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
    const appConfig = useAppConfig()
    const {token} = useAuth()

    const defaults: UseFetchOptions<T> = {
        baseURL: appConfig.apiBaseUrl,
        // this overrides the default key generation, which includes a hash of
        // url, method, headers, etc. - this should be used with care as the key
        // is how Nuxt decides how responses should be deduplicated between
        // client and server
        key: (typeof url === 'string') ? url : url(),

        // set user token if connected
        headers: token.value
            ? { Authorization: token.value }
            : {},

        onResponse (_ctx) {
            // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
        },

        onResponseError (_ctx) {
            // throw new myBusinessError()
        }
    }
    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return useFetch(url, params)
}




