interface CookieConsentPayload {
  id: string; // UUID for the consent
  action: string; // URL where the user gave consent
  url: string; // Action performed by the user: allow, deny or submit
  userAgent: string; // User Agent of the user's browser
  bannerText: string; // The text that is displayed in the Banner component
  consents: {
    uncategorized: boolean;
    essential: boolean;
    personalization: boolean;
    analytics: boolean;
    marketing: boolean;
  };
}
