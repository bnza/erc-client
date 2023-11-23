import type { UseFetchOptions } from 'nuxt/app'
import type { JsonLdResourceItem } from '~/composables/resources'

export function useApiFetchItem<
  IdType extends string | number,
  ResourceType extends JsonLdResourceItem<IdType>,
>(url: string | (() => string), id: IdType, options: UseFetchOptions<ResourceType> = {}) {
  return useApiFetch<ResourceType>(`${url}/${id}`, options)
}
