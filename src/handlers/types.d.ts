export interface Consents {
  uncategorized: boolean;
  essential: boolean;
  personalization: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface EndpointPayload {
  id: string;
  action: string;
  url: string;
  userAgent: string;
  consents: Consents;
  bannerText: string;
}
