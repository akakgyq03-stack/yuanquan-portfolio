import { Link } from 'react-router-dom'
import styles from './SiteHeader.module.css'

interface SiteHeaderProps {
  current?: string
  light?: boolean
}

export function SiteHeader({ current, light = false }: SiteHeaderProps) {
  return (
    <header className={styles.header} data-light={light || undefined}>
      <Link className={styles.identity} to="/" aria-label="返回首页">
        <span>袁泉</span>
        <span className={styles.slash}>/</span>
        <span>YUAN QUAN</span>
      </Link>
      <nav className={styles.nav} aria-label="全站导航">
        {current && <Link to="/#work-index">WORK INDEX</Link>}
        {current && <span className={styles.current}>{current}</span>}
        <a href="mailto:13187688338@163.com">CONTACT</a>
      </nav>
    </header>
  )
}
