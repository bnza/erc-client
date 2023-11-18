import type { DataTableHeader } from "~/composables/vuetify";

export function useResource() {
  const { isAuthenticated } = useAppAuth();

  const getHeaders = computed(
    () =>
      (
        defaultHeaders: Array<DataTableHeader>,
        protectedFields: Array<string>,
      ) =>
        isAuthenticated.value
          ? defaultHeaders
          : defaultHeaders.filter((h) =>
              typeof h.key === "string"
                ? !protectedFields.includes(h.key)
                : false,
            ),
  );

  const parseNumericId = (id: string | string[]): number => {
    let _id: string | string[] | number = id;
    if (Array.isArray(id)) {
      _id = id[0] as string;
    }
    if (Number.isNaN(_id as string)) {
      console.error(`Numeric id required: "${_id}" given`);
    }
    return parseInt(_id as string);
  };

  return { getHeaders, isAuthenticated, parseNumericId };
}
