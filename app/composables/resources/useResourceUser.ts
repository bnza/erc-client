import type { UseFetchOptions } from 'nuxt/app'
import type {
  DataTableHeader,
  ApiResourceConfig,
  ApiUserResourceItem,
  LdApiResourceItem,
  LdApiResourceCollection,
} from '~/composables'

export function useResourceUser() {
  const resourceConfig: ApiResourceConfig = {
    apiPath: '/admin/users',
    appPath: '/admin/users',
    name: 'Users',
    labels: ['User', 'Users'],
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
      key: 'email',
      value: 'email',
      title: 'e-mail',
    },
    {
      key: 'roles',
      value: 'roles',
      title: 'role',
      sortable: false,
    },
  ]

  async function fetchCollection(
    options: UseFetchOptions<LdApiResourceCollection<ApiUserResourceItem>> = {},
  ) {
    return useResourceCollection<ApiUserResourceItem>(resourceConfig.apiPath, options)
  }

  async function fetchItem(
    id: string | string[],
    options: UseFetchOptions<ApiUserResourceItem> = {},
  ) {
    const { data, pending, error } = await useApiFetchItem<ApiUserResourceItem>(
      resourceConfig.apiPath,
      Array.isArray(id) ? id[0] : id,
      options,
    )
    return { item: data, pending, error }
  }

  return {
    resourceConfig,
    headers: defaultHeaders,
    fetchCollection,
    fetchItem,
  }
}
