// GitHub Pages serves project sites from /<repo>/ and the Vite dev server from /,
// so every path in /public has to be resolved against the build base.
const BASE = import.meta.env.BASE_URL

export function asset(path: string): string {
  return `${BASE}${path.replace(/^\//, '')}`
}
