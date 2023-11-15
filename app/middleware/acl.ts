import type { Role } from "~/composables/useAppAuth";
import { useUiAppSnackbar } from "~/stores/ui";
export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated, hasRole } = useAppAuth();
  const requiredRole = to.meta.requiredRole as Role;

  if (!requiredRole) {
    return abortNavigation("No required role set for ACL middleware");
  }

  if (!isAuthenticated.value) {
    return abortNavigation("Unauthenticated user in ACL middleware");
  }

  if (!hasRole.value(requiredRole)) {
    useUiAppSnackbar().show({
      _text: `Access to page forbidden: ${requiredRole} role required`,
      _color: "error",
      _vertical: true,
      _timeout: -1,
    });
    return navigateTo("/");
  }
});
