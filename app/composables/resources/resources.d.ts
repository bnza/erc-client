export interface JsonLdResource extends Readonly {
  '@context': string
  '@id': string
  '@type': string
}
export interface JsonLdResourceItem<T extends number | string> extends JsonLdResource {
  id: T
}
export interface ProtectedResourceItem<T> extends JsonLdResourceItem<T> {
  public: boolean
}
export interface PublicResourceItem<T> extends Omit<JsonLdResourceItem<T>, 'public'> {}
export interface JsonLdResourceCollection<ResourceType extends JsonLdResourceItem<T>>
  extends JsonLdResource {
  'hydra:totalItems': number
  'hydra:member': Array<ResourceType>
}
export interface SiteResourceItem extends ProtectedResourceItem<number> {
  name: string
  code: string
}

export interface UserResourceItem extends JsonLdResourceItem<string> {
  email: string
  roles: string[]
}
export interface ApiResourceConfig {
  apiPath: string
  appPath: string
  name: string
  labels: [string, string]
}

export type ApiId = number | string
interface ApiResourceItem<ApiId> {
  id: ApiId
}

export interface HideableApiResourceItem<ApiId> extends ApiResourceItem {
  public: boolean
}

export interface PublicApiResourceItem<ApiId> extends Omit<HideableApiResourceItem, 'public'> {}

export interface LdApiResourceItem<ApiId> extends ApiResourceItem {
  '@context': string
  '@id': string
  '@type': string
}

export interface LdApiResourceCollection<ResourceType extends LdApiResourceItem>
  extends LdApiResourceItem {
  'hydra:totalItems': number
  'hydra:member': Array<ResourceType>
}

export interface ApiSiteResourceItem extends HideableApiResourceItem<number> {
  name: string
  code: string
}

export interface ApiUserResourceItem extends ApiResourceItem<string> {
  email: string
  roles: string[]
}
