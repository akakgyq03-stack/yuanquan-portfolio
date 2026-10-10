import { Link } from 'react-router-dom'
import { AIGC_VIDEO_URL } from '../../data/media'
import AigcCanvas from '../../figma/generated/AigcCanvas'
import ProductOverview from '../../figma/generated/ProductOverview'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { prefetchRoute } from '../../lib/routePrefetch'
import { AigcVideo } from './AigcVideo'
import { CanvasAnchors, CanvasProjectLayout } from './CanvasProjectLayout'
import styles from './AigcPage.module.css'

const directory = [
  { id: 'overview', label: '项目概览' },
  { id: 'content-account', label: '内容账号' },
  { id: 'scene-generation', label: '场景生成' },
  { id: 'character-consistency', label: '角色一致性' },
  { id: 'video-practice', label: '视频实践' },
  { id: 'final-work', label: '最终作品' },
]

const productHotspots = [
  { label: '打开香迹档案', path: '/projects/perfume-lab', left: 80, width: 255 },
  { label: '打开 Pals Go', path: '/projects/pals-go', left: 408, width: 264 },
  { label: '打开 Idea Tree Skill', path: '/projects/idea-tree', left: 797, width: 274 },
  { label: '打开 Coze 气味可视化工作流', path: '/projects/odor-land', left: 1130, width: 261 },
]

export default function AigcPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="aigc-creative-practice">
      <div className={styles.aigcComposition}>
        <ResponsiveArtboard height={5899} label="AIGC 创作实践" width={1440}>
          <AigcCanvas />
          <CanvasAnchors items={[
            { id: 'overview', top: 0 }, { id: 'content-account', top: 1030 },
            { id: 'scene-generation', top: 1450 }, { id: 'character-consistency', top: 3000 },
            { id: 'video-practice', top: 4300 }, { id: 'final-work', top: 5400 },
          ]} />
        </ResponsiveArtboard>
        <div className={styles.videoOverlay}>
          <AigcVideo src={AIGC_VIDEO_URL} />
        </div>
      </div>
      <ResponsiveArtboard height={1321} label="AI 产品项目总览" width={1440}>
        <ProductOverview />
        <div className={styles.productHotspots}>
          {productHotspots.map((item) => (
            <Link
              aria-label={item.label}
              key={item.path}
              onFocus={() => prefetchRoute(item.path)}
              onMouseEnter={() => prefetchRoute(item.path)}
              onPointerDown={() => prefetchRoute(item.path)}
              style={{ left: item.left, width: item.width }}
              to={item.path}
            />
          ))}
        </div>
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
