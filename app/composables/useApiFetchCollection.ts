import type {
  PaginationOptions,
  LdApiResourceCollection,
  UseCollectionFetchOptions,
  ApiResourceItem,
  ApiId,
} from '~/composables'
import { defu } from 'defu'

export async function useApiFetchCollection<
  ResourceType extends ApiResourceItem<ResourceType['id']>,
>(url: string | (() => string), options: UseCollectionFetchOptions<ResourceType> = {}) {
  const paginationOption: PaginationOptions = reactive({
    itemsPerPage: 10,
    page: 1,
    sortBy: [
      {
        key: 'id',
        order: 'asc',
      },
    ],
  })

  const query = computed(() => {
    const order: Record<string, string> = {}
    paginationOption.sortBy.forEach((sortItem) => {
      let _order = 'asc'
      if (typeof sortItem.order === 'boolean') {
        _order = sortItem.order ? 'asc' : 'desc'
      }
      if (typeof sortItem.order === 'string') {
        _order = sortItem.order
      }
      order[sortItem.key] = _order
    })
    return {
      order,
      page: paginationOption.page,
      itemsPerPage: paginationOption.itemsPerPage,
    }
  })

  const _options = defu(options, { query })

  const { data, pending, error } = await useApiFetch<LdApiResourceCollection<ResourceType>>(
    url,
    _options,
  )

  const items = computed(() => data.value?.['hydra:member'])
  const totalItems = computed(() => data.value?.['hydra:totalItems'] || 0)

  return { items, totalItems, error, paginationOption, pending }
}
