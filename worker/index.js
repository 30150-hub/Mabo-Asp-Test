/**
 * Static-asset Worker for the Mabò ASP showcase.
 *
 * The site is a client-rendered Vite/React SPA, so all requests are served by
 * the ASSETS binding (with SPA fallback to index.html enabled in the Sites
 * manifest). Keeping this Worker trivial means the preview and production
 * environments serve exactly the same build output that was tested locally.
 */
export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } })
    }

    return env.ASSETS.fetch(request)
  },
}
