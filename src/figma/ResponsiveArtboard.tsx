import { type CSSProperties, type ReactNode, useLayoutEffect, useRef, useState } from 'react'
import styles from './ResponsiveArtboard.module.css'

interface ResponsiveArtboardProps {
  children: ReactNode
  height: number
  label: string
  width: number
}

export function ResponsiveArtboard({ children, height, label, width }: ResponsiveArtboardProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const host = hostRef.current
    if (!host) return
    const update = () => setScale(Math.min(1, host.clientWidth / width))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(host)
    return () => observer.disconnect()
  }, [width])

  return (
    <div
      aria-label={label}
      className={styles.host}
      ref={hostRef}
      style={{ '--scaled-height': `${height * scale}px` } as CSSProperties}
    >
      <div
        className={styles.canvas}
        style={{ height, transform: `translateX(-50%) scale(${scale})`, width }}
      >
        {children}
      </div>
    </div>
  )
}
