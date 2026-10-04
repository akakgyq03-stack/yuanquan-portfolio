import OdorCanvas from '../../figma/generated/OdorCanvas'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasAnchors, CanvasProjectLayout } from './CanvasProjectLayout'
import styles from './OdorPage.module.css'

const directory = [
  { id: 'overview', label: '项目概览' }, { id: 'imagination', label: '气味想象' },
  { id: 'visual-relation', label: '视觉关联' }, { id: 'strategy', label: '设计策略' },
  { id: 'workflow', label: '工作流构建' }, { id: 'scent-path', label: '香气路径' },
  { id: 'result', label: '最终结果' },
]

export default function OdorPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="odor-land" tone="light">
      <ResponsiveArtboard height={8119} label="Odor Land 气味可视化工作流" width={1440}>
        <div className={styles.canvas}><OdorCanvas /></div>
        <CanvasAnchors items={[
          { id: 'overview', top: 0 }, { id: 'imagination', top: 1000 }, { id: 'visual-relation', top: 2050 },
          { id: 'strategy', top: 3750 }, { id: 'workflow', top: 4750 }, { id: 'scent-path', top: 6200 },
          { id: 'result', top: 7200 },
        ]} />
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
