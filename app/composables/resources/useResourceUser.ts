import type { DataTableHeader, ApiResourceConfig, ApiUserResourceItem } from '~/composables'
import { useResource } from '~/composables/resources/useResource'

export function useResourceUser() {
  const resourceConfig: ApiResourceConfig<ApiUserResourceItem> = {
    apiPath: '/admin/users',
    appPath: '/admin/users',
    name: 'Users',
    labels: ['User', 'Users'],
    getCodeFn: (item) => () => item?.email || '',
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

  const { headers, isAuthenticated, fetchCollection, fetchItem } = useResource<ApiUserResourceItem>(
    {
      resourceConfig,
      defaultHeaders,
    },
  )

  return {
    resourceConfig,
    headers: defaultHeaders,
    fetchCollection,
    fetchItem,
  }
}
