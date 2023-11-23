import type { UseFetchOptions } from 'nuxt/app'
import type { ApiId, ApiResourceItem, LdApiResourceItem } from '~/composables/resources'

export function useApiFetchItem<ResourceType extends ApiResourceItem<ResourceType['id']>>(
  url: string | (() => string),
  id: ApiId,
  options: UseFetchOptions<ResourceType> = {},
) {
  return useApiFetch<ResourceType>(`${url}/${id}`, options)
}
