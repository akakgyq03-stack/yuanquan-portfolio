import { type ReactNode, useEffect } from 'react'
import { assetsByNode } from '../../data/assetManifest'
import { projectById, type ProjectId } from '../../data/projects'
import { type DirectoryItem, ProjectChrome } from '../../figma/ProjectChrome'
import { applyPageMeta } from '../../lib/pageMeta'
import styles from './CanvasProjectLayout.module.css'

export function CanvasProjectLayout({
  children,
  directory,
  projectId,
  tone = 'dark',
}: {
  children: ReactNode
  directory: DirectoryItem[]
  projectId: ProjectId
  tone?: 'dark' | 'light'
}) {
  const project = projectById[projectId]
  useEffect(() => {
    const image = project.figmaNodes.flatMap((node) => assetsByNode[node] ?? []).find((asset) => asset.kind === 'image')?.src
    applyPageMeta({
      title: project.title + ' — 袁泉作品集',
      description: project.title + ' · ' + project.englishTitle,
      path: '/projects/' + project.id,
      image,
    })
  }, [project])

  return (
    <main className={[styles.page, styles[tone]].join(' ')} id="main">
      <a className="skip-link" href="#project-start">跳到项目内容</a>
      <span className={styles.start} id="project-start" />
      <ProjectChrome directory={project.showDirectory === false ? [] : directory} projectId={projectId} />
      {children}
    </main>
  )
}

export function CanvasAnchors({ items }: { items: Array<{ id: string; top: number }> }) {
  return (
    <div aria-hidden="true" className={styles.anchors}>
      {items.map((item) => <span id={item.id} key={item.id} style={{ top: item.top }} />)}
    </div>
  )
}
