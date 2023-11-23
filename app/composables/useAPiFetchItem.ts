import type { UseFetchOptions } from 'nuxt/app'
import type { ProtectedResourceItem } from '~/composables/resources'

export function useApiFetchItem<IdType, ResourceType extends ProtectedResourceItem<IdType>>(
  url: string | (() => string),
  id: IdType,
  options: UseFetchOptions<ResourceType> = {},
) {
  return useApiFetch<ResourceType>(`${url}/${id}`, options)
}
