import type { ApiSiteResourceItem, LdApiResourceItem } from '~/composables'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { FORM_REQUIRED_FIELD } from './messages'

export function useResourceSiteValidation(
  item: Ref<LdApiResourceItem<ApiSiteResourceItem> | null>,
) {
  const state = reactive(structuredClone({ ...item?.value }))

  const rules = {
    code: {
      required: helpers.withMessage(FORM_REQUIRED_FIELD, required),
    },
    name: {
      required: helpers.withMessage(FORM_REQUIRED_FIELD, required),
    },
  }

  const v$ = useVuelidate<Partial<ApiSiteResourceItem>>(rules, state)

  return { state, v$ }
}
