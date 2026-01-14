/**
 * @param {string} path
 * @returns {string}
 */
export function resolvePublicUrl(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path)) return path

  const base =  import.meta.env.BASE_URL
  return base.replace(/\/$/, '') + path
}

export function resolveHtmlUrls(html) {
  const base = import.meta.env.BASE_URL
  const doc = new DOMParser().parseFromString(html, 'text/html')

  doc.querySelectorAll('[src], [href]').forEach(el => {
    const attr = el.getAttribute('src') ? 'src' : 'href'
    const val = el.getAttribute(attr)

    if (val && val.startsWith('/')) {
      el.setAttribute(attr, base.replace(/\/$/, '') + val)
    }
  })

  return doc.body.innerHTML
}
