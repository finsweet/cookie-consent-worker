import storeConsents from './handlers/saveConsent';
import { handleOptions } from './handlers/handleOptions';
import { Request, Router } from 'itty-router';

const router = Router();

router.post('/', storeConsents);
router.options('*', handleOptions);
router.get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request: Request) => router.handle(request);
