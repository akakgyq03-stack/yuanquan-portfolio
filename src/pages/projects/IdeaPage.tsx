import Frame0 from '../../figma/generated/Idea_358_548'
import Frame1 from '../../figma/generated/Idea_358_559'
import Frame2 from '../../figma/generated/Idea_358_606'
import Frame3 from '../../figma/generated/Idea_358_627'
import Frame4 from '../../figma/generated/Idea_358_663'
import Frame5 from '../../figma/generated/Idea_358_674'
import Frame6 from '../../figma/generated/Idea_358_694'
import Frame7 from '../../figma/generated/Idea_358_736'
import Frame8 from '../../figma/generated/Idea_358_994'
import Frame9 from '../../figma/generated/Idea_358_812'
import Frame10 from '../../figma/generated/Idea_358_830'
import Frame11 from '../../figma/generated/Idea_358_884'
import Frame12 from '../../figma/generated/Idea_388_1345'
import Frame13 from '../../figma/generated/Idea_396_1479'
import Frame14 from '../../figma/generated/Idea_398_1553'
import { ResponsiveArtboard } from '../../figma/ResponsiveArtboard'
import { CanvasProjectLayout } from './CanvasProjectLayout'
import styles from './IdeaPage.module.css'

const directory = [
  { id: 'overview', label: '项目概览' }, { id: 'problem', label: '问题定义' },
  { id: 'hypothesis', label: '优化假设' }, { id: 'tension', label: '设计矛盾' },
  { id: 'validation-plan', label: '验证方案' }, { id: 'validation-method', label: '验证方式' },
  { id: 'findings', label: '关键发现' }, { id: 'definition', label: '产品定义' },
  { id: 'experience-shift', label: '用户体验转变' }, { id: 'solution', label: '产品方案' },
  { id: 'context', label: 'Context 理解' }, { id: 'constraints', label: '明确约束' },
  { id: 'node-operations', label: '节点操作' }, { id: 'frontend', label: '前端可视化' },
  { id: 'delivery', label: '最终交付' },
]

export default function IdeaPage() {
  return (
    <CanvasProjectLayout directory={directory} projectId="idea-tree" tone="light">
      <ResponsiveArtboard height={15168.5} label="Idea Tree Skill" width={1440}>
        <div className={styles.frames} style={{ background: '#fafaf8', height: 15168.5, position: 'relative', width: 1440 }}>
        <section id="overview" style={{ height: 898, left: 0, position: 'absolute', top: 100, width: 1440 }}><Frame0 /></section>
        <section id="problem" style={{ height: 898, left: 0, position: 'absolute', top: 1046, width: 1440 }}><Frame1 /></section>
        <section id="hypothesis" style={{ height: 898, left: 0, position: 'absolute', top: 1992, width: 1440 }}><Frame2 /></section>
        <section id="tension" style={{ height: 898, left: 0, position: 'absolute', top: 2938, width: 1440 }}><Frame3 /></section>
        <section id="validation-plan" style={{ height: 854, left: 0, position: 'absolute', top: 3884, width: 1440 }}><Frame4 /></section>
        <section id="validation-method" style={{ height: 898, left: 0, position: 'absolute', top: 4830, width: 1440 }}><Frame5 /></section>
        <section id="findings" style={{ height: 898, left: 0, position: 'absolute', top: 5776, width: 1440 }}><Frame6 /></section>
        <section id="definition" style={{ height: 898, left: 0, position: 'absolute', top: 6722, width: 1440 }}><Frame7 /></section>
        <section id="experience-shift" style={{ height: 1090, left: 0, position: 'absolute', top: 7668, width: 1440 }}><Frame8 /></section>
        <section id="solution" style={{ height: 898, left: 0, position: 'absolute', top: 8946.25, width: 1440 }}><Frame9 /></section>
        <section id="context" style={{ height: 898, left: 0, position: 'absolute', top: 9892.25, width: 1440 }}><Frame10 /></section>
        <section id="constraints" style={{ height: 898, left: 0, position: 'absolute', top: 10838.25, width: 1440 }}><Frame11 /></section>
        <section id="node-operations" style={{ height: 972.25, left: 0, position: 'absolute', top: 11784.25, width: 1440 }}>
          <Frame12 />
          <div className={styles.operations}>
            <div className={styles.operationCards}>
              <article><b>＋</b><h3>增加</h3><p>横向生成更多同层替代方案</p></article>
              <article className={styles.activeCard}><b>↓</b><h3>深化</h3><p>沿当前方向推进细节、机制与场景</p></article>
              <article><b>?</b><h3>反思</h3><p>检查漏洞、风险、矛盾与落地阻力</p></article>
              <article><b>↻</b><h3>修改</h3><p>结合反思或新约束重写节点</p></article>
              <article><b>✓</b><h3>保留</h3><p>标记进入候选池，等待最终收束</p></article>
            </div>
            <div className={styles.nextMoves}>
              <p className={styles.panelKicker}>ONE NODE · DIFFERENT NEXT MOVES</p>
              <article className={styles.selectedNode}><b>A2</b><h3>建立可信交易感</h3><p>校园身份 + 履约记录</p><small>当前被选中的想法节点</small></article>
              <div className={styles.actions}>
                <span>增加更多信任方案</span><span className={styles.activeAction}>深化履约机制</span><span>反思隐私风险</span><span>修改认证逻辑</span><span>保留进入候选</span>
                <p>同一个节点，因为用户的动作不同，会触发不同的 prompt strategy 与下一轮生成。</p>
              </div>
            </div>
          </div>
        </section>
        <section id="frontend" style={{ height: 1318, left: 0, position: 'absolute', top: 12804.5, width: 1440 }}><Frame13 /></section>
        <section id="delivery" style={{ height: 898, left: 0, position: 'absolute', top: 14170.5, width: 1440 }}><Frame14 /></section>
        </div>
      </ResponsiveArtboard>
    </CanvasProjectLayout>
  )
}
