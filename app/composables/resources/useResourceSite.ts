import type { DataTableHeader, ApiResourceConfig, ApiSiteResourceItem } from '~/composables'
import { useResource } from '~/composables/resources/useResource'

export function useResourceSite() {
  const resourceConfig: ApiResourceConfig<ApiSiteResourceItem> = {
    apiPath: '/sites',
    appPath: '/data/sites',
    name: 'Sites',
    labels: ['Site', 'Sites'],
    getCodeFn: (item) => () => item?.code || '',
  }

  const defaultHeaders: Array<DataTableHeader> = [
    {
      key: 'id',
      value: 'id',
      title: 'ID',
      align: 'center',
      width: '200',
      maxWidth: '200',
    },
    {
      key: 'code',
      value: 'code',
      title: 'code',
      width: '200',
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

  const protectedFields = ['public']

  const { headers, isAuthenticated, fetchCollection, fetchItem, patchItem } =
    useResource<ApiSiteResourceItem>({
      resourceConfig,
      defaultHeaders,
      protectedFields,
    })

  return {
    resourceConfig,
    headers,
    isAuthenticated,
    fetchCollection,
    fetchItem,
    patchItem,
  }
}
