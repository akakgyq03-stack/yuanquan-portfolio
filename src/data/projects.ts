export type ProjectId =
  | 'aigc-creative-practice'
  | 'perfume-lab'
  | 'pals-go'
  | 'idea-tree'
  | 'odor-land'
  | 'textual-scent-lab'
  | 'forest-wardrobe'
  | 'stitch-revival'
  | 'art-exhibitions'

export type ProjectTheme = 'ink' | 'scent' | 'pals' | 'teal' | 'paper' | 'lab' | 'forest' | 'stitch' | 'gallery'

export interface ProjectSection {
  id: string
  label: string
  shortLabel?: string
  title: string
  description?: string
  nodeIds: string[]
  layout?: 'feature' | 'grid' | 'mosaic' | 'editorial'
}

export interface ProjectDefinition {
  id: ProjectId
  number: string
  title: string
  englishTitle: string
  category: string
  summary: string
  role: string
  period: string
  theme: ProjectTheme
  figmaNodes: string[]
  sections: ProjectSection[]
}

export const projects: ProjectDefinition[] = [
  {
    id: 'aigc-creative-practice', number: '01', title: 'AIGC 创作实践', englishTitle: 'AIGC Creative Practice',
    category: 'AIGC 创作', summary: '从内容账号到系列化图像与视频创作，探索风格控制、场景一致性与角色表达。',
    role: 'Independent Creator', period: '2024—2025', theme: 'ink', figmaNodes: ['535:942'],
    sections: [
      { id: 'overview', label: '项目概览', title: '视频与图像内容创作', description: '以真实创作者身份持续进行 AIGC 内容实验，并将创作方法沉淀为可复用的视觉流程。', nodeIds: ['535:942'], layout: 'feature' },
      { id: 'content-account', label: '内容账号', title: 'AIGC 内容账号', description: '围绕内容发布、受众反馈与系列化表达验证创作方向。', nodeIds: ['535:942'], layout: 'editorial' },
      { id: 'method', label: '创作方法', title: '从概念、提示词到视觉序列', nodeIds: ['535:942'], layout: 'mosaic' },
      { id: 'scene-generation', label: '场景生成', title: '场景、光线与叙事氛围', nodeIds: ['535:942'], layout: 'grid' },
      { id: 'character-consistency', label: '角色一致性', title: '角色与风格一致性实验', nodeIds: ['535:942'], layout: 'mosaic' },
      { id: 'video-practice', label: '视频实践', title: '从静帧到动态内容', nodeIds: ['535:942'], layout: 'grid' },
      { id: 'final-work', label: '最终作品', title: 'Selected Works', nodeIds: ['535:942'], layout: 'mosaic' },
    ],
  },
  {
    id: 'perfume-lab', number: '02', title: '香迹档案', englishTitle: 'Character Olfactory Archive',
    category: 'AI 产品与 Vibe Coding', summary: '把人物弧光、香水结构与调香规则连接起来的生成式角色香水档案。',
    role: 'Product / UX / Build', period: '2025', theme: 'scent', figmaNodes: ['58:2'],
    sections: [
      { id: 'overview', label: '01 项目概览', title: '香迹档案', description: '一款生成式 AI 产品：将故事中的角色转译为可以被收藏、理解与分享的气味档案。', nodeIds: ['58:3'], layout: 'feature' },
      { id: 'insight', label: '02 洞察与机会', title: '为什么气味适合承载角色？', nodeIds: ['64:2', '58:29'], layout: 'editorial' },
      { id: 'competitive-gap', label: '03 竞争缺口', title: '竞争缺口', nodeIds: ['66:2'], layout: 'grid' },
      { id: 'target-users', label: '04 目标用户', title: 'Target Users', nodeIds: ['502:570'], layout: 'editorial' },
      { id: 'product-value', label: '05 产品价值', title: '产品价值', nodeIds: ['502:597'], layout: 'grid' },
      { id: 'core-mechanism', label: '06 核心机制', title: '角色弧光 × 香水结构 × 调香规则', description: '以角色经历为主线，在结构化规则约束下生成完整香水方案。', nodeIds: ['166:2', '166:3', '166:4'], layout: 'mosaic' },
      { id: 'final-output', label: '07 最终产出', title: '最终产出', nodeIds: ['197:2'], layout: 'feature' },
      { id: 'ux-visual', label: '08 UX 与视觉', title: 'UX 语言与视觉系统', nodeIds: ['66:101'], layout: 'mosaic' },
    ],
  },
  {
    id: 'pals-go', number: '03', title: 'Pals Go', englishTitle: 'Sports Social Product',
    category: '产品体验、研究与运营', summary: '面向运动爱好者的匹配与社交产品，从用户研究到产品设计和社群运营。',
    role: 'Product / UX / Research / Operation', period: '2024', theme: 'pals', figmaNodes: ['290:251'],
    sections: [
      { id: 'overview', label: '项目概览', title: 'Pals Go', description: '帮助运动爱好者找到合适的伙伴、场地与活动，让一次运动从想法变成行动。', nodeIds: ['290:252', '290:324'], layout: 'feature' },
      { id: 'user-context', label: '用户场景', title: '人、运动与线下相遇', nodeIds: ['290:337', '290:350', '290:365'], layout: 'mosaic' },
      { id: 'problem-insight', label: '问题洞察', title: '从真实运动场景发现阻力', nodeIds: ['290:374', '290:386', '290:563'], layout: 'editorial' },
      { id: 'competitive-research', label: '竞品研究', title: '市场与竞品机会', nodeIds: ['290:648'], layout: 'grid' },
      { id: 'product-strategy', label: '产品策略', title: '产品框架与策略', nodeIds: ['290:743', '290:774'], layout: 'grid' },
      { id: 'matching', label: '匹配机制', title: '运动伙伴匹配机制', nodeIds: ['290:855', '290:877'], layout: 'mosaic' },
      { id: 'core-experience', label: '核心体验', title: '从发布到参与的核心体验', nodeIds: ['290:947'], layout: 'feature' },
      { id: 'research', label: '用户研究', title: '用户研究', nodeIds: ['290:952', '290:1004', '290:1170', '290:1240'], layout: 'editorial' },
      { id: 'data-analysis', label: '数据分析', title: '问卷、模型与人群聚类', nodeIds: ['290:1418', '290:1789', '290:1957'], layout: 'mosaic' },
      { id: 'principles', label: '设计原则', title: '从数据结论到设计原则', nodeIds: ['290:2196'], layout: 'grid' },
      { id: 'final-design', label: '最终方案', title: '产品界面与服务体验', nodeIds: ['290:2384', '290:2393', '290:2806', '290:3218', '290:3238'], layout: 'mosaic' },
      { id: 'operation', label: '运营成果', title: '内容、社区与线下运营', nodeIds: ['290:3305', '290:3763'], layout: 'feature' },
    ],
  },
  {
    id: 'idea-tree', number: '04', title: 'Idea Tree Skill', englishTitle: 'Human in the Loop Brainstorm Skill',
    category: 'AI 产品与 Skill 设计', summary: '让发散、约束、验证和收敛可视化的 Human-in-the-loop 头脑风暴 Skill。',
    role: 'Product / Skill / Frontend', period: '2025', theme: 'teal', figmaNodes: ['398:1612'],
    sections: [
      ['overview','项目概览','项目概览','358:548'], ['problem','问题定义','问题定义','358:559'], ['hypothesis','优化假设','优化假设','358:606'],
      ['tension','设计矛盾','设计矛盾','358:627'], ['validation-plan','验证方案','验证方案','358:663'], ['validation-method','验证方式','验证方式','358:674'],
      ['findings','关键发现','关键发现','358:694'], ['definition','产品定义','产品定义','358:736'], ['experience-shift','用户体验转变','用户体验转变','358:994'],
      ['solution','产品方案','产品方案','358:812'], ['context','Context 理解','Context 理解','358:830'], ['constraints','明确约束','明确约束','358:884'],
      ['node-operations','节点操作','节点操作','388:1345'], ['frontend','前端可视化','前端可视化','396:1479'], ['delivery','最终交付','最终交付','398:1553'],
    ].map(([id,label,title,nodeId]) => ({ id, label, title, nodeIds: [nodeId], layout: 'grid' as const })),
  },
  {
    id: 'odor-land', number: '05', title: 'Odor Land', englishTitle: 'AI Scent Visualization Workflow',
    category: 'AI Workflow', summary: '将气味描述转译为视觉花园的生成式工作流，从规则构建到多路径输出。',
    role: 'AI Workflow / Visual Direction', period: '2025', theme: 'paper', figmaNodes: ['487:408'],
    sections: [
      { id:'overview',label:'项目概览',title:'ODOR LAND',nodeIds:['487:408'],layout:'feature' },
      { id:'imagination',label:'气味想象',title:'如果香气是一座花园，它会如何展开？',nodeIds:['487:408'],layout:'editorial' },
      { id:'visual-relation',label:'视觉关联',title:'视觉相关定义',nodeIds:['487:408'],layout:'mosaic' },
      { id:'strategy',label:'设计策略',title:'围绕感知、比对与解释的设计策略',nodeIds:['487:408'],layout:'grid' },
      { id:'workflow',label:'工作流构建',title:'把视觉设想拆成可执行的生成链路',nodeIds:['487:408'],layout:'mosaic' },
      { id:'nodes',label:'节点设计',title:'节点与参数设计',nodeIds:['487:408'],layout:'grid' },
      { id:'scent-path',label:'香气路径',title:'走过一支香水',nodeIds:['487:408'],layout:'mosaic' },
      { id:'result',label:'最终结果',title:'A scent, a path, a garden.',nodeIds:['487:408'],layout:'feature' },
    ],
  },
  {
    id: 'textual-scent-lab', number: '06', title: '文字气味实验室', englishTitle: 'Textual Scent Lab',
    category: '数据可视化网站', summary: '以自然语言为入口，利用机器学习预测气味的跨感官特征并进行动态可视化。',
    role: 'Individual / Web / ML Visualization', period: '2024.03—2025.01', theme: 'lab', figmaNodes: ['537:1385','537:1467','537:1570','537:1631','537:1698','537:1766'],
    sections: [
      {id:'overview',label:'项目概览',title:'文字气味实验室',nodeIds:['537:1385'],layout:'feature'},
      {id:'background',label:'背景研究',title:'香水市场与线上气味表达',nodeIds:['537:1385'],layout:'editorial'},
      {id:'research',label:'用户研究',title:'从香水评论中寻找联觉隐喻',nodeIds:['537:1467'],layout:'mosaic'},
      {id:'technology',label:'技术框架',title:'NLP、随机森林与感官关联预测',nodeIds:['537:1570'],layout:'grid'},
      {id:'concept',label:'设计概念',title:'从文字到气味',nodeIds:['537:1631'],layout:'editorial'},
      {id:'visualization',label:'感官可视化',title:'温度、颜色与味觉的动态映射',nodeIds:['537:1698'],layout:'mosaic'},
      {id:'interface',label:'信息架构与界面',title:'信息架构与交互界面',nodeIds:['537:1766'],layout:'feature'},
    ],
  },
  {
    id: 'forest-wardrobe', number: '07', title: '森林衣橱', englishTitle: 'Forest Wardrobe',
    category: 'ESG 导向购物平台', summary: '以环保数据透明化与数字森林循环机制连接购买、使用与旧衣回收。',
    role: 'Group / App Design', period: '2023.03—2023.05', theme: 'forest', figmaNodes: ['537:1840','537:13134','537:13294','537:13321'],
    sections: [
      {id:'overview',label:'项目概览',title:'森林衣橱',nodeIds:['537:1840'],layout:'feature'},
      {id:'background',label:'背景研究',title:'快时尚、污染与循环困境',nodeIds:['537:1840'],layout:'editorial'},
      {id:'interviews',label:'用户访谈',title:'购买、回收与可持续态度',nodeIds:['537:13134'],layout:'mosaic'},
      {id:'persona',label:'用户画像',title:'目标用户与核心矛盾',nodeIds:['537:13134'],layout:'grid'},
      {id:'desk-research',label:'二手调研',title:'二手市场与回收路径',nodeIds:['537:13294'],layout:'editorial'},
      {id:'competition',label:'竞品分析',title:'竞品与功能优先级',nodeIds:['537:13294'],layout:'grid'},
      {id:'architecture',label:'信息架构',title:'信息架构与核心流程',nodeIds:['537:13294','537:13321'],layout:'mosaic'},
      {id:'wireframes',label:'线框图',title:'购物、衣橱与回收',nodeIds:['537:13321'],layout:'grid'},
      {id:'high-fidelity',label:'高保真界面',title:'高保真界面与循环体验',nodeIds:['537:13321'],layout:'feature'},
    ],
  },
  {
    id: 'stitch-revival', number: '08', title: '绣衣新生', englishTitle: 'Stitch Revival',
    category: 'AIGC 非遗服务设计', summary: '用 AIGC 生成苗绣融合纹样，连接旧衣改造、自动化制版、消费者与绣娘。',
    role: 'Personal / Service Design', period: '2025.02—2025.03', theme: 'stitch', figmaNodes: ['537:1882','537:1905','537:2146','537:2181','537:2189'],
    sections: [
      {id:'overview',label:'项目概览',title:'绣衣新生',nodeIds:['537:1882'],layout:'feature'},
      {id:'background',label:'背景研究',title:'旧衣困境与非遗传承',nodeIds:['537:1882'],layout:'editorial'},
      {id:'business',label:'商业可行性',title:'ESG、品牌与市场机会',nodeIds:['537:1882'],layout:'grid'},
      {id:'research',label:'用户研究',title:'消费者与绣娘',nodeIds:['537:1905'],layout:'mosaic'},
      {id:'concept',label:'设计概念',title:'数字化赋能非遗传承',nodeIds:['537:2146'],layout:'editorial'},
      {id:'service',label:'系统与服务蓝图',title:'系统图与服务蓝图',nodeIds:['537:2146'],layout:'grid'},
      {id:'workflow',label:'AIGC 工作流',title:'基于 ComfyUI 的生成工作流',nodeIds:['537:2181'],layout:'mosaic'},
      {id:'interface',label:'交互界面',title:'纹样融合与制版界面',nodeIds:['537:2189'],layout:'feature'},
    ],
  },
  {
    id: 'art-exhibitions', number: '09', title: '艺术展览作品', englishTitle: 'Art & Installation Works',
    category: '装置艺术与工业设计', summary: 'DreamCipher 梦匣与 Carbon–Silicon Symbiosis：关于睡眠仪式、智能技术与未来自然的两组作品。',
    role: 'Industrial / Installation Art', period: '2025—2026', theme: 'gallery', figmaNodes: ['563:48071'],
    sections: [
      {id:'overview',label:'作品总览',title:'艺术展览作品',nodeIds:['563:48071'],layout:'feature'},
      {id:'dream-cipher',label:'DreamCipher 梦匣',title:'DreamCipher 梦匣',description:'一款面向睡眠场景的 AI 声音生成装置，通过三层旋转密码环构建远离屏幕的睡前仪式。',nodeIds:['563:48071'],layout:'feature'},
      {id:'concept',label:'设计理念',title:'A physical ritual for a better night.',nodeIds:['563:48071'],layout:'editorial'},
      {id:'structure',label:'草图与结构',title:'Sketches, Technical Drawings & Prototype',nodeIds:['563:48071'],layout:'mosaic'},
      {id:'flow',label:'使用流程',title:'Place · Set Intention · Generate · Dream',nodeIds:['563:48071'],layout:'grid'},
      {id:'symbiosis',label:'硅碳共生',title:'Carbon–Silicon Symbiosis',description:'以感知、连接、反馈、流动与生成为线索，讨论智能技术与自然之间的未来共生。',nodeIds:['563:48071'],layout:'feature'},
      {id:'installation',label:'装置呈现',title:'Installation Views',nodeIds:['563:48071'],layout:'mosaic'},
    ],
  },
]

export const projectById = Object.fromEntries(projects.map((project) => [project.id, project])) as Record<ProjectId, ProjectDefinition>

export function adjacentProjects(id: ProjectId) {
  const index = projects.findIndex((project) => project.id === id)
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}
