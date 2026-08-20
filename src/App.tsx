import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  ChevronRight,
  Clipboard,
  Download,
  ExternalLink,
  Github,
  HardDrive,
  Menu,
  MessageCircle,
  Moon,
  Network,
  Play,
  RadioTower,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";

const REPO = "https://github.com/anYuJia/better-douyin";
const RELEASES = `${REPO}/releases/latest`;
type Theme = "dark" | "light";
const route = () => {
  const value = location.hash.replace(/^#\/?/, "");
  return value.startsWith("docs")
    ? { page: "docs", section: value.split("/")[1] || "intro" }
    : { page: "home", section: "" };
};
const go = (path: string) => {
  location.hash = path;
  scrollTo({ top: 0, behavior: "instant" });
};

const pages = [
  ["intro", "文档首页", "开始"],
  ["install", "安装", "开始"],
  ["first-run", "首次使用", "开始"],
  ["download", "下载与管理", "使用指南"],
  ["player", "播放器", "使用指南"],
  ["messages", "通知与私信", "使用指南"],
  ["ai", "AI 配置", "进阶能力"],
  ["mcp", "MCP", "进阶能力"],
  ["automation", "自动化", "进阶能力"],
  ["privacy", "隐私与安全", "帮助"],
  ["troubleshooting", "故障排查", "帮助"],
  ["faq", "常见问题", "帮助"],
] as const;

function Brand() {
  return (
    <button className="brand" onClick={() => go("/")} aria-label="返回首页">
      <span className="brand-mark">♪</span>
      <b>better-douyin</b>
    </button>
  );
}
function Header({
  page,
  theme,
  setTheme,
}: {
  page: string;
  theme: Theme;
  setTheme: (v: Theme) => void;
}) {
  const [open, setOpen] = useState(false);
  const navigate = (path: string) => {
    go(path);
    setOpen(false);
  };
  return (
    <header>
      <Brand />
      <nav className={open ? "nav open" : "nav"}>
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => navigate("/")}
        >
          产品
        </button>
        <button
          className={page === "docs" ? "active" : ""}
          onClick={() => navigate("/docs/intro")}
        >
          文档
        </button>
        <a href={REPO} target="_blank" rel="noreferrer">
          GitHub <ExternalLink />
        </a>
      </nav>
      <div className="header-actions">
        <button
          className="square"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="切换主题"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
        <a
          className="top-download"
          href={RELEASES}
          target="_blank"
          rel="noreferrer"
        >
          <Download />
          下载
        </a>
        <button
          className="square hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "关闭导航" : "打开导航"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const features = [
  [
    Search,
    "发现",
    "从主页到推荐流",
    "搜索用户、浏览作品与推荐内容，把分散的入口收进一个桌面工作台。",
    "screen-user-detail.png",
  ],
  [
    Download,
    "归档",
    "下载之后，依然有序",
    "批量任务、实时进度、本地扫描、筛选与文件定位，完整覆盖归档流程。",
    "screen-downloads.png",
  ],
  [
    Play,
    "播放",
    "内容形态完整保留",
    "视频、图集、Live Photo、原声与 BGM，在沉浸播放器里自然衔接。",
    "screen-player.png",
  ],
] as const;
const advanced = [
  [
    Bot,
    "AI / 01",
    "智能互动",
    "接入兼容 Chat Completions 的模型服务，用提示词约束评论、私信和内容处理。",
  ],
  [
    Network,
    "MCP / 02",
    "连接你的 AI 工具",
    "让兼容客户端复用桌面端登录态、下载目录和任务队列。",
  ],
  [
    RadioTower,
    "AUTO / 03",
    "自动化监控",
    "为推荐流、私信、通知和创作者更新设置规则、动作与运行上限。",
  ],
] as const;

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <i /> 本地优先的抖音桌面工具
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            刷到喜欢的，
            <br />
            <em>留在自己的电脑里。</em>
          </motion.h1>
          <p>
            浏览、播放、下载与管理，在一款精心设计的桌面应用里完成。更进一步，用
            AI、MCP 和自动化构建自己的内容工作流。
          </p>
          <div className="actions">
            <a
              className="button primary"
              href={RELEASES}
              target="_blank"
              rel="noreferrer"
            >
              <Download />
              获取最新版
            </a>
            <button className="button" onClick={() => go("/docs/install")}>
              <BookOpen />
              阅读安装文档
            </button>
          </div>
          <small className="hero-note">
            <Check /> 免费开源　·　本地优先　·　仅供非商业使用
          </small>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="./images/hero-workspace-dark.jpg"
            alt="better-douyin 桌面应用主界面"
          />
          <div className="status">
            <i />
            <span>
              <small>DOWNLOAD QUEUE</small>
              <b>正在本地归档</b>
            </span>
            <Zap />
          </div>
        </motion.div>
      </section>
      <div className="signals">
        <span>唯一官方版本</span>
        <b>Rust + Tauri</b>
        <i />
        <span>项目状态</span>
        <b>持续更新</b>
        <i />
        <span>代码与发行</span>
        <a href={REPO}>GitHub ↗</a>
      </div>
      <section className="intro section">
        <Reveal>
          <label>THE BETTER WAY TO KEEP</label>
          <h2>
            不是下载器的堆砌，
            <br />
            是一套完整的桌面体验。
          </h2>
        </Reveal>
        <Reveal>
          <p>
            从发现一个用户，到看完一组作品，再到保存、筛选和重新播放，better-douyin
            把每个环节放在同一条流畅路径上。
          </p>
          <button className="text-link" onClick={() => go("/docs/intro")}>
            了解它如何工作 <ArrowRight />
          </button>
        </Reveal>
      </section>
      <section className="features section">
        {features.map(([Icon, tag, title, text, image], i) => (
          <Reveal className={`feature ${i % 2 ? "reverse" : ""}`} key={title}>
            <div className="feature-copy">
              <small>
                0{i + 1} / {tag}
              </small>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <div className="shot">
              <img src={`./images/${image}`} alt={`${title}界面`} />
            </div>
          </Reveal>
        ))}
      </section>
      <section className="power section">
        <Reveal className="power-head">
          <div>
            <label>POWER WHEN YOU NEED IT</label>
            <h2>简单使用，也能深度连接。</h2>
          </div>
          <p>
            进阶能力不会挡在基础体验前面。需要时，它们随时可以把桌面端变成你的自动化中枢。
          </p>
        </Reveal>
        <div className="power-list">
          {advanced.map(([Icon, code, title, text]) => (
            <Reveal className="power-row" key={code}>
              <small>{code}</small>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="trust section">
        <Reveal>
          <ShieldCheck className="trust-icon" />
          <label>LOCAL FIRST</label>
          <h2>
            你的账号与文件，
            <br />
            首先属于你。
          </h2>
          <p>
            Cookie、配置、下载历史和本地文件保存在你的电脑上。AI 与 MCP
            能力围绕本机运行，敏感操作保持明确、可控。
          </p>
          <button className="text-link" onClick={() => go("/docs/privacy")}>
            阅读隐私与安全说明 <ArrowRight />
          </button>
        </Reveal>
        <Reveal className="terminal">
          <div>
            ●　●　●　 <span>better-douyin / status</span>
          </div>
          <pre>
            <code>
              <i>$</i> better-douyin doctor{"\n\n"}
              <b>✓</b> Local storage　　　 ready{"\n"}
              <b>✓</b> Download directory　 configured{"\n"}
              <b>✓</b> MCP transport　　　 localhost only{"\n"}
              <b>✓</b> Update channel　　　GitHub Releases
            </code>
          </pre>
        </Reveal>
      </section>
      <section className="cta">
        <Reveal>
          <label>READY WHEN YOU ARE</label>
          <h2>
            让喜欢的内容，
            <br />
            拥有一个更好的去处。
          </h2>
          <div className="actions">
            <a className="button primary" href={RELEASES}>
              <Download />
              下载 better-douyin
            </a>
            <button className="button" onClick={() => go("/docs/intro")}>
              先看看文档 <ArrowRight />
            </button>
          </div>
          <p>官方版本完全免费。请勿购买安装包、激活码或所谓会员服务。</p>
        </Reveal>
      </section>
    </main>
  );
}

function Callout({
  children,
  warn = false,
}: {
  children: ReactNode;
  warn?: boolean;
}) {
  return (
    <div className={`callout ${warn ? "warn" : ""}`}>
      <b>{warn ? "!" : "i"}</b>
      <span>{children}</span>
    </div>
  );
}
function Code({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="code">
      <code>{children}</code>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(children);
          setCopied(true);
        }}
      >
        {copied ? (
          "已复制"
        ) : (
          <>
            <Clipboard />
            复制
          </>
        )}
      </button>
    </div>
  );
}
function ReleaseLink() {
  return (
    <a className="doc-link" href={RELEASES} target="_blank" rel="noreferrer">
      <Download />
      <span>
        <b>打开 Latest Release</b>
        <small>github.com/anYuJia/better-douyin</small>
      </span>
      <ArrowRight />
    </a>
  );
}

