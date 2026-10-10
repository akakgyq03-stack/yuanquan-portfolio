import { assetSrc } from '../assetSrc'

const imgFrame3712 = assetSrc('537:1766', 'imgFrame3712');
const imgFrame3752 = assetSrc('537:1766', 'imgFrame3752');
const imgFrame3772 = assetSrc('537:1766', 'imgFrame3772');
const imgFrame366812 = assetSrc('537:1766', 'imgFrame366812');
const imgFrame3412 = assetSrc('537:1766', 'imgFrame3412');
const imgArrow15 = assetSrc('537:1766', 'imgArrow15');

const architectureNodes = [
  { x: 77, y: 465, width: 164, height: 32, label: '主页' },
  { x: 277, y: 229, width: 163, height: 27, label: '预测' },
  { x: 277, y: 316, width: 163, height: 27, label: '探索' },
  { x: 277, y: 675, width: 163, height: 27, label: '记录' },
  { x: 522, y: 174, width: 163, height: 27, label: '文字预测' },
  { x: 522, y: 223, width: 163, height: 33, label: '参数预测' },
  { x: 531, y: 316, width: 163, height: 27, label: '选择感官域' },
  { x: 531, y: 566, width: 163, height: 27, label: '选择香调' },
  { x: 531, y: 675, width: 163, height: 27, label: '气味体验记录' },
  { x: 531, y: 730, width: 163, height: 27, label: '我的嗅觉档案' },
  { x: 903, y: 210, width: 164, height: 27, label: '颜色' },
  { x: 903, y: 258, width: 164, height: 27, label: '味觉' },
  { x: 903, y: 316, width: 164, height: 27, label: '温度' },
  { x: 903, y: 366, width: 164, height: 27, label: '干湿' },
  { x: 903, y: 425, width: 164, height: 27, label: '天气' },
  { x: 903, y: 483, width: 164, height: 27, label: '性征' },
  { x: 903, y: 566, width: 164, height: 27, label: '木质调' },
  { x: 903, y: 621, width: 164, height: 27, label: '水生调' },
  { x: 903, y: 675, width: 164, height: 27, label: '花香调' },
  { x: 903, y: 748, width: 164, height: 27, label: '绿叶调' },
  { x: 903, y: 806, width: 164, height: 27, label: '西普调' },
  { x: 903, y: 865, width: 164, height: 27, label: '东方调' },
  { x: 903, y: 915, width: 164, height: 28, label: '果香调' },
  { x: 903, y: 974, width: 164, height: 27, label: '芳香调' },
]

