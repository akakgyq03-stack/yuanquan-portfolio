import { createPortal } from 'react-dom'
import { type KeyboardEvent as ReactKeyboardEvent, type MouseEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import styles from './ImageLightbox.module.css'

interface LightboxImage {
  alt: string
  src: string
}

interface ImageLightboxScopeProps {
  children: ReactNode
}

const lightboxSelector = 'img[data-lightbox-src]'

export function ImageLightboxScope({ children }: ImageLightboxScopeProps) {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!activeImage) return

    restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null)
    }
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = previousOverflow
      restoreFocusRef.current?.focus()
      restoreFocusRef.current = null
    }
  }, [activeImage])

  const openImage = (image: HTMLImageElement) => {
    const src = image.dataset.lightboxSrc || image.currentSrc || image.src
    if (!src) return
    setActiveImage({ alt: image.alt || '交互界面大图', src })
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const image = (event.target as Element).closest(lightboxSelector)
    if (!(image instanceof HTMLImageElement)) return
    event.preventDefault()
    openImage(image)
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    const image = (event.target as Element).closest(lightboxSelector)
    if (!(image instanceof HTMLImageElement)) return
    event.preventDefault()
    openImage(image)
  }

  return (
    <div className={styles.scope} onClick={handleClick} onKeyDown={handleKeyDown}>
      {children}
      {activeImage && typeof document !== 'undefined' && createPortal(
        <div
          aria-label={activeImage.alt}
          aria-modal="true"
          className={styles.backdrop}
          onClick={(event) => { if (event.target === event.currentTarget) setActiveImage(null) }}
          role="dialog"
        >
          <div className={styles.panel}>
            <button
              aria-label="关闭大图"
              className={styles.close}
              onClick={() => setActiveImage(null)}
              ref={closeButtonRef}
              type="button"
            >
              <svg aria-hidden="true" height="18" viewBox="0 0 18 18" width="18">
                <path d="m3 3 12 12M15 3 3 15" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" />
              </svg>
            </button>
            <img alt={activeImage.alt} className={styles.image} src={activeImage.src} />
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}
