import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeCanvas from '../figma/generated/HomeCanvas'
import ProductOverview from '../figma/generated/ProductOverview'
import { ResponsiveArtboard } from '../figma/ResponsiveArtboard'
import { assetsByNode } from '../data/assetManifest'
import { applyPageMeta } from '../lib/pageMeta'
import styles from './HomePage.module.css'

const homeImage = assetsByNode['21:2']?.[0]?.src

const homeHotspots = [
  { label: '打开 AIGC 创作实践', path: '/projects/aigc-creative-practice', top: 1010, height: 365 },
  { label: '打开 AI 产品项目', path: '/projects/perfume-lab', top: 1375, height: 365 },
  { label: '打开 Pals Go', path: '/projects/pals-go', top: 1740, height: 365 },
  { label: '打开 Pals Go 用户研究', path: '/projects/pals-go#research', top: 2105, height: 250 },
  { label: '打开 Pals Go 运营', path: '/projects/pals-go#operation', top: 2355, height: 210 },
  { label: '打开艺术展览作品', path: '/projects/art-exhibitions', top: 2565, height: 180 },
]

const productHotspots = [
  { label: '打开香迹档案', path: '/projects/perfume-lab', left: 80, width: 255 },
  { label: '打开 Pals Go', path: '/projects/pals-go', left: 408, width: 264 },
  { label: '打开 Idea Tree Skill', path: '/projects/idea-tree', left: 797, width: 274 },
  { label: '打开 Coze 气味可视化工作流', path: '/projects/odor-land', left: 1130, width: 261 },
]

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
      <ResponsiveArtboard height={2748} label="袁泉作品集首页" width={1440}>
        <HomeCanvas />
        <a aria-label="发送邮件至 13187688338@163.com" className={styles.emailHotspot} href="mailto:13187688338@163.com" />
        <div className={styles.hotspots} id="work-index">
          {homeHotspots.map((item) => (
            <Link aria-label={item.label} key={item.path + item.top} style={{ height: item.height, top: item.top }} to={item.path} />
          ))}
        </div>
      </ResponsiveArtboard>
      <ResponsiveArtboard height={1321} label="AI 产品项目总览" width={1440}>
        <ProductOverview />
        <div className={styles.productHotspots}>
          {productHotspots.map((item) => (
            <Link aria-label={item.label} key={item.path} style={{ left: item.left, width: item.width }} to={item.path} />
          ))}
        </div>
      </ResponsiveArtboard>
    </main>
  )
}
