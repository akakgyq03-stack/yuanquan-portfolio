import Frame0 from '../../figma/generated/Pals_290_252'
import Frame1 from '../../figma/generated/Pals_290_324'
import Frame2 from '../../figma/generated/Pals_290_337'
import Frame3 from '../../figma/generated/Pals_290_350'
import Frame4 from '../../figma/generated/Pals_290_365'
import Frame5 from '../../figma/generated/Pals_290_374'
import Frame6 from '../../figma/generated/Pals_290_386'
import Frame7 from '../../figma/generated/Pals_290_563'
import Frame8 from '../../figma/generated/Pals_290_648'
import Frame9 from '../../figma/generated/Pals_290_743'
import Frame10 from '../../figma/generated/Pals_290_774'
import Frame11 from '../../figma/generated/Pals_290_855'
import Frame12 from '../../figma/generated/Pals_290_877'
import Frame13 from '../../figma/generated/Pals_290_947'
import Frame14 from '../../figma/generated/Pals_290_952'
import Frame15 from '../../figma/generated/Pals_290_1004'
import Frame16 from '../../figma/generated/Pals_290_1170'
import Frame17 from '../../figma/generated/Pals_290_1240'
import Frame18 from '../../figma/generated/Pals_290_1418'
import Frame19 from '../../figma/generated/Pals_290_1789'
import Frame20 from '../../figma/generated/Pals_290_1957'
import Frame21 from '../../figma/generated/Pals_290_2196'
import Frame22 from '../../figma/generated/Pals_290_2384'
import Frame23 from '../../figma/generated/Pals_290_2393'
import Frame24 from '../../figma/generated/Pals_290_2806'
import Frame25 from '../../figma/generated/Pals_290_3218'
import Frame26 from '../../figma/generated/Pals_290_3238'
import Frame27 from '../../figma/generated/Pals_290_3305'
import PalsMbtiFrame from '../../figma/PalsMbtiFrame'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasProjectLayout } from './CanvasProjectLayout'
import styles from './PalsPage.module.css'

const directory = [
  { id: 'overview', label: '项目概览' }, { id: 'problem-insight', label: '问题洞察' },
  { id: 'competitive-research', label: '竞品研究' }, { id: 'product-strategy', label: '产品策略' },
  { id: 'matching', label: '匹配机制' }, { id: 'core-experience', label: '核心体验' },
  { id: 'research', label: '用户研究' }, { id: 'data-analysis', label: '数据分析' },
  { id: 'principles', label: '设计原则' }, { id: 'final-design', label: '最终方案' },
  { id: 'operation', label: '运营成果' },
]

export default function PalsPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="pals-go">
      <ResponsiveArtboard height={26415} label="Pals Go" width={1440}>
        <div className={styles.frames} style={{ background: '#fff', height: 26415, position: 'relative', width: 1440 }}>
        <section id="overview" style={{ height: 810, left: 0, position: 'absolute', top: 0, width: 1440 }}><Frame0 /></section>
        <section style={{ height: 846, left: 0, position: 'absolute', top: 855, width: 1440 }}><Frame1 /></section>
        <section style={{ height: 846, left: 0, position: 'absolute', top: 1746, width: 1440 }}><Frame2 /></section>
        <section style={{ height: 846, left: 0, position: 'absolute', top: 2637, width: 1440 }}><Frame3 /></section>
        <section style={{ height: 846, left: 0, position: 'absolute', top: 3528, width: 1440 }}><Frame4 /></section>
        <section id="problem-insight" style={{ height: 864, left: 0, position: 'absolute', top: 4494, width: 1440 }}><Frame5 /></section>
        <section className={styles.coreFeatures} style={{ height: 864, left: 0, position: 'absolute', top: 5403, width: 1440 }}><Frame6 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 6312, width: 1440 }}><Frame7 /></section>
        <section id="competitive-research" style={{ height: 864, left: 0, position: 'absolute', top: 7221, width: 1440 }}><Frame8 /></section>
        <section id="product-strategy" style={{ height: 864, left: 0, position: 'absolute', top: 8130, width: 1440 }}><Frame9 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 9039, width: 1440 }}><Frame10 /></section>
        <section id="matching" style={{ height: 864, left: 0, position: 'absolute', top: 9948, width: 1440 }}><Frame11 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 10857, width: 1440 }}><Frame12 /></section>
        <section id="core-experience" style={{ height: 864, left: 0, position: 'absolute', top: 11841, width: 1440 }}><Frame13 /></section>
        <section id="research" style={{ height: 864, left: 0, position: 'absolute', top: 12750, width: 1440 }}><Frame14 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 13659, width: 1440 }}><Frame15 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 14568, width: 1440 }}><Frame16 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 15477, width: 1440 }}><Frame17 /></section>
        <section id="data-analysis" style={{ height: 864, left: 0, position: 'absolute', top: 16386, width: 1440 }}><Frame18 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 17295, width: 1440 }}><Frame19 /></section>
        <section className={styles.learningModel} style={{ height: 864, left: 0, position: 'absolute', top: 18204, width: 1440 }}>
          <Frame20 />
          <div aria-label="学习动机结构方程模型" className={styles.modelLabels}>
            <span className={styles.selfAbility}>自身能力</span>
            <span className={styles.feedback}>学习反馈</span>
            <span className={styles.willingness}>学习意愿</span>
            <span className={styles.effect}>学习效果</span>
            <span className={styles.experience}>学习体验</span>
            <i className={styles.h11}>H11</i><i className={styles.h12}>H12</i><i className={styles.h13}>H13</i>
          </div>
        </section>
        <section id="principles" style={{ height: 864, left: 0, position: 'absolute', top: 19113, width: 1440 }}><Frame21 /></section>
        <section id="final-design" style={{ height: 864, left: 0, position: 'absolute', top: 20097, width: 1440 }}><Frame22 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 21006, width: 1440 }}><Frame23 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 21915, width: 1440 }}><Frame24 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 22824, width: 1440 }}><Frame25 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 23733, width: 1440 }}><Frame26 /></section>
        <section id="operation" style={{ height: 864, left: 0, position: 'absolute', top: 24642, width: 1440 }}><Frame27 /></section>
        <section style={{ height: 864, left: 0, position: 'absolute', top: 25551, width: 1440 }}><PalsMbtiFrame /></section>
        </div>
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
