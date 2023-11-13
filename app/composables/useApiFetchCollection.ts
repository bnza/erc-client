import type {
  JsonLdResourceCollection,
  ProtectedResourceItem,
} from "~/composables/resources";
import type { UseFetchOptions } from "nuxt/app";

export function useApiFetchCollection<
  ResourceType extends ProtectedResourceItem<string | number>,
>(
  url: string | (() => string),
  options: UseFetchOptions<JsonLdResourceCollection<ResourceType>> = {},
) {
  return useApiFetch<JsonLdResourceCollection<ResourceType>>(url, options);
}
