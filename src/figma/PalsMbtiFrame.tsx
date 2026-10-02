import styles from './PalsMbtiFrame.module.css'

export default function PalsMbtiFrame() {
  return (
    <div className={styles.frame}>
      <div className={styles.progress}>
        <span>01 用户洞察</span><span>02 核心功能</span><span>03 用户研究</span><b>04 运营验证</b>
      </div>
      <div className={styles.field} />
      <img alt="羽毛球 MBTI 主视觉" className={styles.hero} src="/assets/figma/library/pals-mbti-414.png" />
      <img alt="羽毛球 MBTI 角色分类" className={styles.characters} src="/assets/figma/library/pals-mbti-413.png" />
      <span className={styles.characterCrop}><img alt="羽毛球 MBTI 角色细节" src="/assets/figma/library/pals-mbti-415.png" /></span>
      <i className={styles.rule} />
      <p className={styles.kicker}>OFFLINE ACTIVATION / BADMINTON MBTI</p>
      <h2>羽毛球 MBTI</h2>
      <h3>把人格测试，<br />变成线下活动的社交入口</h3>
      <p className={styles.body}>用轻量的人格标签帮助陌生球友快速破冰，<br />同时把 Pals Go 的角色系统带进真实活动现场。</p>
      <i className={styles.divider} />
      <p className={styles.mechanismLabel}>SOCIAL ICEBREAKER</p>
      <p className={styles.mechanism}>人格标签 → 话题开启 → 现场互动</p>
      <span aria-hidden="true" className={styles.qr} />
      <p className={styles.qrLabel}>SCAN TO PLAY</p>
      <p className={styles.qrCaption}>现场测试入口</p>
      <p className={styles.visualLabel}>PERSONALITY SYSTEM / IP CHARACTERS</p>
    </div>
  )
}
