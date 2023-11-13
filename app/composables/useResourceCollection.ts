import type { Ref } from "@vue/reactivity";
import type { UseFetchOptions } from "nuxt/app";
import type { SortItem } from "~/composables/vuetify";
import type {
  JsonLdResourceCollection,
  ProtectedResourceItem,
} from "~/composables/resources";
import { defu } from "defu";
import { useApiFetchCollection } from "~/composables/useApiFetchCollection";

export async function useResourceCollection<
  ResourceType extends ProtectedResourceItem<string | number>,
>(
  url: string | (() => string),
  options: UseFetchOptions<JsonLdResourceCollection<ResourceType>> = {},
) {
  const itemsPerPage = ref(10);

  const page = ref(1);

  const sortBy: Ref<Array<SortItem>> = ref([
    {
      key: "id",
      order: "asc",
    },
  ]);

  const query = computed(() => {
    const order: Record<string, string> = {};
    sortBy.value.forEach((sortItem) => {
      order[sortItem.key] = sortItem.order;
    });
    return { order };
  });

  const _options = defu(options, { query });

  const { data, pending, error } = await useApiFetchCollection<ResourceType>(
    url,
    _options,
  );

  const items = computed(() => data.value?.["hydra:member"]);
  const totalItems = computed(() => data.value?.["hydra:totalItems"] || 0);

  return { items, totalItems, itemsPerPage, pending, sortBy, page };
}
