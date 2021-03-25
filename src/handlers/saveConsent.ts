import { corsHeaders } from '../utils/constants';
import { EndpointPayload } from '../utils/types';

const storeConsents = async (request: Request): Promise<Response> => {
  const { id, action, url, userAgent, consents, bannerText }: EndpointPayload = await request.json();

  if (!id || !action || !url || !userAgent || !consents || !bannerText)
    return new Response('Some parameter is missing', { status: 400, headers: corsHeaders });

  const timestamp = new Date().toISOString();

  const ip = request.headers.get('x-real-ip') || '';
  const anonymousIp = ip.replace(/\d*$/, '0');

  const consentsString = Object.entries(consents)
    .reduce<string[]>((acceptedKeys, [consentKey, value]) => {
      if (value) acceptedKeys.push(consentKey);
      return acceptedKeys;
    }, [])
    .join(',');

  const recordValue = [action, anonymousIp, timestamp, url, userAgent, consentsString, bannerText].join(';');

  await CONSENTS.put(id, recordValue);

  const headers = {
    ...corsHeaders,
    'Content-type': 'application/json',
  };

  return new Response(recordValue, { status: 200, headers });
};

export default storeConsents;
