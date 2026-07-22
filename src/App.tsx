import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Archive,
  ArrowDown,
  ArrowRight,
  Bell,
  Bot,
  BrainCircuit,
  Check,
  CircuitBoard,
  Database,
  Download,
  Github,
  LockKeyhole,
  Menu,
  MessageCircle,
  Moon,
  MousePointer2,
  Network,
  Play,
  RadioTower,
  Radar,
  Search,
  Sparkles,
  Sun,
  WandSparkles,
  Workflow,
  X,
} from "lucide-react";

type Theme = "dark" | "light";

const releases = {
  classic: "https://github.com/anYuJia/better-douyin/releases/latest",
  rust: "https://github.com/anYuJia/better-douyin-R/releases/latest",
  classicSource: "https://github.com/anYuJia/better-douyin",
  rustSource: "https://github.com/anYuJia/better-douyin-R",
};

const heroSignals = [
  { label: "GitHub Stars · 双版本合计", value: "1.1K+" },
  { label: "Forks", value: "146" },
  { label: "Release downloads", value: "16K+" },
];

const ambientParticles = [
  [7, 18, 3, 16], [14, 72, 2, 10], [23, 36, 2, 18], [31, 87, 3, 12],
  [42, 14, 2, 20], [49, 61, 3, 14], [58, 28, 2, 17], [66, 83, 2, 11],
  [73, 46, 3, 19], [81, 17, 2, 13], [88, 67, 3, 16], [94, 38, 2, 10],
] as const;

const features = [
  {
    number: "01",
    label: "ENTRY",
    title: "搜索和链接，是入口。",
    description: "按用户名、抖音号或分享链接进入内容线索。用户、作品、推荐流可以在一个桌面入口里开始整理。",
    image: "./images/get-user.jpg",
    imageAlt: "better-douyin 搜索用户界面",
    icon: Search,
  },
  {
    number: "02",
    label: "PROFILE",
    title: "主页资产，一眼摊开。",
    description: "作品、收藏、点赞和用户资料集中展示。适合先判断内容价值，再决定是否批量归档。",
    image: "./images/user-detail.jpg",
    imageAlt: "better-douyin 用户主页界面",
    icon: Archive,
  },
  {
    number: "03",
    label: "DISCOVER",
    title: "在推荐流里保持节奏。",
    description: "熟悉的竖屏预览、连续切换和快速收藏，让你像浏览一样整理素材。看到好内容，马上加入本地归档线。",
    image: "./images/recommend.jpg",
    imageAlt: "better-douyin 推荐视频流界面",
    icon: Play,
  },
  {
    number: "04",
    label: "PLAY",
    title: "归档之后，仍然好看。",
    description: "视频、图集、Live Photo、原声与 BGM 保持完整。进度、音量、自动连播都在手边，本地库也有沉浸观看体验。",
    image: "./images/player.jpg",
    imageAlt: "better-douyin 沉浸播放器界面",
    icon: Play,
  },
];

const intelligenceCards = [
  {
    eyebrow: "AI CHAT",
    title: "AI 聊天，让处理不只靠手点。",
    description:
      "兼容 OpenAI Compatible、DeepSeek、通义千问、硅基流动、火山/豆包等 Chat Completions 服务。系统提示词定义边界，用户提示词补充任务风格，评论、私信和推荐流处理都能被清晰约束。",
    image: "./images/ai-chat.jpg",
    imageAlt: "AI 智能互动与回复风格配置界面",
    icon: Bot,
    proof: "Prompt import / provider switch / safety scope",
    stats: ["多服务商", "提示词导入", "边界可控"],
    featured: true,
  },
  {
    eyebrow: "MCP",
    title: "把桌面端接进 AI 工作流。",
    description:
      "仅监听本机的 HTTP MCP 服务，让 Codex、Claude Code、OpenClaw 等兼容客户端调用应用工具，复用桌面端登录态、下载目录和任务队列。",
    image: "./images/mcp-call-result.png",
    imageAlt: "AI 通过 MCP 完成关注、查询与下载任务的调用结果",
    icon: Network,
    proof: "A real MCP call: follow / inspect / message / archive",
    stats: ["本机连接", "工具风险标记", "写操作确认"],
  },
  {
    eyebrow: "AUTOMATION",
    title: "让后台持续观察。",
    description:
      "推荐流、好友私信和通知回复可以进入自动监控流程。你决定规则、动作和上限，应用负责持续观察并记录触发日志。",
    icon: RadioTower,
    proof: "Rules / logs / monitoring limits",
    stats: ["推荐流", "好友私信", "通知回复"],
  },
];

