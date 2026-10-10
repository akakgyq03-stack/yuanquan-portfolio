import Frame0 from '../../figma/generated/Textual_537_1385'
import Frame1 from '../../figma/generated/Textual_537_1467'
import Frame2 from '../../figma/generated/Textual_537_1570'
import Frame3 from '../../figma/generated/Textual_537_1631'
import Frame4 from '../../figma/generated/Textual_537_1698'
import Frame5 from '../../figma/generated/Textual_537_1766'
import { ImageLightboxScope } from '../../components/ImageLightbox'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasProjectLayout } from './CanvasProjectLayout'

const directory = [
  { id: 'overview', label: '项目概览' },
  { id: 'research', label: '用户研究' },
  { id: 'technology', label: '技术框架' },
  { id: 'concept', label: '设计概念' },
  { id: 'visualization', label: '感官可视化' },
  { id: 'architecture', label: '信息架构' },
]

export default function TextualPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="textual-scent-lab" tone="light">
      <ResponsiveArtboard height={6480} label="文字气味实验室" width={3456}>
        <div style={{ background: '#fff', height: 6480, position: 'relative', width: 3456 }}>
        <section id="overview" style={{ height: 1080, left: 0, position: 'absolute', top: 0, width: 3456 }}><Frame0 /></section>
        <section id="research" style={{ height: 1080, left: 0, position: 'absolute', top: 1080, width: 3456 }}><Frame1 /></section>
        <section id="technology" style={{ height: 1080, left: 0, position: 'absolute', top: 2160, width: 3456 }}><Frame2 /></section>
        <section id="concept" style={{ height: 1080, left: 0, position: 'absolute', top: 3240, width: 3456 }}><Frame3 /></section>
        <section id="visualization" style={{ height: 1080, left: 0, position: 'absolute', top: 4320, width: 3456 }}><Frame4 /></section>
        <section id="architecture" style={{ height: 1080, left: 0, position: 'absolute', top: 5400, width: 3456 }}><ImageLightboxScope><Frame5 /></ImageLightboxScope></section>
        </div>
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
