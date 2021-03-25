import { Request, Router } from 'itty-router';
import { handleOptions } from './handlers/handleOptions';

import storeConsents from './handlers/saveConsent';

const router = Router();
router.post('/', storeConsents);
router.options('*', handleOptions);
router.get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request: Request) => router.handle(request);
