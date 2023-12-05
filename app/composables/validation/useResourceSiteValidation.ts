import type { ApiSiteResourceItem, LdApiResourceItem } from '~/composables'
import useVuelidate from '@vuelidate/core'
import { required, maxLength, helpers } from '@vuelidate/validators'
import { FORM_REQUIRED_FIELD } from './messages'
import { useAsyncUniqueValidator } from '~/composables/validation/useAsyncUniqueValidator'

export function useResourceSiteValidation(
  item: Ref<LdApiResourceItem<ApiSiteResourceItem> | null>,
) {
  const state = reactive(structuredClone({ ...item?.value }))

  const rules = {
    code: {
      required: helpers.withMessage(FORM_REQUIRED_FIELD, required),
      maxLength: maxLength(3),
      unique: useAsyncUniqueValidator<ApiSiteResourceItem>(
        'code',
        '/validator/unique/site/code',
        item,
      ),
    },
    name: {
      required: helpers.withMessage(FORM_REQUIRED_FIELD, required),
      unique: useAsyncUniqueValidator<ApiSiteResourceItem>(
        'name',
        '/validator/unique/site/name',
        item,
      ),
    },
  }

  const v$ = useVuelidate<Partial<ApiSiteResourceItem>>(rules, state)

  return { state, v$ }
}
