import type { UseFetchOptions } from '#app'
import type {
  ApiId,
  ApiResourceConfigOptions,
  ApiResourceItem,
  LdApiResourceItem,
  UseCollectionFetchOptions,
} from '~/composables'

export function useResource<ResourceType extends ApiResourceItem<ApiId>>(
  options: ApiResourceConfigOptions<ResourceType>,
) {
  const { resourceConfig, defaultHeaders, protectedFields } = options
  const { isAuthenticated } = useAppAuth()

  const headers = computed(() =>
    isAuthenticated.value
      ? defaultHeaders
      : defaultHeaders.filter((h) =>
          typeof h.key === 'string' && protectedFields ? !protectedFields.includes(h.key) : false,
        ),
  )

  const getCode = (getCodeFn: () => string) => computed(() => getCodeFn())

  async function fetchCollection(options: UseCollectionFetchOptions<ResourceType> = {}) {
    return useApiFetchCollection<ResourceType>(resourceConfig.apiPath, options)
  }

  async function fetchItem(
    id: string | number,
    options: UseFetchOptions<LdApiResourceItem<ResourceType>> = {},
  ) {
    const { data, pending, error } = await useApiFetchItem<LdApiResourceItem<ResourceType>>(
      resourceConfig.apiPath,
      id,
      options,
    )
    return {
      item: data,
      pending,
      error,
      code: getCode(resourceConfig.getCodeFn(data.value as ResourceType | null)),
    }
  }

  async function patchItem(
    id: string | number,
    options: UseFetchOptions<never>,
    originalItem: ResourceType,
    updatedItem: Partial<ResourceType>,
  ) {
    const _options = Object.assign({}, options, {
      originalItem,
      updatedItem,
    })
    return useApiPatchItem(resourceConfig.apiPath, id, _options)
  }

  return { headers, isAuthenticated, fetchCollection, fetchItem, patchItem }
}
