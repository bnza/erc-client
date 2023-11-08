import type {Role} from "~/composables/useAppAuth";
export default defineNuxtRouteMiddleware((to) => {
    const {isAuthenticated, hasRole} = useAppAuth()
    const requiredRole = to.meta.requiredRole as Role

    if (!requiredRole) {
        return abortNavigation('No required role set for ACL middleware')
    }

    if (!isAuthenticated.value) {
        return abortNavigation('Unauthenticated user in ACL middleware')
    }

    if (!hasRole.value(requiredRole)) {
        // @TODO use snackbar to notify
        console.error(`Forbidden: ${requiredRole} role required`)
        return navigateTo('/')
    }
})