import type { ImgHTMLAttributes } from 'react'
import type { FigmaAsset } from '../data/assetManifest'

interface FigmaImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'src' | 'srcSet' | 'width'> {
  asset: FigmaAsset
  pictureClassName?: string
}

export function FigmaImage({ asset, pictureClassName, sizes, ...imageProps }: FigmaImageProps) {
  return (
    <picture className={pictureClassName}>
      {asset.avifSrcSet && <source sizes={sizes} srcSet={asset.avifSrcSet} type="image/avif" />}
      {asset.webpSrcSet && <source sizes={sizes} srcSet={asset.webpSrcSet} type="image/webp" />}
      <img
        {...imageProps}
        height={asset.height}
        sizes={sizes}
        src={asset.src}
        width={asset.width}
      />
    </picture>
  )
}
