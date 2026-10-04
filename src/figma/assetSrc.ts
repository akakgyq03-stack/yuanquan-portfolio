import { assetsByNode } from '../data/assetManifest'

const manualAssets: Record<string, string> = {
  '487:408/img3': '/assets/figma/library/odor-img3.svg',
  '487:408/img4': '/assets/figma/library/odor-img4.svg',
  '487:408/img6': '/assets/figma/library/odor-img6.svg',
  '487:408/img11': '/assets/figma/library/odor-img11.svg',
  '537:13063/imgCellularConnection': '/assets/figma/library/537-13063-imgCellularConnection.svg',
  '537:13063/imgWifi': '/assets/figma/library/537-13063-imgWifi.svg',
  '537:13063/imgBattery': '/assets/figma/library/537-13063-imgBattery.svg',
  '537:13063/imgImage321': '/assets/figma/library/537-13063-imgImage321.png',
  '537:13063/imgImage20': '/assets/figma/library/537-13063-imgImage20.png',
  '537:13063/imgIPhone16ProBlackTitaniumPortrait': '/assets/figma/library/537-13063-imgIPhone16ProBlackTitaniumPortrait.png',
  '537:13063/imgImage316': '/assets/figma/library/537-13063-imgImage316.png',
  '537:13063/img6862D527F7F4A55E17D4Fe13608193384E7519Fcec4290Ce8B0751Bee5Ccc0Df11': '/assets/figma/library/537-13063-imgHero.png',
  '537:13063/imgImage320': '/assets/figma/library/537-13063-imgImage320.svg',
  '537:13092/imgCellularConnection': '/assets/figma/library/537-13092-imgCellularConnection.svg',
  '537:13092/imgWifi': '/assets/figma/library/537-13092-imgWifi.svg',
  '537:13092/imgBattery': '/assets/figma/library/537-13092-imgBattery.svg',
  '537:13092/img9347D81F94755Ec2B1Ec26926Dd61C9D68Gqpfay1': '/assets/figma/library/537-13092-imgHero.png',
  '537:13092/imgIPhone16ProBlackTitaniumPortrait': '/assets/figma/library/537-13092-imgIPhone16ProBlackTitaniumPortrait.png',
  '537:13092/imgImage316': '/assets/figma/library/537-13092-imgImage316.png',
  '537:2192/imgCellularConnection': '/assets/figma/library/537-2192-imgCellularConnection.svg',
  '537:2192/imgWifi': '/assets/figma/library/537-2192-imgWifi.svg',
  '537:2192/imgBattery': '/assets/figma/library/537-2192-imgBattery.svg',
  '537:7622/imgCellularConnection': '/assets/figma/library/537-7622-imgCellularConnection.svg',
  '537:7622/imgWifi': '/assets/figma/library/537-7622-imgWifi.svg',
  '537:7622/imgBattery': '/assets/figma/library/537-7622-imgBattery.svg',
  '537:13060/img2A3E4E5Ba4C3De75B5Fee14Fa1D1Eb7F1': '/assets/figma/library/537-13060-result.png',
}

export function assetSrc(nodeId: string, name: string) {
  const manualAsset = manualAssets[`${nodeId}/${name}`]
  if (manualAsset) return manualAsset
  const asset = assetsByNode[nodeId]?.find((candidate) => candidate.name === name)
  return asset?.avifSrc ?? asset?.src ?? ''
}
