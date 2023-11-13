import type {
  JsonLdResourceCollection,
  ProtectedResourceItem,
} from "~/composables/resources";
import type { UseFetchOptions } from "nuxt/app";
import { useApiFetchCollection } from "~/composables/useApiFetchCollection";

export async function useResourceCollection<
  ResourceType extends ProtectedResourceItem<string | number>,
>(
  url: string | (() => string),
  options: UseFetchOptions<JsonLdResourceCollection<ResourceType>> = {},
) {
  const itemsPerPage = ref(10);

  const { data, pending, error } = await useApiFetchCollection<ResourceType>(
    url,
    options,
  );

  const items = computed(() => data.value?.["hydra:member"]);
  const totalItems = computed(() => data.value?.["hydra:totalItems"] || 0);

  return { items, totalItems, itemsPerPage, pending };
}
