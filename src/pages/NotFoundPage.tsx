import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <span>404</span>
        <h1>这条路径没有作品。</h1>
        <p>The page you are looking for is not part of this portfolio.</p>
        <div><Link to="/">返回首页</Link><Link to="/#work-index">查看作品索引</Link></div>
      </main>
    </div>
  )
}
