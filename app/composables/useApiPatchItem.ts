import type { UseFetchOptions } from 'nuxt/app'
import type { ApiId, LdApiResourceItem, UsePatchItemFetchOptions } from '~/composables'
import { defu } from 'defu'
import { diff } from 'deep-object-diff'

export function useApiPatchItem<ResourceType extends LdApiResourceItem<never>>(
  url: string | (() => string),
  id: ApiId,
  options: UsePatchItemFetchOptions,
) {
  const { originalItem, updatedItem, ..._options } = options
  const diffItem = { ...diff(originalItem, updatedItem) }
  if (Object.keys(diffItem).length === 0) {
    return Promise.resolve(reactive({ pending: false, error: null }))
  }
  const patchOptions: UseFetchOptions<never> = {
    method: 'PATCH',
    headers: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/merge-patch+json',
    },
    body: diffItem,
  }
  const __options = defu(_options, patchOptions)
  return useApiFetch<never>(`${url}/${id}`, __options)
}
