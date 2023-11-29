import type { UseFetchOptions } from 'nuxt/app'
import type { LdApiResourceCollection, ApiResourceItem } from '~/composables/resources'
import type { SortItem } from '~/composables/vuetify'

export type * from './vuetify.d'
export type * from './resources'
export { useResourceSite } from './resources/useResourceSite'
export { useResourceUser } from './resources/useResourceUser'

export enum UiMode {
  Default,
  Map,
}
export enum ResourceLabelNumber {
  Singular,
  Plural,
}
export interface PaginationOptions {
  itemsPerPage: number
  page: number
  sortBy: Array<SortItem>
}

export interface UseCollectionFetchOptions<ResourceType extends ApiResourceItem<ResourceType['id']>>
  extends UseFetchOptions<LdApiResourceCollection<ResourceType>> {
  pagination?: PaginationOptions
}
