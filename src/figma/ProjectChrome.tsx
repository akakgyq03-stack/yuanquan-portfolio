import { Link } from 'react-router-dom'
import { adjacentProjects, projectById, type ProjectId } from '../data/projects'
import styles from './ProjectChrome.module.css'

export interface DirectoryItem {
  id: string
  label: string
}

export function ProjectChrome({ directory, projectId }: { directory: DirectoryItem[]; projectId: ProjectId }) {
  const project = projectById[projectId]
  const { previous, next } = adjacentProjects(projectId)
  return (
    <>
      <nav aria-label="项目导航" className={styles.topbar}>
        <Link to="/">← 返回作品索引</Link>
        <span>{project.number} / {project.title}</span>
      </nav>
      {directory.length > 0 && (
        <nav aria-label="项目目录" className={styles.directory}>
          {directory.map((item, index) => (
            <a href={`#${item.id}`} key={item.id}><i>{String(index + 1).padStart(2, '0')}</i><span>{item.label}</span></a>
          ))}
        </nav>
      )}
      <nav aria-label="相邻项目" className={styles.pager}>
        <Link aria-label={`上一个项目：${previous.title}`} to={`/projects/${previous.id}`}>←</Link>
        <Link aria-label={`下一个项目：${next.title}`} to={`/projects/${next.id}`}>→</Link>
      </nav>
    </>
  )
}
