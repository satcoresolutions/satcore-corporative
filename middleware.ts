// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Generar un código único (nonce)
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Definir la política CSP
  // Importante: Permitimos Google Analytics y Tag Manager
  const cspHeader = `
  default-src 'self';
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https:;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://www.google.com;
  connect-src 'self'
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://www.googletagmanager.com
    https://www.google.com;
  frame-src 'self'
    https://www.googletagmanager.com
    https://calendar.google.com;
  base-uri 'self';
  form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  return response;
}

export const config = {
  matcher: [
    // Ejecutar en todas las rutas excepto estáticos (imágenes, favicon, etc)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};