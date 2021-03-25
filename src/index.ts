import { handleRequest } from './handler';

declare global {
  const CONSENTS: KVNamespace;
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
