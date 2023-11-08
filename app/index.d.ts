import type {Role} from "~/composables/useAppAuth";

declare module '#app' {
    interface PageMeta {
        requiredRole?: Role,
        fromPage?: string
    }
}

export {}
