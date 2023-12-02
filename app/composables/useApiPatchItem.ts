import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'
import type { ApiId, LdApiResourceItem, UsePatchItemFetchOptions } from '~/composables'
import { diff } from 'deep-object-diff'

export function useApiPatchItem<ResourceType extends LdApiResourceItem<never>>(
  url: string | (() => string),
  id: ApiId,
  options: UsePatchItemFetchOptions,
) {
  const { originalItem, updatedItem, ..._options } = options
  const diffItem = diff(originalItem, updatedItem)
  const patchOptions: UseFetchOptions<never> = {
    method: 'PATCH',
    headers: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/merge-patch+json',
    },
    body: { ...diffItem },
  }
  const __options = defu(_options, patchOptions)
  return useApiFetch<never>(`${url}/${id}`, __options)
}
