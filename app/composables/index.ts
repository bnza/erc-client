import type { UseFetchOptions } from 'nuxt/app'
import type {
  LdApiResourceCollection,
  ApiResourceItem,
  ApiResourceConfig,
  ApiId,
} from '~/composables/resources'
import type { SortItem, DataTableHeader } from '~/composables/vuetify'

export type * from './vuetify.d'
export type * from './resources'
export { Role } from './useAppAuth'
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

export interface UsePatchItemFetchOptions extends UseFetchOptions<never> {
  originalItem: ApiResourceItem<ApiId>
  updatedItem: Partial<ApiResourceItem<ApiId>>
}

export interface ApiResourceConfigOptions<
  ResourceType extends ApiResourceItem<ResourceType['id']>,
> {
  resourceConfig: ApiResourceConfig<ResourceType>
  defaultHeaders: DataTableHeader[]
  protectedFields?: string[]
}

export const routeParamIdToString = (id: string | string[]) => (Array.isArray(id) ? id[0] : id)
export const routeParamIdToInt = (id: string | string[]): number => {
  id = routeParamIdToString(id)
  if (Number.isNaN(id)) {
    console.error(`Numeric id required: "${id}" given`)
  }
  return parseInt(id as string)
}
