import { corsHeaders } from '../constants';

/**
 * Handle HTTP OPTIONS request
 * @param request
 */
export const handleOptions = (request: Request): Response => {
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  const headers = request.headers;
  const origin = headers.get('Origin');
  const accessControlRequestMethod = headers.get('Access-Control-Request-Method');
  const accessControlAllowHeaders = headers.get('Access-Control-Request-Headers');

  if (origin !== null && accessControlRequestMethod !== null && accessControlAllowHeaders !== null) {
    // Handle CORS pre-flight request.
    const respHeaders = new Headers({
      ...corsHeaders,
      // Allow all future content Request headers to go back to browser
      // such as Authorization (Bearer) or X-Client-Name-Version
      'Access-Control-Allow-Headers': accessControlAllowHeaders,
    });

    return new Response(null, {
      headers: respHeaders,
    });
  } else {
    // Handle standard OPTIONS request.
    // If you want to allow other HTTP Methods, you can do that here.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS',
      },
    });
  }
};