const flowSteps = [
  { icon: MousePointer2, label: "发现", text: "搜索主页、推荐流、分享链接进入同一条线。" },
  { icon: BrainCircuit, label: "判断", text: "AI 根据提示词辅助筛选、回复或整理动作。" },
  { icon: CircuitBoard, label: "调用", text: "MCP 客户端发起本机工具调用，应用侧确认风险。" },
  { icon: Database, label: "归档", text: "下载、历史、配置和本地文件回到你的电脑。" },
];

const capabilityCards = [
  {
    icon: Archive,
    code: "A / ARCHIVE",
    signal: "Queue ready",
    title: "批量归档",
    description: "用户作品、搜索结果、推荐流、收藏和点赞列表都能进入下载队列。",
  },
  {
    icon: Workflow,
    code: "B / TASKS",
    signal: "Retry / speed / path",
    title: "任务队列",
    description: "进度、速度、失败重试和本地文件定位集中管理。",
  },
  {
    icon: MessageCircle,
    code: "C / DM",
    signal: "Draft + reply",
    title: "好友私信",
    description: "好友列表、消息记录与自动回复组合成桌面工作流。",
  },
  {
    icon: Bell,
    code: "D / NOTICE",
    signal: "AI assisted",
    title: "通知处理",
    description: "评论、回复和互动通知可以统一查看，并交给 AI 规则辅助处理。",
  },
  {
    icon: Play,
    code: "E / PLAYER",
    signal: "Autoplay",
    title: "沉浸播放器",
    description: "视频、图集、Live Photo、原声与自动连播形成完整观看体验。",
  },
  {
    icon: LockKeyhole,
    code: "F / LOCAL",
    signal: "Private by default",
    title: "本地优先",
    description: "Cookie、配置、下载历史和本地文件保存在本机。",
  },
];

const versions = [
  {
    index: "01",
    name: "better-douyin",
    tech: "Python Desktop",
    badge: "功能完整优先",
    description: "成熟、可靠的完整桌面版本，适合需要稳定工作流与丰富能力的内容收藏者。",
    bestFor: "想要功能覆盖最完整、生态最成熟、更新节奏最稳。",
    points: ["完整功能", "成熟生态", "适合长期主力使用"],
    tradeoff: "运行体积和启动速度不是最轻。",
    href: releases.classic,
    source: releases.classicSource,
  },
  {
    index: "02",
    name: "better-douyin-R",
    tech: "Rust + Tauri",
    badge: "轻量流畅优先",
    description: "启动更快、占用更低的轻量版本，让浏览、本地播放与桌面分发始终顺滑。",
    bestFor: "更在意启动速度、资源占用、轻量桌面体验。",
    points: ["轻量运行时", "启动更快", "Tauri 架构"],
    tradeoff: "少数新能力可能先在完整版本里验证。",
    href: releases.rust,
    source: releases.rustSource,
  },
];

function readInitialTheme(): Theme {
  const saved = window.localStorage.getItem("better-douyin-site-theme");
  if (saved === "dark" || saved === "light") return saved;
  return "dark";
}

