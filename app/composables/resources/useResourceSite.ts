import type { UseFetchOptions } from 'nuxt/app'
import type {
  DataTableHeader,
  ResourceConfig,
  SiteResourceItem,
  JsonLdResourceCollection,
} from '~/composables'
import { useResource } from '~/composables/resources/useResource'

export function useResourceSite() {
  const resourceConfig: ResourceConfig = {
    apiPath: '/sites',
    appPath: '/data/sites',
    name: 'Sites',
    labels: ['Site', 'Sites'],
  }

  const { getHeaders, isAuthenticated, parseNumericId } = useResource()

  async function fetchCollection(
    options: UseFetchOptions<JsonLdResourceCollection<SiteResourceItem>> = {},
  ) {
    return useResourceCollection<SiteResourceItem>(resourceConfig.apiPath, options)
  }

  async function fetchItem(id: string | string[], options: UseFetchOptions<SiteResourceItem> = {}) {
    const { data, pending, error } = await useApiFetchItem<number, SiteResourceItem>(
      resourceConfig.apiPath,
      parseNumericId(id),
      options,
    )
    return { item: data, pending, error }
  }

  const defaultHeaders: Array<DataTableHeader> = [
    {
      key: 'id',
      value: 'id',
      title: 'ID',
      align: 'center',
      maxWidth: '200',
    },
    {
      key: 'code',
      value: 'code',
      title: 'code',
    },
    {
      key: 'name',
      value: 'name',
      title: 'name',
    },
    {
      key: 'description',
      value: 'description',
      title: 'description',
      sortable: false,
    },
    {
      key: 'public',
      value: 'public',
      title: 'public',
      sortable: false,
    },
  ]

  const protectedField = ['public']

  const headers = getHeaders.value(defaultHeaders, protectedField)

  return {
    resourceConfig,
    headers,
    isAuthenticated,
    fetchCollection,
    fetchItem,
  }
}
