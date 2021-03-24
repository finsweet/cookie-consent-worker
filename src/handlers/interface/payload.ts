interface Consents {
    uncategorized: boolean;
    essential: boolean;
    personalization: boolean;
    analytics: boolean;
    marketing: boolean;
}

interface EndpointPayload {
    id: string;
    action: string;
    url: string;
    userAgent: string;
    consents: Consents;
    bannerText: string;
}
interface SaveToDB {
    action: string;
    url: string;
    userAgent: string;
    consents: Consents;
    bannerText: string;
}
export { Consents, SaveToDB, EndpointPayload }