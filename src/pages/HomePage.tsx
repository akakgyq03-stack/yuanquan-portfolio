import { useEffect } from 'react'
import HomeCanvas from '../figma/generated/HomeCanvas'
import { ResponsiveArtboard } from '../figma/ResponsiveArtboard'
import { assetsByNode } from '../data/assetManifest'
import { applyPageMeta } from '../lib/pageMeta'
import styles from './HomePage.module.css'

const homeImage = assetsByNode['21:2']?.[0]?.src

export default function HomePage() {
  useEffect(() => {
    applyPageMeta({
      title: '袁泉 / Yuan Quan — Portfolio',
      description: '袁泉的 AI 产品、AIGC、用户研究与交互设计作品集。',
      path: '/',
      image: homeImage,
    })
  }, [])

  return (
    <main className={styles.page} id="main">
      <a className="skip-link" href="#work-index">跳到作品索引</a>
      <ResponsiveArtboard height={2840} label="袁泉作品集首页" width={1440}>
        <HomeCanvas />
        <a aria-label="发送邮件至 13187688338@163.com" className={styles.emailHotspot} href="mailto:13187688338@163.com" />
        <span className={styles.indexAnchor} id="work-index" />
      </ResponsiveArtboard>
    </main>
  )
}
