import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { FigmaImage } from '../components/FigmaImage'
import { assetsByNode } from '../data/assetManifest'
import { projects } from '../data/projects'
import { applyPageMeta } from '../lib/pageMeta'
import styles from './HomePage.module.css'

const homeImages = (assetsByNode['21:2'] ?? []).filter((asset) => asset.kind === 'image')
const productImages = (assetsByNode['535:958'] ?? []).filter((asset) => asset.kind === 'image')

const capabilities = [
  { number:'01', title:'AIGC 创作', skills:'AIGC 图像 / 视频创作\n风格控制、角色与场景一致性、内容发布', ids:['aigc-creative-practice'] },
  { number:'02', title:'AI 产品与 Vibe Coding', skills:'vibe coding 产品、skill 设计、\nCOZE 工作流搭建', ids:['perfume-lab','idea-tree','odor-land'] },
  { number:'03', title:'产品体验与交互设计', skills:'C 端产品体验、信息架构、交互设计、\n可用性迭代', ids:['pals-go','textual-scent-lab','forest-wardrobe','stitch-revival'] },
  { number:'04', title:'用户研究与数据分析', skills:'定性 + 定量研究、SPSS 数据建模、\nUsability Testing', ids:['pals-go'] },
  { number:'05', title:'内容与社区运营', skills:'内容发布、社媒运营、线上社群与线下活动', ids:['pals-go'] },
  { number:'06', title:'艺术展览作品', skills:'装置艺术、工业设计', ids:['art-exhibitions'] },
]

const productCards = [
  { id:'perfume-lab', title:'香迹档案', caption:'生成式 AI 产品 · 可运行原型' },
  { id:'pals-go', title:'Pals Go', caption:'运动社交产品 · 用户研究与 UX' },
  { id:'idea-tree', title:'Idea Tree Skill', caption:'Human in the loop · Skill 架构设计' },
  { id:'odor-land', title:'Odor Land', caption:'AIGC 工作流 · 气味可视化' },
] as const

export default function HomePage() {
  useEffect(() => {
    applyPageMeta({
      title: '袁泉 / Yuan Quan — Portfolio',
      description: '袁泉的 AI 产品、AIGC、用户研究与交互设计作品集。',
      path: '/',
      image: homeImages[0]?.src,
    })
  }, [])

  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <SiteHeader />
      <main id="main">
        <section className={styles.hero}>
          <p className={styles.positioning}>从 AI 创作者，到 AI 产品构建者</p>
          <h1><span>袁泉 / Yuan Quan</span><em>Portfolio</em></h1>
          <p className={styles.school}>Shanghai Jiao Tong University · IIDE</p>
        </section>

        <section className={styles.evidence} aria-label="能力概览">
          <article><span>01</span><h2>AI 产品构建</h2><p>独立将产品假设快速转成真实运行的 AI Web 产品；从产品机会、AI Workflow 到交互与落地。</p></article>
          <article><span>02</span><h2>AIGC 创作</h2><p>AIGC 图像与视频创作，从真实创作者视角理解工具痛点。</p></article>
          <article><span>03</span><h2>用户研究 & UX</h2><p>深入用户研究，完成产品体验与交互界面设计。</p></article>
        </section>

        <section className={styles.index} id="work-index">
          <header className={styles.sectionHeader}>
            <p>CAPABILITY MAP · WORK INDEX</p>
            <h2>作品索引</h2>
            <span>点击项目名称或预览进入完整案例</span>
          </header>
          <div className={styles.columnLabels}><span>CAPABILITY</span><span>WHAT I DO</span><span>RELATED WORK / PAGE</span></div>
          {capabilities.map((capability, index) => (
            <article className={styles.capability} key={capability.number}>
              <div className={styles.capabilityName}><span>{capability.number}</span><h3>{capability.title}</h3></div>
              <p className={styles.skills}>{capability.skills}</p>
              <div className={styles.related}>
                <div>
                  {capability.ids.map((id) => {
                    const project = projects.find((item) => item.id === id)!
                    return <Link key={id} to={`/projects/${id}`}><span>{project.title}</span><small>P.{project.number} ↗</small></Link>
                  })}
                </div>
                {homeImages[index] && (
                  <Link className={styles.preview} to={`/projects/${capability.ids[0]}`}>
                    <FigmaImage alt={`${capability.title}项目预览`} asset={homeImages[index]} loading="lazy" sizes="240px" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className={styles.products} aria-labelledby="products-title">
          <header>
            <p>PRODUCT MANAGER INTERN · AI CREATIVE TOOLS</p>
            <h2 id="products-title"><span>02</span>AI+ 产品</h2>
          </header>
          <div className={styles.productGrid}>
            {productCards.map((card, index) => (
              <Link className={styles.productCard} key={card.id} to={`/projects/${card.id}`}>
                <figure>{productImages[index] && <FigmaImage alt={`${card.title}项目封面`} asset={productImages[index]} loading="lazy" sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 25vw" />}</figure>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.caption}</p>
              </Link>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div><span>CONTACT</span><a href="mailto:13187688338@163.com">13187688338@163.com</a></div>
          <p>Yuan Quan · Portfolio · 2026</p>
        </footer>
      </main>
    </div>
  )
}
