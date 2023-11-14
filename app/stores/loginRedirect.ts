import { defineStore } from "pinia";
import type { RouteLocationNormalizedLoaded } from "vue-router";

export const useLoginRedirectStore = defineStore("loginRedirect", () => {
  const route = useRoute();
  const previousPath = ref("");

  function setPreviousPath(_route: RouteLocationNormalizedLoaded) {
    if (_route.name !== "login") {
      previousPath.value = _route.fullPath;
    }
  }

  function resetPreviousPath() {
    previousPath.value = "";
  }

  const redirectUrl = computed(
    () => route.redirectedFrom?.fullPath ?? previousPath.value ?? "/",
  );
  return { previousPath, setPreviousPath, resetPreviousPath, redirectUrl };
});
