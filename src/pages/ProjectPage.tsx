import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AssetGallery } from '../components/AssetGallery'
import { DirectoryAxis } from '../components/DirectoryAxis'
import { SiteHeader } from '../components/SiteHeader'
import { assetsByNode, type FigmaAsset } from '../data/assetManifest'
import { adjacentProjects, projectById, type ProjectDefinition, type ProjectId, type ProjectSection } from '../data/projects'
import { applyPageMeta } from '../lib/pageMeta'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: ProjectId }>()
  const project = projectId ? projectById[projectId] : undefined
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!project) return
    applyPageMeta({
      title: `${project.title} — 袁泉作品集`,
      description: project.summary,
      path: `/projects/${project.id}`,
      themeColor: themeColors[project.theme] ?? '#050505',
    })
  }, [project])

  const allProjectAssets = useMemo(() => project ? collectProjectAssets(project) : [], [project])
  if (!project) return <Navigate replace to="/404" />

  const { previous, next } = adjacentProjects(project.id)
  const heroAsset = allProjectAssets.find((asset) => asset.kind === 'image')

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className={styles.page} data-theme={project.theme}>
      <a className="skip-link" href="#project-main">跳到项目内容</a>
      <SiteHeader current={`${project.number} ${project.title}`} light={project.theme === 'paper' || project.theme === 'teal'} />

      <main id="project-main">
        <section className={styles.hero} aria-labelledby="project-title">
          <div className={styles.heroCopy}>
            <p className={styles.category}>{project.category}</p>
            <p className={styles.number}>{project.number}</p>
            <h1 id="project-title">{project.title}</h1>
            <p className={styles.english}>{project.englishTitle}</p>
            <p className={styles.summary}>{project.summary}</p>
            <dl className={styles.meta}>
              <div><dt>ROLE</dt><dd>{project.role}</dd></div>
              <div><dt>PERIOD</dt><dd>{project.period}</dd></div>
            </dl>
          </div>
          {heroAsset && (
            <figure className={styles.heroMedia}>
              <img alt={`${project.title} 项目封面`} fetchPriority="high" height={heroAsset.height} src={heroAsset.src} width={heroAsset.width} />
            </figure>
          )}
        </section>

        <DirectoryAxis projectId={project.id} sections={project.sections} />

        <div className={styles.sections}>
          {project.sections.map((section, index) => {
            const assets = sectionAssets(project, section, index)
            return (
              <section className={styles.section} id={section.id} key={section.id}>
                <div className={styles.sectionHeading}>
                  <p className={styles.sectionIndex}>{String(index + 1).padStart(2, '0')}</p>
                  <div>
                    <h2>{section.title}</h2>
                    {section.description && <p>{section.description}</p>}
                  </div>
                </div>
                {assets.length ? (
                  <AssetGallery
                    assets={assets}
                    layout={section.layout}
                    projectTitle={project.title}
                    skipFirst={index === 0 && assets[0]?.src === heroAsset?.src}
                  />
                ) : (
                  <div className={styles.textPlate} aria-label={`${section.title} 内容概览`}>
                    <span>{project.englishTitle}</span>
                    <strong>{section.label}</strong>
                    <p>{section.description ?? '本章节以研究过程、产品推演与设计结论构成完整证据链。'}</p>
                  </div>
                )}
              </section>
            )
          })}
        </div>

        <section className={styles.close} aria-label="项目导航">
          <div className={styles.closeTop}>
            <p>END OF PROJECT · {project.number}</p>
            <button onClick={copyLink} type="button">{copied ? 'LINK COPIED' : 'COPY LINK'}</button>
          </div>
          <div className={styles.pager}>
            <Link to={`/projects/${previous.id}`}>
              <span>← PREVIOUS</span>
              <strong>{previous.title}</strong>
            </Link>
            <Link className={styles.indexLink} to="/#work-index">BACK TO WORK INDEX</Link>
            <Link className={styles.next} to={`/projects/${next.id}`}>
              <span>NEXT →</span>
              <strong>{next.title}</strong>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

function collectProjectAssets(project: ProjectDefinition) {
  const nodeIds = [...project.figmaNodes, ...project.sections.flatMap((section) => section.nodeIds)]
  const seen = new Set<string>()
  return nodeIds.flatMap((nodeId) => assetsByNode[nodeId] ?? []).filter((asset) => {
    if (seen.has(asset.src)) return false
    seen.add(asset.src)
    return true
  })
}

function sectionAssets(project: ProjectDefinition, section: ProjectSection, sectionIndex: number) {
  const direct = unique(section.nodeIds.flatMap((nodeId) => assetsByNode[nodeId] ?? []))
  if (direct.length && !section.nodeIds.every((nodeId) => project.sections.filter((item) => item.nodeIds.includes(nodeId)).length > 1)) {
    return direct
  }

  const pool = direct.length ? direct : unique(project.figmaNodes.flatMap((nodeId) => assetsByNode[nodeId] ?? []))
  if (!pool.length) return []
  const related = project.sections.filter((item) => item.nodeIds.some((nodeId) => section.nodeIds.includes(nodeId)))
  const occurrence = Math.max(0, related.findIndex((item) => item.id === section.id))
  const divisor = direct.length ? related.length : project.sections.length
  const chunk = Math.max(1, Math.ceil(pool.length / divisor))
  const fallbackOccurrence = direct.length ? occurrence : sectionIndex
  return pool.slice(fallbackOccurrence * chunk, (fallbackOccurrence + 1) * chunk)
}

function unique(assets: FigmaAsset[]) {
  const seen = new Set<string>()
  return assets.filter((asset) => {
    if (seen.has(asset.src)) return false
    seen.add(asset.src)
    return true
  })
}

const themeColors: Record<string, string> = {
  scent: '#754b2c',
  pals: '#f7f6fb',
  teal: '#f8fbfa',
  paper: '#f6f1e7',
  lab: '#111111',
  forest: '#e7efe7',
  stitch: '#f5f1ed',
  gallery: '#030303',
}
