interface PageMeta {
  title: string
  description: string
  path: string
  themeColor?: string
}

export function applyPageMeta({ title, description, path, themeColor = '#050505' }: PageMeta) {
  document.title = title
  setMeta('meta[name="description"]', 'name', 'description', description)
  setMeta('meta[property="og:title"]', 'property', 'og:title', title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', description)
  setMeta('meta[property="og:url"]', 'property', 'og:url', new URL(path, window.location.origin).href)
  setMeta('meta[name="theme-color"]', 'name', 'theme-color', themeColor)

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.append(canonical)
  }
  canonical.href = new URL(path, window.location.origin).href
}

function setMeta(selector: string, key: 'name' | 'property', keyValue: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(key, keyValue)
    document.head.append(element)
  }
  element.content = content
}