function AmbientEffects() {
  const reduceMotion = useReducedMotion();
  const particlesRef = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let latestX = window.innerWidth / 2;
    let latestY = window.innerHeight / 2;

    const render = () => {
      frame = 0;
      const offsetX = latestX / window.innerWidth - 0.5;
      const offsetY = latestY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty("--cursor-x", `${latestX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${latestY}px`);
      particlesRef.current.forEach((particle, index) => {
        if (!particle) return;
        const depth = 8 + (index % 5) * 4;
        particle.style.transform = `translate3d(${offsetX * depth}px, ${offsetY * depth}px, 0)`;
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      latestX = event.clientX;
      latestY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  return (
    <div className="ambient-effects" aria-hidden="true">
      <span className="cursor-glow" />
      <span className="cursor-glow cursor-glow-secondary" />
      {ambientParticles.map(([x, y, size, opacity], index) => (
        <span
          className="ambient-particle"
          key={`${x}-${y}`}
          ref={(element) => { particlesRef.current[index] = element; }}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity / 100,
          }}
        />
      ))}
    </div>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="better-douyin 首页">
      <span className="brand-mark">
        <img src="./images/animated-icon.svg" alt="" />
      </span>
      <span>better-douyin</span>
    </a>
  );
}

function IconButton({ label, children, onClick }: { label: string; children: ReactNode; onClick: () => void }) {
  return (
    <button className="icon-button" type="button" onClick={onClick} aria-label={label} title={label}>
      {children}
    </button>
  );
}

function Header({ theme, onThemeToggle }: { theme: Theme; onThemeToggle: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="主导航">
        <a href="#intelligence">AI / MCP</a>
        <a href="#experience">体验</a>
        <a href="#download">版本 / 下载</a>
        <a className="nav-github" href={releases.classicSource} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" />
          GitHub
        </a>
      </nav>
      <div className="header-actions">
        <IconButton label={theme === "dark" ? "切换到亮色主题" : "切换到暗色主题"} onClick={onThemeToggle}>
          <span className="theme-icon-stack" aria-hidden="true">
            <Sun className={theme === "dark" ? "theme-icon-active" : ""} />
            <Moon className={theme === "light" ? "theme-icon-active" : ""} />
          </span>
        </IconButton>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            className="mobile-nav"
            aria-label="移动端导航"
            initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            <a href="#intelligence" onClick={closeMenu}>AI / MCP</a>
            <a href="#experience" onClick={closeMenu}>体验</a>
            <a href="#download" onClick={closeMenu}>版本 / 下载</a>
            <a href={releases.classicSource} target="_blank" rel="noreferrer">GitHub</a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function ActionLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <a className={primary ? "button button-primary" : "button button-secondary"} href={href}>
      {children}
    </a>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(3px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.56, ease: [0.2, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLead({ kicker, title, muted }: { kicker: string; title: string; muted: string }) {
  return (
    <Reveal className="section-lead">
      <span className="section-kicker">
        <Sparkles aria-hidden="true" />
        {kicker}
      </span>
      <h2>{title}<span>{muted}</span></h2>
    </Reveal>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <img src="./images/home-classic.jpg" alt="" />
      </div>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.68, ease: [0.2, 0, 0, 1] }}
        >
          <span className="hero-eyebrow">
            <Radar aria-hidden="true" />
            Content archive suite
          </span>
          <h1 aria-label="better-douyin">
            <span>better</span>
            <span className="spectral-text">douyin.</span>
          </h1>
        </motion.div>
        <motion.div
          className="hero-side"
          initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.68, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        >
          <p className="hero-tagline">
            <strong>给内容收藏战士的桌面武器库。</strong>
            <span>搜索、预览、批量归档，再把 AI 聊天与 MCP 工具接入本地工作流。不是控制台，是一张让人想下载的产品战报。</span>
          </p>
          <div className="hero-actions">
            <ActionLink href="#download" primary>
              下载最新版
              <ArrowDown aria-hidden="true" />
            </ActionLink>
            <ActionLink href="#intelligence">
              看 AI / MCP
              <ArrowRight aria-hidden="true" />
            </ActionLink>
          </div>
          <div className="hero-console">
            {heroSignals.map((signal) => (
              <span key={signal.label}>
                <small>{signal.label}</small>
                {signal.value}
              </span>
            ))}
          </div>
          <p className="hero-proof-note">GitHub 公开数据 · 2026.07.22 · 发行包下载不等同于独立用户数</p>
        </motion.div>
      </div>
    </section>
  );
}

function IntelligenceSection() {
  return (
    <section className="section intelligence-section" id="intelligence">
      <div className="section-inner">
        <SectionLead kicker="AI layer" title="不止是下载器，" muted="它也能进入 AI 工作流。" />
        <div className="intelligence-layout">
          {intelligenceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Reveal
                className={[
                  "intelligence-card",
                  card.featured && "intelligence-card-featured",
                  card.eyebrow === "MCP" && "intelligence-card-proof",
                  card.eyebrow === "AUTOMATION" && "intelligence-card-automation",
                ].filter(Boolean).join(" ")}
                key={card.eyebrow}
              >
                <div className="intelligence-head">
                  <span>{card.eyebrow}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {"image" in card && (
                  <div className="intelligence-media">
                    <img src={card.image} alt={card.imageAlt} />
                  </div>
                )}
                <div className="intelligence-proof">{card.proof}</div>
                <div className="chip-row">
                  {card.stats.map((stat) => <span key={stat}>{stat}</span>)}
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="workflow-strip">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="flow-step" key={step.label}>
                <div className="flow-mark">
                  <Icon aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h4>{step.label}</h4>
                <p>{step.text}</p>
              </article>
            );
          })}
        </Reveal>
        <Reveal className="feature-matrix">
          <div className="feature-matrix-heading">
            <span>Capability index</span>
            <p>把常用动作收在一个清晰、可扫读的功能清单里。</p>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">功能</th>
                <th scope="col">工作方式</th>
                <th scope="col">能力标签</th>
              </tr>
            </thead>
            <tbody>
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                return (
                  <tr key={card.title}>
                    <td>
                      <span className="matrix-feature-name">
                        <Icon aria-hidden="true" />
                        <span>
                          <small>{card.code}</small>
                          <strong>{card.title}</strong>
                        </span>
                      </span>
                    </td>
                    <td>{card.description}</td>
                    <td><span className="matrix-signal">{card.signal}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-inner">
        <SectionLead kicker="Product feel" title="从发现到归档，" muted="动作要短，画面要顺。" />
        <div className="feature-list">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article className="feature-row" key={feature.label}>
                <Reveal className="feature-copy">
                  <span className="feature-index">{feature.number} / {feature.label}</span>
                  <span className="feature-icon"><Icon aria-hidden="true" /></span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </Reveal>
                <Reveal className="feature-media">
                  <img src={feature.image} alt={feature.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="manifesto-section" aria-label="产品理念">
      <Reveal className="manifesto-inner">
        <p>
          信息流让内容快速经过，<span>better-douyin 让它停下来。</span>
          从一次观看，变成可检索、可管理、可再次抵达的本地记忆。
        </p>
      </Reveal>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="download-section" id="download">
      <Reveal className="download-inner">
        <span className="section-kicker">
          <WandSparkles aria-hidden="true" />
          Choose your build
        </span>
        <h2>最后一步，<span>选择你的版本。</span></h2>
        <p>两个版本做同一件事：把喜欢的内容真正留在本地。区别在于完整度、速度和运行时偏好。</p>
        <div className="version-choice-grid" id="versions">
          {versions.map((version) => (
            <article className="version-choice-card" key={version.name}>
              <div className="version-card-top">
                <span className="version-index">{version.index}</span>
                <span className="version-tech">{version.tech}</span>
              </div>
              <span className="version-badge">{version.badge}</span>
              <h3>{version.name}</h3>
              <p>{version.description}</p>
              <div className="version-fit">
                <strong>适合你，如果：</strong>
                <span>{version.bestFor}</span>
              </div>
              <ul>
                {version.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}
              </ul>
              <small>{version.tradeoff}</small>
              <div className="version-actions">
                <ActionLink href={version.href} primary>
                  <Download aria-hidden="true" />
                  下载
                </ActionLink>
                <ActionLink href={version.source}>
                  <Github aria-hidden="true" />
                  源码
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
        <small>请只在合法、授权、非商业的场景中使用。</small>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Brand />
      <p>Local first. Built with care.</p>
      <div>
        <a href={releases.classicSource} target="_blank" rel="noreferrer">Python</a>
        <a href={releases.rustSource} target="_blank" rel="noreferrer">Rust</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("better-douyin-site-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#080806" : "#f7f7f4");
  }, [theme]);

  return (
    <>
      <AmbientEffects />
      <Header theme={theme} onThemeToggle={() => setTheme((current) => current === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <IntelligenceSection />
        <ExperienceSection />
        <ManifestoSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
