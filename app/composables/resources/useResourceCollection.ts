import type { UseFetchOptions } from 'nuxt/app'
import type { ApiResourceConfig, ApiResourceItem, UseCollectionFetchOptions } from '~/composables'

export async function useResourceCollection<
  ResourceType extends ApiResourceItem<ResourceType['id']>,
>(resourceConfig: ApiResourceConfig<ResourceType>) {
  const { isAuthenticated, hasRole } = useAppAuth()
  async function fetchCollection(options: UseCollectionFetchOptions<ResourceType> = {}) {
    const { items, paginationOption, totalItems, pending, error } =
      await useApiFetchCollection<ResourceType>(resourceConfig.apiPath, options)
  }

  return { fetchCollection }
}
