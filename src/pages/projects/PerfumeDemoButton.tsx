import { useState } from 'react'
import styles from './PerfumeDemoButton.module.css'

interface PerfumeDemoButtonProps {
  demoUrl?: string
}

const defaultDemoUrl = '/assets/media/perfume-demo.mp4'

export function PerfumeDemoButton({ demoUrl = defaultDemoUrl }: PerfumeDemoButtonProps) {
  const [showNotice, setShowNotice] = useState(false)

  const handleClick = () => {
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer')
      return
    }

    setShowNotice(true)
  }

  return (
    <>
      <button aria-label="点击观看完整demo" className={styles.demoButton} onClick={handleClick} type="button">
        <span aria-hidden="true" className={styles.playIcon}>
          <svg fill="none" viewBox="0 0 12 12">
            <path d="M3 2.2 9.6 6 3 9.8V2.2Z" fill="currentColor" />
          </svg>
        </span>
        <span className={styles.buttonLabel}>点击观看完整demo</span>
      </button>
      {showNotice && (
        <div className={styles.notice} role="status">
          完整 demo 视频链接待补充
          <button className={styles.closeButton} onClick={() => setShowNotice(false)} type="button">
            关闭
          </button>
        </div>
      )}
    </>
  )
}
