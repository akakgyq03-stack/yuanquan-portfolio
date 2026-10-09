import { useState } from 'react'
import styles from './AigcPage.module.css'

const POSTER_URL = '/assets/media/aigc-watermelon-poster.webp'

export function AigcVideo({ src }: { src: string }) {
  const [hasError, setHasError] = useState(!src)

  return (
    <section
      aria-label="《合成大西瓜》AIGC 视频作品"
      className={styles.videoSection}
      data-aigc-video=""
    >
      <video
        aria-label="播放《合成大西瓜》AIGC 视频作品"
        className={styles.video}
        controls
        onError={() => setHasError(true)}
        playsInline
        poster={POSTER_URL}
        preload="metadata"
        src={src || undefined}
      />
      {hasError ? (
        <div className={styles.videoError} role="status">
          <p>视频暂时无法加载</p>
          {src ? (
            <a href={src} rel="noreferrer" target="_blank">
              在新窗口打开视频
            </a>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}
