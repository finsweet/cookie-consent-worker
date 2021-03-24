import { Request, Router } from 'itty-router'

import SaveConsent from './handlers/saveConsent'

const router = Router()

router
  
  .post('/', SaveConsent)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: Request | Request) => router.handle(request)