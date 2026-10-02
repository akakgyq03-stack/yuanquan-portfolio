import Frame0 from '../../figma/generated/Forest_537_1840'
import Frame1 from '../../figma/generated/Forest_537_13134'
import Frame2 from '../../figma/generated/Forest_537_13294'
import Frame3 from '../../figma/generated/Forest_537_13321'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasProjectLayout } from './CanvasProjectLayout'

const directory = [
  { id: 'overview', label: '项目概览' },
  { id: 'interviews', label: '用户访谈' },
  { id: 'desk-research', label: '二手调研' },
  { id: 'high-fidelity', label: '高保真界面' },
]

export default function ForestPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="forest-wardrobe" tone="light">
      <ResponsiveArtboard height={4320} label="森林衣橱" width={3456}>
        <div style={{ background: '#fff', height: 4320, position: 'relative', width: 3456 }}>
        <section id="overview" style={{ height: 1080, left: 0, position: 'absolute', top: 0, width: 3456 }}><Frame0 /></section>
        <section id="interviews" style={{ height: 1080, left: 0, position: 'absolute', top: 1080, width: 3456 }}><Frame1 /></section>
        <section id="desk-research" style={{ height: 1080, left: 0, position: 'absolute', top: 2160, width: 3456 }}><Frame2 /></section>
        <section id="high-fidelity" style={{ height: 1080, left: 0, position: 'absolute', top: 3240, width: 3456 }}><Frame3 /></section>
        </div>
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}

