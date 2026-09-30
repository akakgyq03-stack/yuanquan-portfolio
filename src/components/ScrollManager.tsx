import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      let attempts = 0
      let timer = 0
      const restoreSection = () => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'instant', block: 'start' })
          return
        }
        attempts += 1
        if (attempts < 40) timer = window.setTimeout(restoreSection, 50)
      }
      restoreSection()
      return () => window.clearTimeout(timer)
    } else if (navigationType !== 'POP') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash, navigationType])

  return null
}
