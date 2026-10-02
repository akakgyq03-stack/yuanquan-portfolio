import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const generatedDir = path.join(root, 'src', 'figma', 'generated')
const outputFile = path.join(root, 'src', 'figma', 'figma-utilities.css')

const files = fs.readdirSync(generatedDir).filter((file) => file.endsWith('.tsx'))
const tokens = new Set()

for (const file of files) {
  const source = fs.readFileSync(path.join(generatedDir, file), 'utf8')
  for (const match of source.matchAll(/className="([^"]*)"/g)) {
    for (const token of match[1].trim().split(/\s+/)) if (token) tokens.add(token)
  }
  for (const match of source.matchAll(/className=\{className \|\| "([^"]*)"\}/g)) {
    for (const token of match[1].trim().split(/\s+/)) if (token) tokens.add(token)
  }
}

const px = (value) => value.replaceAll('_', ' ').replace(/([0-9)%])([+-])(?=[0-9.])/g, '$1 $2 ')
const bracket = (token, prefix) => token.startsWith(`${prefix}[`) && token.endsWith(']')
  ? token.slice(prefix.length + 1, -1)
  : null
const colorValue = (value) => value.replaceAll('_', ' ')

function utility(token) {
  const direct = {
    absolute: 'position:absolute', relative: 'position:relative', fixed: 'position:fixed', static: 'position:static',
    block: 'display:block', inline: 'display:inline', 'inline-block': 'display:inline-block', hidden: 'display:none', contents: 'display:contents',
    flex: 'display:flex', grid: 'display:grid', 'flex-col': 'flex-direction:column', 'flex-row': 'flex-direction:row',
    'flex-wrap': 'flex-wrap:wrap', 'flex-nowrap': 'flex-wrap:nowrap', 'items-start': 'align-items:flex-start',
    'items-center': 'align-items:center', 'items-end': 'align-items:flex-end', 'items-stretch': 'align-items:stretch',
    'justify-start': 'justify-content:flex-start', 'justify-center': 'justify-content:center', 'justify-end': 'justify-content:flex-end',
    'justify-between': 'justify-content:space-between', 'justify-around': 'justify-content:space-around',
    'content-stretch': 'align-content:stretch', 'self-start': 'align-self:flex-start', 'self-center': 'align-self:center', 'self-end': 'align-self:flex-end',
    'overflow-hidden': 'overflow:hidden', 'overflow-clip': 'overflow:clip', 'overflow-visible': 'overflow:visible',
    'pointer-events-none': 'pointer-events:none', 'shrink-0': 'flex-shrink:0', grow: 'flex-grow:1', 'flex-1': 'flex:1 1 0%',
    'flex-none': 'flex:none',
    'w-full': 'width:100%', 'h-full': 'height:100%', 'min-w-full': 'min-width:100%', 'min-h-full': 'min-height:100%',
    'max-w-none': 'max-width:none', 'max-w-full': 'max-width:100%', 'size-full': 'width:100%;height:100%',
    'inset-0': 'inset:0', 'left-0': 'left:0', 'right-0': 'right:0', 'top-0': 'top:0', 'bottom-0': 'bottom:0',
    'object-cover': 'object-fit:cover', 'object-contain': 'object-fit:contain', 'object-fill': 'object-fit:fill',
    'text-left': 'text-align:left', 'text-center': 'text-align:center', 'text-right': 'text-align:right',
    'text-white': 'color:#fff', 'text-black': 'color:#000', italic: 'font-style:italic',
    'font-normal': 'font-weight:400', 'font-medium': 'font-weight:500', 'font-semibold': 'font-weight:600', 'font-bold': 'font-weight:700',
    'font-thin': 'font-weight:100', 'font-light': 'font-weight:300', 'font-extrabold': 'font-weight:800', 'font-black': 'font-weight:900',
    'not-italic': 'font-style:normal',
    'whitespace-pre-wrap': 'white-space:pre-wrap', 'whitespace-nowrap': 'white-space:nowrap',
    'leading-normal': 'line-height:normal', 'tracking-normal': 'letter-spacing:normal',
    'leading-none': 'line-height:1',
    border: 'border-width:1px', 'border-0': 'border-width:0', 'border-solid': 'border-style:solid',
    'border-dashed': 'border-style:dashed', 'rounded-full': 'border-radius:9999px',
    'border-2': 'border-width:2px', 'border-3': 'border-width:3px', 'border-4': 'border-width:4px', 'border-8': 'border-width:8px',
    'border-black': 'border-color:#000', 'border-white': 'border-color:#fff',
    'mb-0': 'margin-bottom:0', 'mt-0': 'margin-top:0', 'ml-0': 'margin-left:0', 'mr-0': 'margin-right:0',
    'p-0': 'padding:0', 'm-0': 'margin:0', 'bg-black': 'background-color:#000', 'bg-white': 'background-color:#fff',
    'h-0': 'height:0', 'w-0': 'width:0', 'h-px': 'height:1px', 'w-px': 'width:1px', 'size-px': 'width:1px;height:1px',
    'left-px': 'left:1px', 'top-px': 'top:1px', 'left-1/2': 'left:50%', 'top-1/2': 'top:50%', 'bottom-1/4': 'bottom:25%',
    'overflow-x-clip': 'overflow-x:clip', 'overflow-y-auto': 'overflow-y:auto',
    'object-bottom': 'object-position:bottom', 'cursor-pointer': 'cursor:pointer',
    uppercase: 'text-transform:uppercase', capitalize: 'text-transform:capitalize', 'text-justify': 'text-align:justify',
    'list-disc': 'list-style-type:disc', 'whitespace-pre': 'white-space:pre',
    'mix-blend-color-dodge': 'mix-blend-mode:color-dodge', 'mix-blend-darken': 'mix-blend-mode:darken',
    'mix-blend-exclusion': 'mix-blend-mode:exclusion', 'mix-blend-hard-light': 'mix-blend-mode:hard-light', 'mix-blend-multiply': 'mix-blend-mode:multiply',
    'bg-clip-padding': 'background-clip:padding-box', 'min-h-px': 'min-height:1px', 'min-w-px': 'min-width:1px',
    'mask-alpha': 'mask-mode:alpha', 'mask-intersect': 'mask-composite:intersect', 'mask-no-clip': 'mask-clip:no-clip', 'mask-no-repeat': 'mask-repeat:no-repeat',
    '-translate-x-full': '--figma-tx:-100%;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))',
    '-translate-y-full': '--figma-ty:-100%;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))',
    '-scale-y-100': 'scale:1 -1',
    'rotate-90': '--figma-rotate:90deg;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))',
    '-rotate-90': '--figma-rotate:-90deg;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))',
    'rotate-180': '--figma-rotate:180deg;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))',
    'rotate-113': '--figma-rotate:113deg;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))',
    'origin-center': 'transform-origin:center', 'origin-top-left': 'transform-origin:top left',
    'stroke-none': 'stroke:none', 'fill-none': 'fill:none',
  }
  if (direct[token]) return direct[token]

  const arbitraryProperty = token.match(/^\[([^:\]]+):(.+)\]$/)
  if (arbitraryProperty) return `${arbitraryProperty[1]}:${arbitraryProperty[2].replaceAll('_', ' ')}`

  for (const prefix of ['bg-', 'text-', 'border-', 'fill-', 'stroke-']) {
    const value = bracket(token, prefix)
    if (value === null) continue
    if (value.startsWith('color:')) {
      const resolved = value.slice('color:'.length)
      if (prefix === 'bg-') return 'background-color:' + resolved
      if (prefix === 'text-') return 'color:' + resolved
      if (prefix === 'border-') return 'border-color:' + resolved
      if (prefix === 'fill-') return 'fill:' + resolved
      if (prefix === 'stroke-') return 'stroke:' + resolved
    }
    const isColor = /^(#|rgb|hsl|color\(|var\(--)/.test(value)
    if (prefix === 'bg-') return `background-color:${colorValue(value)}`
    if (prefix === 'fill-') return `fill:${colorValue(value)}`
    if (prefix === 'stroke-') return `stroke:${colorValue(value)}`
    if (prefix === 'text-' && isColor) return `color:${colorValue(value)}`
    if (prefix === 'border-' && isColor) return `border-color:${colorValue(value)}`
  }

  const map = [
    ['w-', 'width'], ['h-', 'height'], ['min-w-', 'min-width'], ['min-h-', 'min-height'], ['max-w-', 'max-width'], ['max-h-', 'max-height'],
    ['left-', 'left'], ['right-', 'right'], ['top-', 'top'], ['bottom-', 'bottom'], ['inset-', 'inset'],
    ['gap-', 'gap'], ['gap-x-', 'column-gap'], ['gap-y-', 'row-gap'],
    ['p-', 'padding'], ['px-', 'padding-inline'], ['py-', 'padding-block'], ['pt-', 'padding-top'], ['pr-', 'padding-right'], ['pb-', 'padding-bottom'], ['pl-', 'padding-left'],
    ['m-', 'margin'], ['mx-', 'margin-inline'], ['my-', 'margin-block'], ['mt-', 'margin-top'], ['mr-', 'margin-right'], ['mb-', 'margin-bottom'], ['ml-', 'margin-left'],
    ['text-', 'font-size'], ['leading-', 'line-height'], ['tracking-', 'letter-spacing'], ['rounded-', 'border-radius'],
    ['opacity-', 'opacity'], ['z-', 'z-index'], ['border-', 'border-width'], ['aspect-', 'aspect-ratio'],
    ['ms-', 'margin-inline-start'], ['mask-position-', 'mask-position'], ['mask-size-', 'mask-size'],
    ['rounded-tl-', 'border-top-left-radius'], ['rounded-tr-', 'border-top-right-radius'],
    ['rounded-bl-', 'border-bottom-left-radius'], ['rounded-br-', 'border-bottom-right-radius'],
    ['border-b-', 'border-bottom-width'], ['flex-', 'flex'],
  ]
  for (const [prefix, property] of map) {
    const value = bracket(token, prefix)
    if (value !== null) return `${property}:${px(value)}`
  }

  const font = bracket(token, 'font-')
  if (font !== null) {
    if (/^\d+$/.test(font)) return `font-weight:${font}`
    const family = font.replace(/^['"]|['"]$/g, '').replaceAll('_', ' ')
    const [base, variant = ''] = family.split(':')
    const lower = variant.toLowerCase()
    let weight = ''
    if (/(thin|35)/.test(lower)) weight = ';font-weight:100'
    else if (/(light|45)/.test(lower)) weight = ';font-weight:300'
    else if (/(medium|65)/.test(lower)) weight = ';font-weight:500'
    else if (/(semibold|semi bold|75)/.test(lower)) weight = ';font-weight:600'
    else if (/(extrabold|extra bold|95)/.test(lower)) weight = ';font-weight:800'
    else if (/(black|heavy|105|115)/.test(lower)) weight = ';font-weight:900'
    else if (/(bold|85)/.test(lower)) weight = ';font-weight:700'
    else if (/(regular|55)/.test(lower)) weight = ';font-weight:400'
    const italic = lower.includes('italic') ? ';font-style:italic' : ''
    if (/^(Noto Serif SC|STFangsong|STSong|STZhongsong|FZXS12|ZhenyanGB)$/.test(base)) {
      return 'font-family:"Noto Serif SC","Songti SC",SimSun,serif' + weight + italic
    }
    if (/^(Platypi|Roboto Serif)$/.test(base)) {
      return 'font-family:Georgia,"Times New Roman",serif' + weight + italic
    }
    if (base === 'Noto Sans SC' || base.startsWith('Alibaba PuHuiTi') || base === 'PingFang SC' || base === 'Microsoft YaHei UI') {
      return 'font-family:"Noto Sans SC Variable","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif' + weight + italic
    }
    if (base.startsWith('SF Pro')) {
      return 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif' + weight + italic
    }
    if (/^(Inter|Be Vietnam|Century Gothic|Heebo|Lexend|Roboto|Work Sans)$/.test(base)) {
      return 'font-family:Arial,-apple-system,BlinkMacSystemFont,sans-serif' + weight + italic
    }
    return 'font-family:"' + base + '",sans-serif' + weight + italic
  }
  const size = bracket(token, 'size-')
  if (size !== null) return `width:${px(size)};height:${px(size)}`

  if (token === '-translate-x-1/2') return '--figma-tx:-50%;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))'
  if (token === '-translate-y-1/2') return '--figma-ty:-50%;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))'
  if (token === 'translate-x-1/2') return '--figma-tx:50%;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))'
  if (token === 'translate-y-1/2') return '--figma-ty:50%;transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))'
  const translateX = bracket(token, 'translate-x-')
  if (translateX !== null) return `--figma-tx:${px(translateX)};transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))`
  const translateY = bracket(token, 'translate-y-')
  if (translateY !== null) return `--figma-ty:${px(translateY)};transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))`
  const negativeTranslateX = bracket(token, '-translate-x-')
  if (negativeTranslateX !== null) return `--figma-tx:calc(-1 * ${px(negativeTranslateX)});transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))`
  const negativeTranslateY = bracket(token, '-translate-y-')
  if (negativeTranslateY !== null) return `--figma-ty:calc(-1 * ${px(negativeTranslateY)});transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))`
  const rotate = bracket(token, 'rotate-')
  if (rotate !== null) return `--figma-rotate:${px(rotate)};transform:translate(var(--figma-tx,0),var(--figma-ty,0)) rotate(var(--figma-rotate,0deg))`

  const negative = token.match(/^-(left|right|top|bottom|mt|mr|mb|ml)-\[(.+)\]$/)
  if (negative) {
    const props = { left:'left', right:'right', top:'top', bottom:'bottom', mt:'margin-top', mr:'margin-right', mb:'margin-bottom', ml:'margin-left' }
    return `${props[negative[1]]}:calc(-1 * ${px(negative[2])})`
  }

  if (/^col-span-\d+$/.test(token)) return `grid-column:span ${token.split('-').at(-1)} / span ${token.split('-').at(-1)}`
  if (/^grid-cols-\d+$/.test(token)) return `grid-template-columns:repeat(${token.split('-').at(-1)},minmax(0,1fr))`
  if (/^opacity-\d+$/.test(token)) return `opacity:${Number(token.split('-').at(-1)) / 100}`
  const shadow = bracket(token, 'shadow-')
  if (shadow !== null) return `box-shadow:${shadow.replaceAll('_', ' ')}`
  const dropShadow = bracket(token, 'drop-shadow-')
  if (dropShadow !== null) return `filter:drop-shadow(${dropShadow.replaceAll('_', ' ')})`
  const textShadow = bracket(token, 'text-shadow-')
  if (textShadow !== null) return `text-shadow:${textShadow.replaceAll('_', ' ')}`
  const blur = bracket(token, 'backdrop-blur-')
  if (blur !== null) return `backdrop-filter:blur(${blur})`
  const skewX = bracket(token, 'skew-x-')
  if (skewX !== null) return `transform:skewX(${skewX})`
  if (token === 'bg-gradient-to-b') return 'background-image:linear-gradient(to bottom,var(--figma-gradient-from),var(--figma-gradient-to))'
  const from = bracket(token, 'from-')
  if (from !== null) return `--figma-gradient-from:${from.replaceAll('_', ' ')}`
  const to = bracket(token, 'to-')
  if (to !== null && !to.endsWith('%')) return `--figma-gradient-to:${to.replaceAll('_', ' ')}`
  if (token.startsWith('to-[#')) return `--figma-gradient-to:${token.slice(3)}`
  return null
}

const escapeCss = (token) => token.replace(/([^a-zA-Z0-9_-])/g, '\\$1')
const rules = []
const unsupported = []
for (const token of [...tokens].sort()) {
  const declaration = utility(token)
  if (declaration) rules.push(`.${escapeCss(token)}{${declaration}}`)
  else unsupported.push(token)
}

const banner = `/* Generated from Figma MCP utility classes. Do not edit manually. */\n`
fs.writeFileSync(outputFile, `${banner}${rules.join('\n')}\n`)
console.log(`Generated ${rules.length} rules from ${tokens.size} tokens.`)
if (unsupported.length) {
  console.log(`Unsupported (${unsupported.length}):`)
  console.log(unsupported.join('\n'))
}