const content: Record<
  string,
  { over: string; title: string; desc: string; body: ReactNode }
> = {
  intro: {
    over: "GETTING STARTED",
    title: "认识 better-douyin",
    desc: "一款本地优先的抖音桌面工具，从浏览到归档，让内容管理回到一条完整路径。",
    body: (
      <>
        <h2>它解决什么问题</h2>
        <p>
          better-douyin
          把用户搜索、推荐浏览、作品播放、批量下载与本地管理放进同一个桌面应用。你不需要在多个网页、脚本和文件夹之间切换。
        </p>
        <div className="doc-grid">
          <div>
            <Search />
            <b>发现内容</b>
            <span>搜索用户、浏览作品与推荐流。</span>
          </div>
          <div>
            <HardDrive />
            <b>本地归档</b>
            <span>任务队列、历史记录和文件管理。</span>
          </div>
          <div>
            <Sparkles />
            <b>扩展工作流</b>
            <span>按需启用 AI、MCP 与自动化。</span>
          </div>
        </div>
        <h2>开始之前</h2>
        <p>
          项目面向个人合法、授权、非商业的学习、研究和测试场景。使用前请了解账号安全、内容版权与平台规则。
        </p>
        <Callout>
          这是唯一官方版本。旧的多版本说明已移除，源码与发行包均以 GitHub
          仓库为准。
        </Callout>
      </>
    ),
  },
  install: {
    over: "INSTALLATION",
    title: "安装",
    desc: "从官方 Releases 获取适合你的构建，并完成第一次启动。",
    body: (
      <>
        <h2>1. 获取发行包</h2>
        <p>
          打开 GitHub
          Releases，选择最新稳定版本。具体支持平台与文件格式以当前版本的 Assets
          列表为准。
        </p>
        <ReleaseLink />
        <h2>2. 安装并启动</h2>
        <p>
          下载与你系统匹配的安装文件，按照系统提示完成安装。首次启动如遇安全提示，请确认文件来自官方仓库。
        </p>
        <Callout warn>
          不要从网盘群、二手平台或收费渠道购买安装包。项目没有官方付费版、激活码或会员解锁。
        </Callout>
        <h2>3. 保持更新</h2>
        <p>
          新版本通过 GitHub Releases 发布。升级前建议退出正在运行的下载任务。
        </p>
      </>
    ),
  },
  "first-run": {
    over: "FIRST RUN",
    title: "首次使用",
    desc: "完成登录、下载目录和基础偏好设置。",
    body: (
      <>
        <h2>登录与会话</h2>
        <p>
          按照应用内提示完成登录。登录信息用于在本机保持会话，请不要分享
          Cookie、调试日志或配置文件。
        </p>
        <h2>设置下载目录</h2>
        <p>选择空间充足、方便备份的位置。之后可以在设置中修改。</p>
        <h2>快速检查</h2>
        <ol>
          <li>搜索一个公开用户并打开主页。</li>
          <li>播放一个作品，确认媒体加载正常。</li>
          <li>添加一个下载任务，确认目录写入权限。</li>
        </ol>
      </>
    ),
  },
  download: {
    over: "GUIDE",
    title: "下载与管理",
    desc: "把作品加入队列，查看进度，并在本地重新整理。",
    body: (
      <>
        <h2>创建任务</h2>
        <p>
          在用户作品、推荐流、搜索结果或详情页使用下载入口。批量操作前先确认数量与存储空间。
        </p>
        <h2>任务队列</h2>
        <p>
          队列集中显示等待、进行中、完成与失败状态。网络中断或解析失败时，可以在任务详情中重试。
        </p>
        <h2>本地文件</h2>
        <p>
          “我的下载”会扫描配置目录并生成作品视图，你可以搜索、筛选、播放、定位或删除。
        </p>
      </>
    ),
  },
  player: {
    over: "GUIDE",
    title: "播放器",
    desc: "播放视频、图集、Live Photo 与音频内容。",
    body: (
      <>
        <h2>支持的内容形态</h2>
        <p>
          播放器根据作品类型显示相应控制，包括视频进度、音量、倍速、清晰度、图集切换以及自动连播。
        </p>
        <h2>播放问题</h2>
        <p>
          如果画面无法加载，先检查作品是否仍可访问，再确认登录状态与网络环境。
        </p>
      </>
    ),
  },
  messages: {
    over: "GUIDE",
    title: "通知与私信",
    desc: "在桌面端集中查看互动、好友与会话。",
    body: (
      <>
        <h2>通知中心</h2>
        <p>
          点赞、评论与关注等通知集中展示，可跳转到来源内容。后台刷新频率应保持合理。
        </p>
        <h2>好友与私信</h2>
        <p>
          好友列表、在线状态、历史消息与未读提醒组成桌面会话视图。发送前请确认对象与内容。
        </p>
      </>
    ),
  },
  ai: {
    over: "ADVANCED",
    title: "AI 配置",
    desc: "连接兼容服务商，并用提示词定义能力边界。",
    body: (
      <>
        <h2>准备接口信息</h2>
        <p>
          在设置中填写服务地址、API Key
          与模型名称。支持范围以应用内当前配置项为准。
        </p>
        <Code>{`Base URL: https://api.example.com/v1\nModel: your-model-name\nAPI Key: ••••••••••••`}</Code>
        <h2>提示词与安全</h2>
        <p>
          系统提示词定义角色、语气和禁止事项。先在低风险场景验证，再逐步开放写操作。
        </p>
        <Callout warn>
          API Key 会关联你的服务额度，不要出现在截图、日志或共享配置中。
        </Callout>
      </>
    ),
  },
  mcp: {
    over: "ADVANCED",
    title: "MCP",
    desc: "让兼容的 AI 客户端调用 better-douyin 的本机能力。",
    body: (
      <>
        <h2>工作方式</h2>
        <p>
          应用提供面向本机的 MCP
          服务，客户端通过本地地址发现工具。可用工具以应用内 MCP 页面为准。
        </p>
        <h2>连接步骤</h2>
        <ol>
          <li>在应用中开启 MCP 服务。</li>
          <li>复制应用显示的连接配置。</li>
          <li>添加到兼容客户端并加载工具。</li>
          <li>先运行只读查询确认连接。</li>
        </ol>
        <Callout>
          涉及关注、发送消息或删除内容的写操作，应保持人工确认。
        </Callout>
      </>
    ),
  },
  automation: {
    over: "ADVANCED",
    title: "自动化",
    desc: "用规则持续观察，但始终保留清晰的上限。",
    body: (
      <>
        <h2>创建规则</h2>
        <p>
          选择监控来源、触发条件和执行动作，然后设置运行频率、每日上限与失败处理。首次建议只记录日志。
        </p>
        <h2>观察运行日志</h2>
        <p>
          定期检查触发次数、跳过原因和错误记录。环境变化时，请暂停规则并重新验证。
        </p>
      </>
    ),
  },
  privacy: {
    over: "TRUST & SAFETY",
    title: "隐私与安全",
    desc: "了解哪些信息保存在本机，以及如何降低账号与数据风险。",
    body: (
      <>
        <h2>本地优先</h2>
        <p>
          配置、会话信息、下载历史和媒体文件主要保存在本机。启用第三方 AI
          时，发送内容受对应服务商政策约束。
        </p>
        <h2>安全建议</h2>
        <ul>
          <li>仅从官方 GitHub Releases 下载。</li>
          <li>不要分享 Cookie、API Key、配置或完整日志。</li>
          <li>为自动化设置频率与操作上限。</li>
          <li>重要文件与配置定期备份。</li>
        </ul>
        <h2>使用边界</h2>
        <p>不得用于收费分发、数据销售、账号营销、批量骚扰或绕过平台限制。</p>
      </>
    ),
  },
  troubleshooting: {
    over: "SUPPORT",
    title: "故障排查",
    desc: "从更新、会话、网络和目录权限开始定位问题。",
    body: (
      <>
        <h2>应用无法启动</h2>
        <p>确认安装包来自官方仓库并与你的系统匹配，尝试安装最新版本。</p>
        <h2>无法加载内容</h2>
        <p>
          依次检查网络、登录状态、作品可见性和当前版本。退出后重新登录可能修复过期会话。
        </p>
        <h2>下载失败</h2>
        <p>
          确认目录存在且可写，磁盘空间充足。连续失败时请保留版本号与脱敏日志。
        </p>
        <a className="doc-link" href={`${REPO}/issues`}>
          <MessageCircle />
          <span>
            <b>前往 GitHub Issues</b>
            <small>搜索问题或提交可复现报告</small>
          </span>
          <ArrowRight />
        </a>
      </>
    ),
  },
  faq: {
    over: "SUPPORT",
    title: "常见问题",
    desc: "关于费用、版本、平台与账号安全的快速回答。",
    body: (
      <div className="faq">
        <details open>
          <summary>
            软件收费吗？
            <ChevronRight />
          </summary>
          <p>不收费。项目没有官方付费版、激活码、会员或收费代下服务。</p>
        </details>
        <details>
          <summary>
            为什么不再区分 Python 与 Rust 版本？
            <ChevronRight />
          </summary>
          <p>
            当前唯一维护的产品就是 GitHub 上的 better-douyin，采用 Rust +
            Tauri。
          </p>
        </details>
        <details>
          <summary>
            支持哪些操作系统？
            <ChevronRight />
          </summary>
          <p>
            请以最新 Release
            的构建产物为准，官网不会承诺当前发行包中不存在的平台。
          </p>
        </details>
        <details>
          <summary>
            使用会导致账号风险吗？
            <ChevronRight />
          </summary>
          <p>任何第三方工具都无法承诺零风险。请遵守平台规则并控制请求频率。</p>
        </details>
      </div>
    ),
  },
};

