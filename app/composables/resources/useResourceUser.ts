import type { UseFetchOptions } from 'nuxt/app'
import type {
  DataTableHeader,
  ApiResourceConfig,
  UserResourceItem,
  JsonLdResourceCollection,
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
    options: UseFetchOptions<JsonLdResourceCollection<UserResourceItem>> = {},
  ) {
    return useResourceCollection<UserResourceItem>(resourceConfig.apiPath, options)
  }

  async function fetchItem(id: string | string[], options: UseFetchOptions<UserResourceItem> = {}) {
    const { data, pending, error } = await useApiFetchItem<string, UserResourceItem>(
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
