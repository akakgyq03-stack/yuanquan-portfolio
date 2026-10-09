import PerfumeCanvas from '../../figma/generated/PerfumeCanvas'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasAnchors, CanvasProjectLayout } from './CanvasProjectLayout'
import { PerfumeDemoButton } from './PerfumeDemoButton'

const directory = [
  { id: 'overview', label: '项目概览' }, { id: 'insight', label: '洞察与机会' },
  { id: 'competitive-gap', label: '竞争缺口' }, { id: 'target-users', label: '目标用户' },
  { id: 'product-value', label: '产品价值' }, { id: 'core-mechanism', label: '核心机制' },
  { id: 'final-output', label: '最终产出' }, { id: 'ux-visual', label: 'UX 与视觉' },
]

export default function PerfumePage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="perfume-lab">
      <ResponsiveArtboard height={11476} label="香迹档案" width={1440}>
        <PerfumeCanvas />
        <PerfumeDemoButton />
        <CanvasAnchors items={[
          { id: 'overview', top: 0 }, { id: 'insight', top: 1250 }, { id: 'competitive-gap', top: 2800 },
          { id: 'target-users', top: 3900 }, { id: 'product-value', top: 5000 }, { id: 'core-mechanism', top: 6200 },
          { id: 'final-output', top: 9550 }, { id: 'ux-visual', top: 10400 },
        ]} />
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
