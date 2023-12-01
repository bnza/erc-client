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

export interface HideableApiResourceItem<ApiId> extends ApiResourceItem<ApiId> {
  public?: boolean
}

export interface PublicApiResourceItem<ApiId>
  extends Omit<HideableApiResourceItem<ApiId>, 'public'> {}

export interface LdApiResourceItem<ResourceType extends ApiResourceItem<ResourceType['id']>>
  extends ResourceType {
  '@context': string
  '@id': string
  '@type': string
}

export interface LdApiResourceCollection<ResourceType extends ApiResourceItem<ResourceType['id']>>
  extends LdApiResourceItem {
  'hydra:totalItems': number
  'hydra:member': Array<LdApiResourceItem<ResourceType['id']>>
}

export interface ApiSiteResourceItem extends HideableApiResourceItem<number> {
  name: string
  code: string
}

export interface LdApiSiteResourceItem extends LdApiResourceItem<ApiSiteResourceItem> {}
export interface LdApiSiteResourceCollection extends LdApiResourceCollection<ApiSiteResourceItem> {}

export interface ApiUserResourceItem extends ApiResourceItem<string> {
  email: string
  roles: string[]
}

export interface LdApiUserResourceItem extends LdApiResourceItem<ApiUserResourceItem> {}
export interface LdApiUserResourceCollection extends LdApiResourceCollection<ApiUserResourceItem> {}
