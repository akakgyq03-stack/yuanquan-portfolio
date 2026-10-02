import Frame0 from '../../figma/generated/Stitch_537_1882'
import Frame1 from '../../figma/generated/Stitch_537_1905'
import Frame2 from '../../figma/generated/Stitch_537_2146'
import Frame3 from '../../figma/generated/Stitch_537_2181'
import Phone0 from '../../figma/generated/Stitch_537_2192'
import Phone1 from '../../figma/generated/Stitch_537_7622'
import GeneratedResult from '../../figma/generated/Stitch_537_13060'
import Phone2 from '../../figma/generated/Stitch_537_13063'
import Phone3 from '../../figma/generated/Stitch_537_13092'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasProjectLayout } from './CanvasProjectLayout'
import styles from './StitchPage.module.css'

const directory = [
  { id: 'overview', label: '项目概览' }, { id: 'research', label: '用户研究' },
  { id: 'concept', label: '设计概念' }, { id: 'workflow', label: 'AIGC 工作流' },
  { id: 'interface', label: '交互界面' },
]

const business = [
  { className: styles.partner, title: 'KEY PARTNER', subtitle: '重要合作', copy: '• 时装企业\n• 物流公司\n• 技术供应商\n• 社媒平台\n• 电商平台' },
  { className: styles.activity, title: 'KEY ACTIVITY', subtitle: '关键业务', copy: '• 个性化生成AIGC纹样\n• 提供旧衣物再设计、再制作服务' },
  { className: styles.resource, title: 'KEY RESOURCE', subtitle: '核心资源', copy: '• 苗绣手工艺者\n• 苗绣纹样素材\n• AIGC技术支持' },
  { className: styles.value, title: 'VALUE PROPOSITION', subtitle: '价值主张', copy: '• 通过应用创新AIGC工作流赋能非遗技艺，为手工艺者打开获得经济价值的路径，让非遗走入大众生活\n• 为消费者提供旧衣改制服务，降低衣物弃置率，减少服装生产对环境产生的影响' },
  { className: styles.relation, title: 'CUSTOMER RELATION', subtitle: '客户关系', copy: '• 消费者：可靠的旧衣物再制渠道\n• 手工艺者：能够获得稳定创收的工作平台\n• 时装企业：达成ESG指标的战略合作伙伴' },
  { className: styles.channel, title: 'CHANNEL', subtitle: '渠道', copy: '• 服装品牌平台\n• 电商平台\n• 移动手机应用和网站\n• 社交媒体' },
  { className: styles.segment, title: 'CUSTOMER SEGMENT', subtitle: '客户细分', copy: '• 环保主义者\n• 循环经济践行者\n• 有旧衣物改制需求的消费者\n• 对定制化、个性化有需求的消费者\n• 国潮、传统文化爱好者' },
  { className: styles.cost, title: 'COST STRUCTURE', subtitle: '成本结构', copy: '• 技术平台搭建与维护\n• 纹样素材库建立\n• 手工艺者雇佣成本\n• 宣传投流资金\n• 客户服务和运营成本' },
  { className: styles.revenue, title: 'REVENUE STREAM', subtitle: '收入来源', copy: '• 服装改制费用\n• 政府ESG和非遗推广补贴\n• 联名非遗产品分成\n• 服装品牌广告' },
]

function UploadBox({ label, action, caption }: { label: string; action: string; caption: string }) {
  return (
    <div className={styles.uploadBlock}>
      <p>{label}</p>
      <div className={styles.uploadBox}>
        <span className={styles.uploadIcon}>↥</span>
        <b>{action}</b>
        <small>{caption}</small>
      </div>
    </div>
  )
}

function Slider({ label, value, left, right }: { label: string; value: number; left: string; right: string }) {
  return (
    <div className={styles.slider}>
      <div><span>{label}</span><output>{value}</output></div>
      <i><b style={{ width: `${value}%` }}><em style={{ left: `${value}%` }} /></b></i>
      <small><span>{left}</span><span>{right}</span></small>
    </div>
  )
}

function PhoneBezel() {
  return <img alt="" aria-hidden="true" className={styles.bezel} src="/assets/figma/library/537-13063-imgIPhone16ProBlackTitaniumPortrait.png" />
}

function FirstPhoneContent() {
  return (
    <div className={styles.phoneContent}>
      <p className={styles.phoneTitle}>图像融合</p>
      <div className={styles.phoneBody}>
        <UploadBox action="上传图片" caption="支持 JPG、JPEG、PNG，8MB以内" label="上传参考图（可选）" />
        <UploadBox action="查看素材库" caption="3000+苗绣传统纹样" label="选择你喜欢的纹样" />
        <Slider label="纹样相似度" left="更像参考图" right="更像所选纹样" value={30} />
        <button type="button">开始融合 <span aria-hidden="true">✦</span></button>
      </div>
      <PhoneBezel />
    </div>
  )
}

function SecondPhoneContent() {
  return (
    <div className={styles.phoneContent}>
      <span className={styles.back}>‹ 返回上级</span>
      <p className={styles.phoneTitle}>图像融合</p>
      <div className={styles.result}><GeneratedResult /></div>
      <div className={styles.controls}>
        <Slider label="具象程度" left="更抽象" right="更具象" value={20} />
        <Slider label="传统风格" left="更现代" right="更传统" value={45} />
        <Slider label="繁复程度" left="更简约" right="更繁复" value={30} />
        <button type="button">生成刺绣纹样 <span aria-hidden="true">✦</span></button>
      </div>
      <PhoneBezel />
    </div>
  )
}

function InterfacePanel() {
  return (
    <div style={{ background: '#fff', color: '#171717', height: 1080, position: 'relative', width: 3456 }}>
      <h2 style={{ fontSize: 44, fontWeight: 700, left: 67, margin: 0, position: 'absolute', top: 44 }}>交互界面</h2>
      <div className={styles.phone} style={{ height: 808, left: 150, top: 142, width: 405 }}><Phone0 /><FirstPhoneContent /></div>
      <div className={styles.phone} style={{ height: 818, left: 679, top: 142, width: 411 }}><Phone1 /><SecondPhoneContent /></div>
      <div style={{ height: 808, left: 1211, position: 'absolute', top: 142, width: 410 }}><Phone2 /></div>
      <div style={{ height: 808, left: 1751, position: 'absolute', top: 142, width: 410 }}><Phone3 /></div>
      <h2 style={{ fontSize: 44, fontWeight: 700, left: 2236, margin: 0, position: 'absolute', top: 60 }}>商业画布</h2>
      <div className={styles.businessCanvas}>
        {business.map(({ className, title, subtitle, copy }) => (
          <article className={className} key={title}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function StitchPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="stitch-revival" tone="light">
      <ResponsiveArtboard height={5400} label="绣衣新生" width={3456}>
        <div style={{ background: '#fff', height: 5400, position: 'relative', width: 3456 }}>
          <section id="overview" style={{ height: 1080, position: 'absolute', top: 0, width: 3456 }}><Frame0 /></section>
          <section id="research" style={{ height: 1080, position: 'absolute', top: 1080, width: 3456 }}><Frame1 /></section>
          <section id="concept" style={{ height: 1080, position: 'absolute', top: 2160, width: 3456 }}><Frame2 /></section>
          <section id="workflow" style={{ height: 1080, position: 'absolute', top: 3240, width: 3456 }}><Frame3 /></section>
          <section id="interface" style={{ height: 1080, position: 'absolute', top: 4320, width: 3456 }}><InterfacePanel /></section>
        </div>
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
