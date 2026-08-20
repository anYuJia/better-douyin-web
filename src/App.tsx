import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock3,
  Download,
  ExternalLink,
  Flag,
  Github,
  Menu,
  Moon,
  Network,
  Play,
  RadioTower,
  Search,
  ShieldCheck,
  Sun,
  Target,
  X,
  Zap,
} from "lucide-react";
import {
  DOC_CONTENT as content,
  DOC_PAGES as pages,
  DOCS_VERIFIED_DATE,
  DOCS_VERSION,
  RELEASES,
  REPO,
} from "./docs";
import { BrandIcon } from "./BrandIcon";

type Theme = "dark" | "light";
type Page = "home" | "docs";

function readRoute(): { page: Page; section: string } {
  const value = window.location.hash.replace(/^#\/?/, "");
  return value.startsWith("docs")
    ? { page: "docs", section: value.split("/")[1] || "intro" }
    : { page: "home", section: "" };
}

function go(path: string) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function Brand() {
  return (
    <button
      type="button"
      className="brand"
      onClick={() => go("/")}
      aria-label="better-douyin，返回首页"
    >
      <span className="brand-mark" aria-hidden="true">
        <BrandIcon />
      </span>
      <b>better-douyin</b>
    </button>
  );
}

function Header({
  page,
  theme,
  setTheme,
}: {
  page: Page;
  theme: Theme;
  setTheme: (value: Theme) => void;
}) {
  const [open, setOpen] = useState(false);

  const navigate = (path: string) => {
    go(path);
    setOpen(false);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <Brand />
      <nav className={open ? "nav open" : "nav"} aria-label="主导航">
        <button
          type="button"
          className={page === "home" ? "active" : ""}
          aria-current={page === "home" ? "page" : undefined}
          onClick={() => navigate("/")}
        >
          产品
        </button>
        <button
          type="button"
          className={page === "docs" ? "active" : ""}
          aria-current={page === "docs" ? "page" : undefined}
          onClick={() => navigate("/docs/intro")}
        >
          文档
        </button>
        <a href={REPO} target="_blank" rel="noreferrer">
          GitHub <ExternalLink aria-hidden="true" />
        </a>
      </nav>
      <div className="header-actions">
        <button
          type="button"
          className="square"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={theme === "dark" ? "切换到亮色主题" : "切换到暗色主题"}
          title={theme === "dark" ? "切换到亮色主题" : "切换到暗色主题"}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
        <a
          className="top-download"
          href={RELEASES}
          target="_blank"
          rel="noreferrer"
        >
          <Download aria-hidden="true" />
          下载
        </a>
        <button
          type="button"
          className="square hamburger"
          onClick={() => setOpen((value) => !value)}
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
  {
    icon: Search,
    tag: "发现",
    title: "从主页到推荐流",
    text: "搜索用户、解析分享链接、浏览作品与推荐内容，把分散入口收进一个桌面工作台。",
    image: "screen-user-detail.png",
  },
  {
    icon: Download,
    tag: "归档",
    title: "下载之后，依然有序",
    text: "批量任务、实时进度、命名模板、本地扫描与文件定位，完整覆盖归档流程。",
    image: "screen-downloads.png",
  },
  {
    icon: Play,
    tag: "播放",
    title: "内容形态完整保留",
    text: "视频、图集、Live Photo、原声与 BGM，在沉浸播放器里自然衔接。",
    image: "screen-player.png",
  },
] as const;

const advanced = [
  {
    icon: Bot,
    code: "AI / 01",
    title: "智能互动",
    text: "支持 OpenAI Compatible、Anthropic Messages 与 Gemini GenerateContent，用提示词约束内容处理。",
  },
  {
    icon: Network,
    code: "MCP / 02",
    title: "连接你的 AI 工具",
    text: "通过只监听本机并带 Bearer Token 的 HTTP MCP，复用桌面端工具与任务队列。",
  },
  {
    icon: RadioTower,
    code: "AUTO / 03",
    title: "自动化监控",
    text: "为推荐流、私信、通知、评论和创作者更新设置过滤、阈值与运行上限。",
  },
] as const;

function Home({ theme }: { theme: Theme }) {
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
              <Download aria-hidden="true" />
              获取最新版
            </a>
            <button
              type="button"
              className="button"
              onClick={() => go("/docs/install")}
            >
              <BookOpen aria-hidden="true" />
              阅读安装文档
            </button>
          </div>
          <small className="hero-note">
            <Check aria-hidden="true" /> 官方免费　·　本地优先　·　非商业许可
          </small>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            key={theme}
            src={`./images/hero-workspace-${theme}.jpg`}
            alt={`better-douyin ${theme === "light" ? "亮色" : "暗色"}桌面应用工作区`}
            width="2560"
            height="1429"
            data-theme-image={theme}
            fetchPriority="high"
          />
          <div className="status">
            <i />
            <span>
              <small>DOWNLOAD QUEUE</small>
              <b>正在本地归档</b>
            </span>
            <Zap aria-hidden="true" />
          </div>
        </motion.div>
      </section>

      <div className="signals" aria-label="项目信息">
        <span>唯一官方版本</span>
        <b>Rust + Tauri</b>
        <i />
        <span>完整应用</span>
        <b>GitHub Releases</b>
        <i />
        <a href={REPO} target="_blank" rel="noreferrer">
          查看主仓库 <ExternalLink aria-hidden="true" />
        </a>
      </div>

      <section className="intro section">
        <Reveal>
          <span className="section-label">THE BETTER WAY TO KEEP</span>
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
          <button
            type="button"
            className="text-link"
            onClick={() => go("/docs/intro")}
          >
            了解它如何工作 <ArrowRight aria-hidden="true" />
          </button>
        </Reveal>
      </section>

      <section className="features section" aria-label="核心功能">
        {features.map(({ icon: Icon, tag, title, text, image }, index) => (
          <Reveal
            className={`feature ${index % 2 ? "reverse" : ""}`}
            key={title}
          >
            <div className="feature-copy">
              <small>
                0{index + 1} / {tag}
              </small>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <div className="shot">
              <img
                src={`./images/${image}`}
                alt={`${title}界面`}
                width="1200"
                height="800"
                loading="lazy"
              />
            </div>
          </Reveal>
        ))}
      </section>

      <section className="power section">
        <Reveal className="power-head">
          <div>
            <span className="section-label">POWER WHEN YOU NEED IT</span>
            <h2>简单使用，也能深度连接。</h2>
          </div>
          <p>
            进阶能力不会挡在基础体验前面。需要时，它们随时可以把桌面端变成你的自动化中枢。
          </p>
        </Reveal>
        <div className="power-list">
          {advanced.map(({ icon: Icon, code, title, text }) => (
            <Reveal className="power-row" key={code}>
              <small>{code}</small>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="trust section">
        <Reveal>
          <ShieldCheck className="trust-icon" aria-hidden="true" />
          <span className="section-label">LOCAL FIRST</span>
          <h2>
            你的账号与文件，
            <br />
            首先属于你。
          </h2>
          <p>
            Cookie、配置、下载历史和本地文件主要保存在你的电脑上。AI 与 MCP
            能力围绕本机运行，敏感操作保持明确、可控。
          </p>
          <button
            type="button"
            className="text-link"
            onClick={() => go("/docs/privacy")}
          >
            阅读隐私与安全说明 <ArrowRight aria-hidden="true" />
          </button>
        </Reveal>
        <Reveal className="terminal">
          <div className="terminal-bar">
            <span className="terminal-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>better-douyin / status</span>
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
          <span className="section-label">READY WHEN YOU ARE</span>
          <h2>
            让喜欢的内容，
            <br />
            拥有一个更好的去处。
          </h2>
          <div className="actions">
            <a
              className="button primary"
              href={RELEASES}
              target="_blank"
              rel="noreferrer"
            >
              <Download aria-hidden="true" />
              下载 better-douyin
            </a>
            <button
              type="button"
              className="button"
              onClick={() => go("/docs/intro")}
            >
              先看看文档 <ArrowRight aria-hidden="true" />
            </button>
          </div>
          <p>官方版本完全免费。请勿购买安装包、激活码或所谓会员服务。</p>
        </Reveal>
      </section>
    </main>
  );
}

interface TocHeading {
  id: string;
  label: string;
}

function Docs({ section }: { section: string }) {
  const [query, setQuery] = useState("");
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeHeading, setActiveHeading] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const active = content[section] ? section : "intro";
  const data = content[active];
  const index = pages.findIndex((page) => page.id === active);
  const pageMeta = pages[index];
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const filtered = pages.filter((page) => {
    if (!normalizedQuery) return true;
    const haystack = [
      page.label,
      page.group,
      page.summary,
      page.goal,
      page.prerequisite,
      page.outcome,
      ...page.keywords,
    ]
      .join(" ")
      .toLocaleLowerCase("zh-CN");
    return haystack.includes(normalizedQuery);
  });
  const groups = [...new Set(filtered.map((page) => page.group))];
  const allGroups = [...new Set(pages.map((page) => page.group))];

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  useEffect(() => {
    const elements = Array.from(
      articleRef.current?.querySelectorAll<HTMLHeadingElement>(
        ".doc-body h2",
      ) ?? [],
    );
    const next = elements.map((element, headingIndex) => {
      const id = `${active}-section-${headingIndex + 1}`;
      element.id = id;
      return {
        id,
        label: element.textContent?.trim() || `第 ${headingIndex + 1} 节`,
      };
    });
    setHeadings(next);
    setActiveHeading(next[0]?.id ?? "");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveHeading(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -68% 0px", threshold: [0, 1] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const button = sidebar?.querySelector<HTMLElement>(
      `[data-doc-section="${active}"]`,
    );
    if (!sidebar || !button) return;
    const target = Math.max(button.offsetTop - sidebar.clientHeight * 0.38, 0);
    sidebar.scrollTo({ top: target, behavior: "instant" });
  }, [active]);

  useEffect(() => {
    const updateProgress = () => {
      const article = articleRef.current;
      if (!article) return;
      const start = article.offsetTop;
      const distance = Math.max(article.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(
        Math.max((window.scrollY - start) / distance, 0),
        1,
      );
      setReadingProgress(progress);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [active]);

  const navigate = (id: string) => {
    setQuery("");
    go(`/docs/${id}`);
  };

  return (
    <main className="docs">
      <aside ref={sidebarRef} className="sidebar" aria-label="文档目录">
        <div className="docs-identity">
          <span>PRODUCT MANUAL</span>
          <b>使用文档</b>
          <small>
            <i /> 已核对 {DOCS_VERSION}
          </small>
        </div>
        <div className="search">
          <Search aria-hidden="true" />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索文档"
            aria-label="搜索文档章节"
          />
          <kbd>⌘K</kbd>
        </div>
        {normalizedQuery && (
          <div className="search-count" aria-live="polite">
            找到 {filtered.length} 个章节
          </div>
        )}
        {groups.map((group) => (
          <div className="side-group" key={group}>
            <b>{group}</b>
            {filtered
              .filter((page) => page.group === group)
              .map((page) => (
                <button
                  type="button"
                  key={page.id}
                  data-doc-section={page.id}
                  className={page.id === active ? "active" : ""}
                  aria-current={page.id === active ? "page" : undefined}
                  title={page.summary}
                  onClick={() => navigate(page.id)}
                >
                  {page.label}
                </button>
              ))}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="no-results">
            <Search aria-hidden="true" />
            <b>没有匹配章节</b>
            <span>尝试“安装”“MCP”或“下载”。</span>
          </div>
        )}
      </aside>

      <div className="docs-mobile-nav">
        <BookOpen aria-hidden="true" />
        <label htmlFor="mobile-doc-section">当前章节</label>
        <select
          id="mobile-doc-section"
          value={active}
          onChange={(event) => navigate(event.target.value)}
        >
          {allGroups.map((group) => (
            <optgroup label={group} key={group}>
              {pages
                .filter((page) => page.group === group)
                .map((page) => (
                  <option value={page.id} key={page.id}>
                    {page.label}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
        <ChevronRight aria-hidden="true" />
      </div>

      <article ref={articleRef}>
        <div className="doc-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${readingProgress})` }} />
        </div>
        <div className="crumb">
          <BookOpen aria-hidden="true" />
          <span>文档</span>
          <ChevronRight aria-hidden="true" />
          <span>{pageMeta.group}</span>
          <ChevronRight aria-hidden="true" />
          <span>{data.title}</span>
        </div>
        <motion.div
          className="doc-head"
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="doc-kicker">
            <span className="section-label">{data.over}</span>
            <span>{DOCS_VERSION}</span>
          </div>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <div className="doc-meta" aria-label="章节信息">
            <span>
              <Clock3 aria-hidden="true" />约 {pageMeta.reading}
            </span>
            <span>
              <CircleDot aria-hidden="true" />
              {pageMeta.level}
            </span>
            <span>
              <CheckCircle2 aria-hidden="true" />
              核对日期 {DOCS_VERIFIED_DATE}
            </span>
          </div>
        </motion.div>
        <section className="guide-brief" aria-label="本页阅读说明">
          <div>
            <Target aria-hidden="true" />
            <span>
              <small>本页目标</small>
              <b>{pageMeta.goal}</b>
            </span>
          </div>
          <div>
            <CircleDot aria-hidden="true" />
            <span>
              <small>开始前</small>
              <b>{pageMeta.prerequisite}</b>
            </span>
          </div>
          <div>
            <Flag aria-hidden="true" />
            <span>
              <small>完成标志</small>
              <b>{pageMeta.outcome}</b>
            </span>
          </div>
        </section>
        <div className="doc-body">{data.body}</div>
        <div className="doc-source-note">
          <CheckCircle2 aria-hidden="true" />
          <span>
            本页已按 {DOCS_VERSION} 的公开
            README、发行文件与当前界面配置核对。功能和平台支持仍以最新 Release
            为准。
          </span>
        </div>
        <nav className="pager" aria-label="文档翻页">
          {index > 0 ? (
            <button type="button" onClick={() => navigate(pages[index - 1].id)}>
              <small>上一篇</small>
              <b>
                <ChevronLeft aria-hidden="true" /> {pages[index - 1].label}
              </b>
            </button>
          ) : (
            <span />
          )}
          {index < pages.length - 1 && (
            <button type="button" onClick={() => navigate(pages[index + 1].id)}>
              <small>下一篇</small>
              <b>
                {pages[index + 1].label} <ChevronRight aria-hidden="true" />
              </b>
            </button>
          )}
        </nav>
      </article>

      <aside className="toc" aria-label="本页内容">
        <div className="toc-heading">
          <b>本页内容</b>
          <span>{Math.round(readingProgress * 100)}%</span>
        </div>
        {headings.map((heading) => (
          <button
            type="button"
            key={heading.id}
            className={heading.id === activeHeading ? "active" : ""}
            aria-current={heading.id === activeHeading ? "location" : undefined}
            onClick={() =>
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            {heading.label}
          </button>
        ))}
        <a href={`${REPO}/issues`} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" />
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
        <button type="button" onClick={() => go("/docs/intro")}>
          文档
        </button>
        <a href={REPO} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`${REPO}/issues`} target="_blank" rel="noreferrer">
          反馈
        </a>
      </div>
      <small>
        © {new Date().getFullYear()} better-douyin · 仅供学习、研究和非商业使用
      </small>
    </footer>
  );
}

export default function App() {
  const [location, setLocation] = useState(readRoute);
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const update = () => {
      setLocation(readRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#08090d" : "#f5f6f8");
    window.localStorage.setItem("bd-theme", theme);
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
          <Home theme={theme} />
          <Footer />
        </>
      ) : (
        <Docs section={location.section} />
      )}
    </>
  );
}