function ArchitectureMap() {
  return (
    <svg
      aria-label="文字气味实验室信息架构图"
      className="absolute left-0 top-0"
      height="1080"
      role="img"
      viewBox="0 0 1120 1080"
      width="1120"
    >
      <title>文字气味实验室信息架构图</title>
      <g fill="none" stroke="#1e1e1e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4">
        <path d="M241 481 H260 M260 242 V689 M260 242 H277 M260 330 H277 M260 689 H277" />
        <path d="M440 242 H480 V188 H522 M480 242 H522" />
        <path d="M440 330 H531 M480 330 V580 H531" />
        <path d="M440 689 H480 V744 H531 M480 689 H531" />
        <path d="M694 330 H760 V224 H903 M760 272 H903 M760 330 H903 M760 380 H903 M760 439 H903 M760 497 H903" />
        <path d="M694 580 H760 V988 H903 M760 580 H903 M760 635 H903 M760 689 H903 M760 762 H903 M760 820 H903 M760 879 H903 M760 929 H903" />
      </g>
      {architectureNodes.map((node) => (
        <g key={node.label}>
          <rect fill="#fff" height={node.height} rx="4" stroke="#1e1e1e" strokeWidth="1.4" width={node.width} x={node.x} y={node.y} />
          <text
            dominantBaseline="middle"
            fill="#1e1e1e"
            fontFamily="Inter, 'Microsoft YaHei UI', sans-serif"
            fontSize="16"
            textAnchor="middle"
            x={node.x + node.width / 2}
            y={node.y + node.height / 2 + 1}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function Frame36682() {
  return (
    <div className="bg-white relative size-full" data-node-id="537:1766">
      <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Bold'] leading-[normal] left-[60px] not-italic text-[#4d3d95] text-[48px] top-[26px] tracking-[1.44px] whitespace-nowrap" data-node-id="537:1767">
        信息框架
      </p>
      <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Bold'] leading-[normal] left-[calc(30%+164.2px)] not-italic text-[#4d3d95] text-[48px] top-[26px] tracking-[1.44px] whitespace-nowrap" data-node-id="537:1768">
        交互界面
      </p>
      <p className="[word-break:break-word] absolute font-['Century_Gothic:Bold'] leading-[normal] left-[calc(5%+93.2px)] not-italic text-[#4d3d95] text-[48px] top-[30px] whitespace-nowrap" data-node-id="537:1769">
        Information Architecture
      </p>
      <p className="[word-break:break-word] absolute font-['Century_Gothic:Bold'] leading-[normal] left-[calc(40%+19.6px)] not-italic text-[#4d3d95] text-[48px] top-[28px] whitespace-nowrap" data-node-id="537:1770">
        Interface
      </p>
      <ArchitectureMap />
      <div className="absolute h-[455px] left-[calc(35%+109.4px)] top-[calc(50%+45px)] w-[775px]" data-node-id="537:1771" data-name="Frame 371 2">
        <img alt="文字气味实验室交互界面：动态变化与感官可视化" className="absolute inset-0 max-w-none object-cover size-full" data-lightbox-src={imgFrame3712} role="button" tabIndex={0} src={imgFrame3712} />
      </div>
      <div className="absolute h-[455px] left-[calc(35%+109.4px)] top-[103px] w-[775px]" data-node-id="537:1772" data-name="Frame 375 2">
        <img alt="文字气味实验室交互界面：信息架构与输入流程" className="absolute inset-0 max-w-none object-cover size-full" data-lightbox-src={imgFrame3752} role="button" tabIndex={0} src={imgFrame3752} />
      </div>
      <div className="absolute h-[437px] left-[calc(70%+123.8px)] top-[calc(50%+63px)] w-[768px]" data-node-id="537:1773" data-name="Frame 377 2">
        <img alt="文字气味实验室交互界面：预测结果与感官图表" className="absolute inset-0 max-w-none object-cover size-full" data-lightbox-src={imgFrame3772} role="button" tabIndex={0} src={imgFrame3772} />
      </div>
      <div className="absolute h-[453px] left-[calc(65%+6.6px)] top-[calc(50%+47px)] w-[196px]" data-node-id="537:1774" data-name="Frame 36681 2">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="文字气味实验室交互界面：预测结果画面" className="absolute h-[95.54%] left-[3.04%] max-w-none top-[3.28%] w-[387.84%]" data-lightbox-src={imgFrame366812} role="button" tabIndex={0} src={imgFrame366812} />
        </div>
      </div>
      <div className="absolute h-[506px] left-[calc(65%+39.6px)] top-[55px] w-[863px]" data-node-id="537:1775" data-name="Frame 341 2">
        <img alt="文字气味实验室交互界面：多页面工作台" className="absolute inset-0 max-w-none object-cover size-full" data-lightbox-src={imgFrame3412} role="button" tabIndex={0} src={imgFrame3412} />
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[0] left-[calc(60%-14.6px)] not-italic text-[#1e1e1e] text-[16px] top-[47px] tracking-[-0.176px] whitespace-nowrap" data-node-id="537:1778">
        <p className="leading-[1.5] mb-0">暂停/开始</p>
        <p className="leading-[1.5]">动态变化</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[0] left-[calc(55%+46.2px)] not-italic text-[#1e1e1e] text-[16px] top-[37px] tracking-[-0.176px] whitespace-nowrap" data-node-id="537:1779">
        <p className="leading-[1.5] mb-0">拖动时间轴</p>
        <p className="leading-[1.5]">查看动态变化</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[0] left-[calc(30%+164.2px)] not-italic text-[#1e1e1e] text-[16px] top-[calc(58.33%+33px)] tracking-[-0.176px] w-[64px]" data-node-id="537:1782">
        <p className="leading-[1.5] mb-0">柱状图</p>
        <p className="leading-[1.5]">横向比较各香调之间的感官强度</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[0] left-[calc(30%+148.2px)] not-italic text-[#1e1e1e] text-[16px] top-[calc(16.67%+10px)] tracking-[-0.176px] w-[64px]" data-node-id="537:1783">
        <p className="leading-[1.5] mb-0">雷达图</p>
        <p className="leading-[1.5]">纵向比较各香调的感官分布特点</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[1.5] left-[calc(60%+87.4px)] not-italic text-[#1e1e1e] text-[16px] top-[calc(58.33%+37px)] tracking-[-0.176px] w-[48px]" data-node-id="537:1785">
        输入文字进行预测
      </p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[1.5] left-[calc(70%+42.8px)] not-italic text-[#1e1e1e] text-[16px] top-[calc(58.33%+19px)] tracking-[-0.176px] w-[43px]" data-node-id="537:1786">
        调整参数进行预测
      </p>
      <div className="absolute h-0 left-[calc(35%+57.4px)] top-[calc(16.67%+24.82px)] w-[111px]" data-node-id="537:1790">
        <div className="absolute inset-[-5.33px_-4.8%_-5.33px_0]">
          <img alt="" className="block max-w-none size-full" src={imgArrow15} />
        </div>
      </div>
      <div className="absolute h-0 left-[calc(35%+60.4px)] top-[calc(58.33%+63.82px)] w-[111px]" data-node-id="537:1791">
        <div className="absolute inset-[-5.33px_-4.8%_-5.33px_0]">
          <img alt="" className="block max-w-none size-full" src={imgArrow15} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Microsoft_YaHei_UI:Bold'] h-[65px] leading-[36px] left-[22px] not-italic text-[20px] text-white top-[11px] tracking-[0.2px] w-[303px]" data-node-id="537:1816">
        有我想要的感觉的香水
      </p>
    </div>
  );
}
