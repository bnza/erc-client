import type { ApiResourceItem } from '~/composables'
import { helpers } from '@vuelidate/validators'
import type { ComputedRef } from 'vue'

const { withMessage, withAsync } = helpers
export function useAsyncUniqueValidator<ResourceType extends ApiResourceItem<ResourceType['id']>>(
  prop: keyof ResourceType,
  url: string | ComputedRef<string>,
  item: Ref<ResourceType | null>,
  message: string | null = null,
) {
  function validator(value: unknown) {
    if (value === '' || value === item.value?.[prop]) {
      return true
    }
    const parseBoolean = (data: Ref<number | null>) =>
      Boolean(data.value === null ? false : data.value)
    const _url = typeof url === 'string' ? url : url.value
    return useApiFetch<number>(`${_url}/${value}`).then((r) => parseBoolean(r.data))
  }

  return withMessage(message ?? `Duplicate ${String(prop)}`, withAsync(validator))
}
