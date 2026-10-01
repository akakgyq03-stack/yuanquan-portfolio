import type { FigmaAsset } from '../data/assetManifest'
import { FigmaImage } from './FigmaImage'
import styles from './AssetGallery.module.css'

interface AssetGalleryProps {
  assets: FigmaAsset[]
  projectTitle: string
  layout?: 'feature' | 'grid' | 'mosaic' | 'editorial'
  skipFirst?: boolean
}

export function AssetGallery({ assets, projectTitle, layout = 'grid', skipFirst = false }: AssetGalleryProps) {
  const visible = (skipFirst ? assets.slice(1) : assets).filter((asset) => asset.kind === 'image')
  if (!visible.length) return null

  return (
    <div className={styles.gallery} data-layout={layout}>
      {visible.map((asset, index) => (
        <figure className={styles.figure} key={`${asset.src}-${index}`}>
          <FigmaImage
            alt={`${projectTitle} 项目素材：${humanize(asset.name)}`}
            asset={asset}
            decoding="async"
            loading="lazy"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </figure>
      ))}
    </div>
  )
}

function humanize(value: string) {
  return value
    .replace(/^img/i, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim() || '设计图像'
}
