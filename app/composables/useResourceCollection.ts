import type { UseFetchOptions } from "nuxt/app";
import type {
  SortItem,
  JsonLdResourceCollection,
  ProtectedResourceItem,
} from "~/composables";
import { defu } from "defu";

export async function useResourceCollection<
  ResourceType extends ProtectedResourceItem<string | number>,
>(
  url: string | (() => string),
  options: UseFetchOptions<JsonLdResourceCollection<ResourceType>> = {},
) {
  const paginationOption: {
    itemsPerPage: number;
    page: number;
    sortBy: Array<SortItem>;
  } = reactive({
    itemsPerPage: 10,
    page: 1,
    sortBy: [
      {
        key: "id",
        order: "asc",
      },
    ],
  });

  const query = computed(() => {
    const order: Record<string, string> = {};
    paginationOption.sortBy.forEach((sortItem) => {
      let _order = "asc";
      if (typeof sortItem.order === "boolean") {
        _order = sortItem.order ? "asc" : "desc";
      }
      if (typeof sortItem.order === "string") {
        _order = sortItem.order;
      }
      order[sortItem.key] = _order;
    });
    return {
      order,
      page: paginationOption.page,
      itemsPerPage: paginationOption.itemsPerPage,
    };
  });

  const _options = defu(options, { query });

  const { data, pending, error } = await useApiFetchCollection<ResourceType>(
    url,
    _options,
  );

  const items = computed(() => data.value?.["hydra:member"]);
  const totalItems = computed(() => data.value?.["hydra:totalItems"] || 0);

  return { items, totalItems, paginationOption, pending };
}
