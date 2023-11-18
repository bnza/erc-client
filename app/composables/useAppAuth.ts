export const enum Role {
  Base = "ROLE_BASE",
  Editor = "ROLE_EDITOR",
  Admin = "ROLE_ADMIN",
}
export function useAppAuth() {
  const { data, status } = useAuth();
  const isAuthenticated = computed(() => unref(status) === "authenticated");
  const isLoading = computed(() => unref(status) === "loading");

  const roles = computed(() =>
    unref(isAuthenticated)
      ? // @ts-ignore
        (data.value?.roles as Array<Role>)
      : ([] as Array<Role>),
  );

  const userIdentifier = computed(() =>
    // @ts-ignore
    unref(isAuthenticated) ? (data.value?.email as string) : null,
  );

  function _hasRole(role: Role) {
    return unref(isAuthenticated) ? unref(roles).includes(role) : false;
  }
  const hasRole = computed(() => _hasRole);
  const hasRoleAdmin = computed(() => _hasRole(Role.Admin));
  return { isAuthenticated, isLoading, userIdentifier, hasRole, hasRoleAdmin };
}
