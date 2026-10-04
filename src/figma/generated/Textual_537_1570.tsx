import { assetSrc } from '../assetSrc'

const imgImage286 = assetSrc('537:1570', 'imgImage286');
const imgImage287 = assetSrc('537:1570', 'imgImage287');
const imgImage288 = assetSrc('537:1570', 'imgImage288');
const imgSnapshot17424432848042 = assetSrc('537:1570', 'imgSnapshot17424432848042');
const imgEllipse1006 = assetSrc('537:1570', 'imgEllipse1006');
const imgEllipse1007 = assetSrc('537:1570', 'imgEllipse1007');
const imgLine70 = assetSrc('537:1570', 'imgLine70');
const imgLine71 = assetSrc('537:1570', 'imgLine71');

const techNodes = [
  { id: '537:1573', x: 79, y: 200, width: 190, height: 69, lines: ['数据爬取'], tone: 'primary' },
  { id: '537:1582', x: 318, y: 200, width: 206, height: 69, lines: ['数据清洗'], tone: 'primary' },
  { id: '537:1584', x: 695, y: 200, width: 190, height: 69, lines: ['构建感官词典'], tone: 'primary' },
  { id: '537:1586', x: 1118, y: 200, width: 206, height: 69, lines: ['特征标注'], tone: 'primary' },
  { id: '537:1588', x: 1515, y: 200, width: 190, height: 69, lines: ['随机森林训练'], tone: 'primary' },
  { id: '537:1599', x: 2089, y: 200, width: 265, height: 69, lines: ['基于感官特征预测香调'], tone: 'primary' },
  { id: '537:1597', x: 2089, y: 298, width: 265, height: 69, lines: ['基于香调预测感官特征'], tone: 'primary' },
  { id: '537:1577', x: 79, y: 357, width: 190, height: 70, lines: ['爬取香调、主要成分信息', '与评论文本'], tone: 'secondary' },
  { id: '537:1578', x: 326, y: 357, width: 190, height: 70, lines: ['分词处理与停用词清洗'], tone: 'secondary' },
  { id: '537:1580', x: 1148, y: 308, width: 146, height: 54, lines: ['独热编码香调信息'], tone: 'secondary' },
  { id: '537:1579', x: 1147, y: 411, width: 146, height: 54, lines: ['词频计算感官特征'], tone: 'secondary' },
  { id: '537:1601', x: 2127, y: 642, width: 190, height: 126, lines: ['基于 TD 的气味', '感官可视化'], tone: 'primary' },
  { id: '537:1574', x: 60, y: 894, width: 227, height: 88, lines: ['来源：香水时代', 'www.nosetime.com', '5220条评论，共1,8270,00字'], tone: 'note' },
  { id: '537:1575', x: 453, y: 919, width: 258, height: 67, lines: ['筛选出评论包含的 58+ 种感官特征'], tone: 'note' },
  { id: '537:1576', x: 1110, y: 946, width: 227, height: 37, lines: ['将文本中的感官词汇量化'], tone: 'note' },
]

const techPaths = [
  { id: '537:1583', d: 'M269 234.5 H309.5' },
  { id: '537:1585', d: 'M524 234.5 H686.5' },
  { id: '537:1587', d: 'M885 234.5 H1109.5' },
  { id: '537:1589', d: 'M1324 234.5 H1506.5' },
  { id: '537:1600', d: 'M1705 234.5 H2080.5' },
  { id: '537:1598', d: 'M1705 234.5 H1900 V332.5 H2080.5' },
  { id: '537:1591', d: 'M421 269 V348.5' },
  { id: '537:1592', d: 'M174 269 V348.5' },
  { id: '537:1590', d: 'M790 269 V390 H582 V490.5' },
  { id: '537:1593', d: 'M173.5 427 V885.5' },
  { id: '537:1594', d: 'M582 773 V910.5' },
  { id: '537:1596', d: 'M1221 269 V299.5' },
  { id: '537:1595', d: 'M1220.5 362 V402.5' },
  { id: '537:1608', d: 'M1610 269 V340 H1729.5 V385.5' },
  { id: '537:1606', d: 'M1221 465 V497.5' },
  { id: '537:1605', d: 'M1224 890 V937.5' },
  { id: '537:1602', d: 'M2221.5 367 V633.5' },
  { id: '537:1603', d: 'M2221.5 375 V633.5' },
]

