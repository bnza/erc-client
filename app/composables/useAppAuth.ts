export const enum Role {
    Base = "ROLE_BASE",
    Editor = "ROLE_EDITOR",
    Admin = "ROLE_ADMIN"
}

export function useAppAuth() {
    const { data, status } = useAuth()
    const isAuthenticated = computed(() => unref(status) === 'authenticated')
    const isLoading = computed(() => unref(status) === 'loading')

    const roles = computed(() => unref(isAuthenticated) ? unref(data)["roles"] as Array<Role> : [] as  Array<Role>)

    const userIdentifier = computed(() => unref(isAuthenticated) ? unref(data)["email"] as string : null)

    function _hasRole(role: Role) {
        return unref(isAuthenticated) ?
            unref(roles).includes(role) :
            false
    }
    const hasRole = computed(() => _hasRole)
    const hasRoleAdmin = computed(() => hasRole(Role.Admin))
    return {isAuthenticated, isLoading, userIdentifier, hasRole, hasRoleAdmin}
}
