import AigcCanvas from '../../figma/generated/AigcCanvas'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasAnchors, CanvasProjectLayout } from './CanvasProjectLayout'

const directory = [
  { id: 'overview', label: '项目概览' },
  { id: 'content-account', label: '内容账号' },
  { id: 'scene-generation', label: '场景生成' },
  { id: 'character-consistency', label: '角色一致性' },
  { id: 'video-practice', label: '视频实践' },
  { id: 'final-work', label: '最终作品' },
]

export default function AigcPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="aigc-creative-practice">
      <ResponsiveArtboard height={5899} label="AIGC 创作实践" width={1440}>
        <AigcCanvas />
        <CanvasAnchors items={[
          { id: 'overview', top: 0 }, { id: 'content-account', top: 1030 },
          { id: 'scene-generation', top: 1450 }, { id: 'character-consistency', top: 3000 },
          { id: 'video-practice', top: 4300 }, { id: 'final-work', top: 5400 },
        ]} />
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