function TechnicalFrameworkMap() {
  return (
    <svg
      aria-label="技术框架流程图"
      className="absolute left-0 top-0"
      height="1080"
      role="img"
      viewBox="0 0 2400 1080"
      width="2400"
    >
      <title>技术框架流程图</title>
      <defs>
        <marker id="tech-arrow" markerHeight="9" markerWidth="9" orient="auto" refX="8" refY="4.5">
          <path d="M0 0 L9 4.5 L0 9" fill="none" stroke="#222" strokeLinejoin="round" />
        </marker>
      </defs>
      <g fill="none" markerEnd="url(#tech-arrow)" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">
        {techPaths.map((path) => <path d={path.d} data-node-id={path.id} key={path.id} />)}
      </g>
      <rect data-node-id="537:1581" fill="#fff" height="274" rx="4" stroke="#1e1e1e" width="496" x="334" y="499" />
      {techNodes.map((node) => {
        const primary = node.tone === 'primary'
        const note = node.tone === 'note'
        const fontSize = note ? 14 : primary ? 20 : 16
        const lineHeight = note ? 18 : primary ? 26 : 22
        const firstY = node.y + node.height / 2 - ((node.lines.length - 1) * lineHeight) / 2
        return (
          <g data-node-id={node.id} key={node.id}>
            <rect
              fill={primary ? '#eadcff' : '#fff'}
              height={node.height}
              rx="4"
              stroke={primary ? 'none' : '#1e1e1e'}
              strokeDasharray={note ? '8 6' : undefined}
              strokeWidth={primary ? 0 : 1.4}
              width={node.width}
              x={node.x}
              y={node.y}
            />
            <text
              dominantBaseline="middle"
              fill="#1e1e1e"
              fontFamily="Inter, 'Microsoft YaHei UI', sans-serif"
              fontSize={fontSize}
              fontWeight={primary ? 600 : 400}
              textAnchor="middle"
              x={node.x + node.width / 2}
              y={firstY}
            >
              {node.lines.map((line, index) => (
                <tspan dy={index === 0 ? 0 : lineHeight} key={line} x={node.x + node.width / 2}>{line}</tspan>
              ))}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function Frame36677() {
  return (
    <div className="bg-white relative size-full" data-node-id="537:1570">
      <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Bold'] leading-[normal] left-[68px] not-italic text-[#4d3d95] text-[48px] top-[60px] tracking-[1.44px] whitespace-nowrap" data-node-id="537:1571">
        技术框架
      </p>
      <TechnicalFrameworkMap />
      <div className="absolute border-8 border-solid border-white h-[259px] left-[calc(5%+173.2px)] rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] top-[calc(41.67%+55px)] w-[476px]" data-node-id="537:1572" data-name="image 286">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
          <div className="absolute bg-white inset-0 rounded-[4px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[4px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage286} />
          </div>
        </div>
      </div>
      <div className="absolute border-8 border-solid border-white h-[386px] left-[calc(20%+180.8px)] rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] top-[calc(41.67%+54px)] w-[427px]" data-node-id="537:1604" data-name="image 287">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
          <div className="absolute bg-white inset-0 rounded-[4px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[4px]">
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[132.8%]" src={imgImage287} />
          </div>
        </div>
      </div>
      <div className="absolute border-8 border-solid border-white h-[590px] left-[calc(35%+171.4px)] rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] top-[calc(33.33%+40px)] w-[697px]" data-node-id="537:1607" data-name="image 288">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
          <div className="absolute bg-white inset-0 rounded-[4px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[4px]">
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.63%]" src={imgImage288} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Bold'] h-[34px] leading-[25px] left-[calc(70%-10.2px)] not-italic text-[#4d3d95] text-[32px] top-[71px] w-[324px]" data-node-id="537:1609">
        气味-感官关联性验证
      </p>
      <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Light'] leading-[25px] left-[calc(95%+61.8px)] not-italic text-[#8815ec] text-[20px] top-[calc(16.67%+64px)] whitespace-nowrap" data-node-id="537:1610">
        0.66
      </p>
      <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Light'] leading-[25px] left-[calc(95%+71.8px)] not-italic text-[#8815ec] text-[20px] top-[calc(58.33%-5px)] whitespace-nowrap" data-node-id="537:1611">
        0.66
      </p>
      <div className="absolute contents left-[calc(70%-21.2px)] top-[calc(83.33%+20px)]" data-node-id="537:1612">
        <div className="absolute contents left-[calc(70%-21.2px)] top-[calc(83.33%+20px)]" data-node-id="537:1613">
          <div className="absolute contents left-[calc(70%-21.2px)] top-[calc(83.33%+20px)]" data-node-id="537:1614">
            <div className="absolute contents left-[calc(70%-21.2px)] top-[calc(83.33%+20px)]" data-node-id="537:1615">
              <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Bold'] leading-[25px] left-[calc(70%+10.2px)] not-italic text-[20px] text-[rgba(0,0,0,0.8)] top-[calc(83.33%+20px)] w-[492.337px] whitespace-pre-wrap" data-node-id="537:1616">{`准确率<=0.66  说明香调成分与该感官之间缺乏关联性`}</p>
              <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Bold'] leading-[25px] left-[calc(70%+10.2px)] not-italic text-[20px] text-[rgba(0,0,0,0.8)] top-[calc(91.67%-32px)] w-[978.596px] whitespace-pre-wrap" data-node-id="537:1617">{`准确率>=0.66  说明香调成分与该感官之间具备一定关联性，可进一步为气味感官可视化与预测提供数据支持`}</p>
              <div className="absolute h-[25px] left-[calc(70%-21.2px)] top-[calc(83.33%+20px)] w-[25.326px]" data-node-id="537:1618">
                <div className="absolute inset-[0_-15.79%_-32%_-15.79%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse1006} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[25px] left-[calc(70%-21.2px)] top-[calc(91.67%-32px)] w-[25.326px]" data-node-id="537:1619">
          <div className="absolute inset-[0_-15.79%_-32%_-15.79%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse1007} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Century_Gothic:Bold'] leading-[normal] left-[calc(5%+114.2px)] not-italic text-[#4d3d95] text-[48px] top-[63px] whitespace-nowrap" data-node-id="537:1620">
        Tech-frame
      </p>
      <div className="absolute flex h-[367.063px] items-center justify-center left-[calc(70%+20.8px)] top-[calc(50%-5px)] w-[906.03px]" data-node-id="537:1621">
        <div className="flex-none rotate-[0.09deg]">
          <div className="h-[365.594px] relative w-[905.437px]" data-name="snapshot-1742443284804 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[201.89%]" src={imgSnapshot17424432848042} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(70%+3.8px)] top-[calc(8.33%+58px)]" data-node-id="537:1622">
        <div className="absolute flex h-[385.261px] items-center justify-center left-[calc(70%+28.8px)] top-[calc(8.33%+58px)] w-[808.906px]" data-node-id="537:1623">
          <div className="flex-none rotate-[0.09deg]">
            <div className="h-[383.949px] relative w-[808.284px]" data-name="snapshot-1742443284804 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[237.51%]" src={imgSnapshot17424432848042} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[380.69px] items-center justify-center left-[calc(70%+74.8px)] top-[calc(8.33%+59px)] w-[837.145px]" data-node-id="537:1624">
          <div className="flex-none rotate-[0.09deg]">
            <div className="h-[379.332px] relative w-[836.53px]" data-name="snapshot-1742443284804 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-119.06%] max-w-none top-0 w-[226.73%]" src={imgSnapshot17424432848042} />
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Light'] leading-[25px] left-[calc(70%+5.8px)] not-italic text-[#8815ec] text-[16px] top-[calc(8.33%+67px)] w-[23px]" data-node-id="537:1625">
          随机森林预测准确率
        </p>
        <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Light'] leading-[25px] left-[calc(70%+3.8px)] not-italic text-[#8815ec] text-[16px] top-[calc(50%-5px)] w-[23px]" data-node-id="537:1626">
          随机森林预测准确率
        </p>
        <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Light'] leading-[25px] left-[calc(95%+13.8px)] not-italic text-[#8815ec] text-[16px] top-[calc(75%+42px)] w-[136px]" data-node-id="537:1627">
          感官域
        </p>
        <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Light'] leading-[25px] left-[calc(95%-0.2px)] not-italic text-[#8815ec] text-[16px] top-[calc(41.67%+44px)] w-[136px]" data-node-id="537:1628">
          感官域
        </p>
      </div>
      <div className="absolute flex h-[1.968px] items-center justify-center left-[calc(70%+52.8px)] top-[calc(16.67%+78px)] w-[859px]" data-node-id="537:1629">
        <div className="flex-none rotate-[-0.13deg]">
          <div className="h-0 relative w-[859.002px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine70} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[0.968px] items-center justify-center left-[calc(70%+64.8px)] top-[calc(58.33%+10px)] w-[868px]" data-node-id="537:1630">
        <div className="flex-none rotate-[-0.06deg]">
          <div className="h-0 relative w-[868.001px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine71} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
