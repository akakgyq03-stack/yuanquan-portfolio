import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import type { ProjectSection } from '../data/projects'
import styles from './DirectoryAxis.module.css'

interface DirectoryAxisProps {
  sections: ProjectSection[]
  projectId: string
}

export function DirectoryAxis({ sections, projectId }: DirectoryAxisProps) {
  const initial = useMemo(() => window.location.hash.slice(1) || sections[0]?.id || '', [sections])
  const [active, setActive] = useState(initial)
  const listRef = useRef<HTMLDivElement>(null)
  const userNavigated = useRef(false)
  const programmaticTarget = useRef<string | null>(null)

  useEffect(() => {
    const projectPath = `/projects/${projectId}`
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.location.pathname !== projectPath) return
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (!visible) return
        const id = visible.target.id
        if (programmaticTarget.current && programmaticTarget.current !== id) return
        programmaticTarget.current = null
        setActive(id)
        const url = `${projectPath}#${id}`
        window.history.replaceState(window.history.state, '', url)
      },
      { rootMargin: '-22% 0px -68% 0px', threshold: 0 },
    )
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [sections, projectId])

  useEffect(() => {
    const track = listRef.current
    const current = track?.querySelector<HTMLElement>(`[data-section="${active}"]`)
    if (track && current) {
      const left = current.offsetLeft - (track.clientWidth - current.clientWidth) / 2
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      track.scrollTo({ left, behavior: userNavigated.current && !reducedMotion ? 'smooth' : 'auto' })
    }
    userNavigated.current = false
  }, [active])

  const navigate = (id: string) => {
    userNavigated.current = true
    programmaticTarget.current = id
    window.history.pushState({ ...window.history.state, section: id }, '', `${window.location.pathname}#${id}`)
    setActive(id)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const delta = event.key === 'ArrowRight' ? 1 : -1
    const next = (index + delta + sections.length) % sections.length
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('button[data-section]')
    buttons?.[next]?.focus()
  }

  const goToTop = () => {
    userNavigated.current = true
    programmaticTarget.current = '__top__'
    window.history.pushState({ ...window.history.state, section: null }, '', window.location.pathname)
    setActive(sections[0]?.id ?? '')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const release = () => {
      programmaticTarget.current = null
      window.history.replaceState(window.history.state, '', window.location.pathname)
    }
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
    if (reducedMotion) release()
    else {
      let fallback = 0
      const onScrollEnd = () => {
        window.clearTimeout(fallback)
        release()
      }
      window.addEventListener('scrollend', onScrollEnd, { once: true })
      fallback = window.setTimeout(() => {
        window.removeEventListener('scrollend', onScrollEnd)
        release()
      }, 1200)
    }
  }

  return (
    <nav className={styles.axis} aria-label="项目章节目录">
      <div className={styles.track} ref={listRef}>
        {sections.map((section, index) => (
          <button
            className={styles.item}
            data-active={active === section.id || undefined}
            data-section={section.id}
            key={section.id}
            onClick={() => navigate(section.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            type="button"
            aria-current={active === section.id ? 'location' : undefined}
          >
            <span>{section.shortLabel ?? section.label}</span>
          </button>
        ))}
        <button className={`${styles.item} ${styles.top}`} onClick={goToTop} type="button">
          TOP ↑
        </button>
      </div>
    </nav>
  )
}
