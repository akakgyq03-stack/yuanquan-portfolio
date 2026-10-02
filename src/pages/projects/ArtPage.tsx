import ArtCanvas from '../../figma/generated/ArtCanvas'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasAnchors, CanvasProjectLayout } from './CanvasProjectLayout'

const directory = [
  { id: 'overview', label: '作品总览' }, { id: 'dream-cipher', label: 'DreamCipher 梦匣' },
  { id: 'structure', label: '草图与结构' }, { id: 'flow', label: '使用流程' },
  { id: 'symbiosis', label: '硅碳共生' }, { id: 'installation', label: '装置呈现' },
]

export default function ArtPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="art-exhibitions">
      <ResponsiveArtboard height={7283} label="艺术展览作品" width={1440}>
        <ArtCanvas />
        <CanvasAnchors items={[
          { id: 'overview', top: 0 }, { id: 'dream-cipher', top: 1050 }, { id: 'structure', top: 2600 },
          { id: 'flow', top: 3700 }, { id: 'symbiosis', top: 4400 }, { id: 'installation', top: 5800 },
        ]} />
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
