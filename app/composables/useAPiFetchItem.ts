import type {UseFetchOptions} from "nuxt/app";
import type {ProtectedResourceItem} from "~/composables/resources";

export function useApiFetchItem<IdType> (url: string | (() => string), id: IdType, options: UseFetchOptions<ProtectedResourceItem<IdType>> = {}) {
    return useApiFetch<ProtectedResourceItem<IdType>>(url, options)
}