function Docs({ section }: { section: string }) {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const active = content[section] ? section : "intro";
  const data = content[active];
  const index = pages.findIndex((p) => p[0] === active);
  const filtered = pages.filter((p) =>
    p[1].toLowerCase().includes(query.trim().toLowerCase()),
  );
  const groups = [...new Set(filtered.map((p) => p[2]))];
  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    addEventListener("keydown", shortcut);
    return () => removeEventListener("keydown", shortcut);
  }, []);
  return (
    <main className="docs">
      <aside className="sidebar">
        <div className="search">
          <Search />
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索文档"
            aria-label="搜索文档章节"
          />
          <kbd>⌘K</kbd>
        </div>
        {groups.map((g) => (
          <div className="side-group" key={g}>
            <b>{g}</b>
            {filtered
              .filter((p) => p[2] === g)
              .map((p) => (
                <button
                  key={p[0]}
                  className={p[0] === active ? "active" : ""}
                  onClick={() => {
                    setQuery("");
                    go(`/docs/${p[0]}`);
                  }}
                >
                  {p[1]}
                </button>
              ))}
          </div>
        ))}
        {filtered.length === 0 && <p className="no-results">没有匹配的章节</p>}
      </aside>
      <article>
        <div className="crumb">
          <BookOpen />
          文档 <ChevronRight /> {data.title}
        </div>
        <motion.div
          className="doc-head"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <label>{data.over}</label>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </motion.div>
        <div className="doc-body">{data.body}</div>
        <div className="pager">
          {index > 0 ? (
            <button onClick={() => go(`/docs/${pages[index - 1][0]}`)}>
              <small>上一篇</small>
              <b>← {pages[index - 1][1]}</b>
            </button>
          ) : (
            <span />
          )}
          {index < pages.length - 1 && (
            <button onClick={() => go(`/docs/${pages[index + 1][0]}`)}>
              <small>下一篇</small>
              <b>{pages[index + 1][1]} →</b>
            </button>
          )}
        </div>
      </article>
      <aside className="toc">
        <b>本页内容</b>
        <span>{data.title}</span>
        <a href={`${REPO}/issues`}>
          <Github />
          反馈问题
        </a>
      </aside>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <Brand />
      <p>一个更好的抖音桌面体验。</p>
      <div>
        <button onClick={() => go("/docs/intro")}>文档</button>
        <a href={REPO}>GitHub</a>
        <a href={`${REPO}/issues`}>反馈</a>
      </div>
      <small>
        © {new Date().getFullYear()} better-douyin · 仅供学习、研究和非商业使用
      </small>
    </footer>
  );
}
export default function App() {
  const [location, setLocation] = useState(route),
    [theme, setTheme] = useState<Theme>(
      () => (localStorage.getItem("bd-theme") as Theme) || "dark",
    );
  useEffect(() => {
    const update = () => setLocation(route());
    addEventListener("hashchange", update);
    return () => removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("bd-theme", theme);
  }, [theme]);
  useEffect(() => {
    const title =
      location.page === "docs"
        ? content[location.section]?.title || "文档"
        : "本地媒体工作台";
    document.title = `${title} · better-douyin`;
  }, [location]);
  return (
    <>
      <Header page={location.page} theme={theme} setTheme={setTheme} />
      {location.page === "home" ? (
        <>
          <Home />
          <Footer />
        </>
      ) : (
        <Docs section={location.section} />
      )}
    </>
  );
}
