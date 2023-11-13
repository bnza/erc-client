export interface JsonLdResource extends Readonly {
  "@context": string;
  "@id": string;
  "@type": string;
}
export interface JsonLdResourceItem<T extends number | string>
  extends JsonLdResource {
  id: T;
}
export interface ProtectedResourceItem<T> extends JsonLdResourceItem<T> {
  public: boolean;
}
export interface PublicResourceItem<T>
  extends Omit<JsonLdResourceItem<T>, "public"> {}
export interface JsonLdResourceCollection<
  ResourceType extends JsonLdResourceItem<T>,
> extends JsonLdResource {
  "hydra:totalItems": number;
  "hydra:member": Array<ResourceType>;
}
export interface SiteResourceItem extends ProtectedResourceItem<number> {
  name: string;
  code: string;
}

export interface Resource {
  apiPath;
}
