interface EndpointPayload {
  id: string;
  action: string;
  url: string;
  userAgent: string;
  bannerText: string;
  consents: {
    uncategorized: boolean;
    essential: boolean;
    personalization: boolean;
    analytics: boolean;
    marketing: boolean;
  };
}
