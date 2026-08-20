import { type ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Download,
  FileCheck2,
  KeyRound,
  ListChecks,
  MonitorDown,
  MousePointer2,
  Network,
  PanelLeft,
  Play,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  TerminalSquare,
} from "lucide-react";
import {
  Callout,
  CodeBlock,
  DocImage,
  IssuesLink,
  Kbd,
  ReleaseLink,
  Steps,
} from "./docs-components";

export const REPO = "https://github.com/anYuJia/better-douyin";
export const RELEASES = `${REPO}/releases/latest`;
export const DOCS_VERSION = "v1.1.4";
export const DOCS_VERIFIED_DATE = "2026-08-20";

export interface DocPage {
  id: string;
  label: string;
  group: string;
  summary: string;
  keywords: string[];
  reading: string;
  level: "入门" | "基础" | "进阶";
  goal: string;
  prerequisite: string;
  outcome: string;
}

export interface DocEntry {
  over: string;
  title: string;
  desc: string;
  body: ReactNode;
}

export const DOC_PAGES: DocPage[] = [
  {
    id: "intro",
    label: "文档首页",
    group: "开始",
    summary: "了解产品定位、能力边界与推荐阅读路径。",
    keywords: ["介绍", "能力", "Open Shell", "发行版"],
    reading: "6 分钟",
    level: "入门",
    goal: "确认完整发行版、公开源码与文档范围，选择最适合自己的阅读路径。",
    prerequisite: "无需安装软件。",
    outcome: "知道从哪里下载、哪些能力可用，以及下一篇应该读什么。",
  },
  {
    id: "install",
    label: "下载与安装",
    group: "开始",
    summary: "为 Windows 或 macOS 选择正确的发行包。",
    keywords: ["Windows", "macOS", "安装包", "便携版", "DMG", "EXE"],
    reading: "8 分钟",
    level: "入门",
    goal: "按操作系统、处理器架构和使用方式选择正确安装包。",
    prerequisite: "能访问官方 GitHub Releases，并知道电脑的系统类型。",
    outcome: "应用安装完成或便携版已正确解压，能够从固定位置启动。",
  },
  {
    id: "verify",
    label: "校验安装包",
    group: "开始",
    summary: "使用 SHA-256 核对从 Releases 下载的文件。",
    keywords: ["checksum", "SHA256", "安全", "签名"],
    reading: "5 分钟",
    level: "入门",
    goal: "用 Release 提供的 SHA-256 摘要确认下载文件没有损坏或被替换。",
    prerequisite: "安装包与 checksums.sha256 来自同一个 Release。",
    outcome: "本机计算出的 64 位摘要与校验表完全一致。",
  },
  {
    id: "first-run",
    label: "5 分钟快速上手",
    group: "开始",
    summary: "完成登录、下载目录设置与第一次端到端验证。",
    keywords: ["首次启动", "设置", "快速开始"],
    reading: "7 分钟",
    level: "入门",
    goal: "从空白状态完成登录、浏览、播放、下载和本地定位。",
    prerequisite: "应用已安装，准备一个可正常使用的账号与可写目录。",
    outcome: "一条公开作品可播放、可下载，并能在“我的下载”中定位。",
  },
  {
    id: "interface",
    label: "界面与导航",
    group: "开始",
    summary: "认识侧边栏、命令入口、底部任务面板和设置页。",
    keywords: ["界面", "侧边栏", "导航", "底部栏", "设置", "命令"],
    reading: "6 分钟",
    level: "入门",
    goal: "理解主要区域的职责，并能从任何页面快速到达目标功能。",
    prerequisite: "至少启动过一次应用。",
    outcome: "能独立找到搜索、链接解析、任务队列、日志与设置入口。",
  },
  {
    id: "account",
    label: "账号与登录",
    group: "基础使用",
    summary: "使用内置登录、多账号切换和会话校验。",
    keywords: ["Cookie", "登录", "多账号", "切换账号", "Chrome", "Edge"],
    reading: "8 分钟",
    level: "基础",
    goal: "安全完成内置登录，理解多账号状态与会话失效后的恢复方式。",
    prerequisite: "官方端账号可正常登录，电脑已安装受支持的浏览器。",
    outcome: "头像、昵称与激活账号正确，登录状态校验通过。",
  },
  {
    id: "discover",
    label: "搜索与链接解析",
    group: "基础使用",
    summary: "通过用户信息或分享链接找到内容。",
    keywords: ["昵称", "抖音号", "UID", "短链接", "分享链接"],
    reading: "7 分钟",
    level: "基础",
    goal: "分别掌握用户搜索和单条分享链接解析两种内容入口。",
    prerequisite: "账号状态有效，目标用户或作品在官方端可访问。",
    outcome: "能打开正确的用户主页，并预览分享链接对应的作品。",
  },
  {
    id: "feeds",
    label: "推荐、点赞与收藏",
    group: "基础使用",
    summary: "浏览推荐流、点赞列表、收藏与合集。",
    keywords: ["推荐流", "精选", "点赞", "收藏", "合集"],
    reading: "6 分钟",
    level: "基础",
    goal: "理解四类内容列表的来源、刷新方式和批量操作边界。",
    prerequisite: "当前账号能在官方端看到相应列表。",
    outcome: "可以筛选并小批量加入队列，遇到空列表时知道如何排查。",
  },
  {
    id: "download",
    label: "下载任务与设置",
    group: "内容管理",
    summary: "设置质量、并发、目录与文件命名规则。",
    keywords: ["队列", "并发", "质量", "模板", "Live Photo", "SSL"],
    reading: "12 分钟",
    level: "基础",
    goal: "建立稳定、可恢复、不会产生大量重名文件的下载配置。",
    prerequisite: "下载目录可写，至少有一条公开作品可用于测试。",
    outcome: "单条和批量任务都能正确进入队列，文件结构符合预期。",
  },
  {
    id: "library",
    label: "我的下载",
    group: "内容管理",
    summary: "扫描、筛选、定位和管理本地文件。",
    keywords: ["本地文件", "作品视图", "扫描", "删除", "定位"],
    reading: "7 分钟",
    level: "基础",
    goal: "理解文件视图与作品视图，并安全完成扫描、迁移和删除。",
    prerequisite: "下载目录中已有至少一条完成的任务。",
    outcome: "能够搜索、播放、定位文件，并在迁移后重新建立索引。",
  },
  {
    id: "player",
    label: "播放器",
    group: "内容管理",
    summary: "播放视频、图集、Live Photo、原声与 BGM。",
    keywords: ["倍速", "清晰度", "自动连播", "图集", "快捷键"],
    reading: "6 分钟",
    level: "基础",
    goal: "掌握媒体切换、清晰度、自动连播和播放失败恢复。",
    prerequisite: "作品仍可访问，或本地媒体文件没有被移动。",
    outcome: "视频与图集可正常播放，并能用键盘完成常用操作。",
  },
  {
    id: "messages",
    label: "通知、好友与私信",
    group: "内容管理",
    summary: "集中处理互动通知、好友状态和私信会话。",
    keywords: ["评论", "通知", "在线状态", "历史消息", "未读"],
    reading: "9 分钟",
    level: "基础",
    goal: "区分通知、好友状态和私信数据，并在发送前完成身份与内容核对。",
    prerequisite: "账号具有对应数据访问权限，登录状态有效。",
    outcome: "能定位通知来源、同步历史消息并避免向错误会话发送内容。",
  },
  {
    id: "ai",
    label: "AI 服务配置",
    group: "进阶能力",
    summary: "配置模型协议、接口、提示词与连接测试。",
    keywords: ["OpenAI", "Anthropic", "Gemini", "API Key", "模型", "提示词"],
    reading: "12 分钟",
    level: "进阶",
    goal: "选择正确协议，配置最小权限密钥，并写出可控的提示词。",
    prerequisite: "已从模型服务商获得 Base URL、模型名和 API Key。",
    outcome: "轻量连接测试通过，生成内容符合长度、语气与安全边界。",
  },
  {
    id: "mcp",
    label: "MCP 接入",
    group: "进阶能力",
    summary: "通过本机 HTTP MCP 连接兼容的 AI 客户端。",
    keywords: ["Codex", "Claude Code", "OpenClaw", "Bearer", "Token", "39144"],
    reading: "10 分钟",
    level: "进阶",
    goal: "以只读模式把兼容客户端连接到本机 MCP 服务。",
    prerequisite: "桌面应用保持运行，客户端支持带 Header 的 HTTP MCP。",
    outcome: "客户端能发现工具并完成只读调用，服务未暴露到公网。",
  },
  {
    id: "automation",
    label: "自动化监控",
    group: "进阶能力",
    summary: "配置监控来源、过滤条件、阈值和动作上限。",
    keywords: ["规则", "关键词", "扫描间隔", "阈值", "自动评论", "日志"],
    reading: "12 分钟",
    level: "进阶",
    goal: "从只观察开始建立带过滤、间隔和上限的可控规则。",
    prerequisite: "基础功能稳定，AI 测试通过，并理解账号与平台风险。",
    outcome: "规则先只产生可审查日志，再按需逐步开放单一动作。",
  },
  {
    id: "shortcuts",
    label: "键盘快捷键",
    group: "设置与维护",
    summary: "使用全局与播放器快捷键提高操作效率。",
    keywords: ["Ctrl", "Command", "空格", "方向键", "快捷操作"],
    reading: "4 分钟",
    level: "基础",
    goal: "记住搜索、链接、设置、底部栏和播放器的高频快捷键。",
    prerequisite: "应用窗口处于前台。",
    outcome: "无需依赖鼠标即可完成核心导航与播放控制。",
  },
  {
    id: "appearance",
    label: "外观与通用设置",
    group: "设置与维护",
    summary: "配置主题、字体大小与侧边栏。",
    keywords: ["亮色", "暗色", "跟随系统", "字号", "侧边栏"],
    reading: "5 分钟",
    level: "基础",
    goal: "让主题、字号与侧边栏适合环境光和窗口宽度。",
    prerequisite: "无。",
    outcome: "长文本、侧边栏与播放器控制在常用窗口尺寸下清晰可读。",
  },
  {
    id: "updates",
    label: "升级与备份",
    group: "设置与维护",
    summary: "检查更新、设置更新代理并做好升级前备份。",
    keywords: ["新版本", "代理", "备份", "恢复", "Release"],
    reading: "8 分钟",
    level: "基础",
    goal: "在保留关键配置和本地文件的前提下安全升级或回退。",
    prerequisite: "活动任务已暂停，能够访问官方 Release。",
    outcome: "版本升级后账号、目录和模板仍正确，并通过一条测试任务。",
  },
  {
    id: "diagnostics",
    label: "运行日志与诊断",
    group: "设置与维护",
    summary: "使用底部日志、最小复现和状态信息定位问题。",
    keywords: ["日志", "诊断", "底部栏", "错误", "复现", "Ctrl J"],
    reading: "7 分钟",
    level: "基础",
    goal: "从操作日志中找到首个有效错误，并整理可复现、可脱敏的信息。",
    prerequisite: "问题可以在应用内重复触发。",
    outcome: "能够判断问题属于账号、网络、目录、内容还是第三方服务。",
  },
  {
    id: "uninstall",
    label: "卸载与数据清理",
    group: "设置与维护",
    summary: "区分应用程序、配置、缓存与下载文件，按需安全清理。",
    keywords: ["卸载", "数据", "清理", "缓存", "下载文件", "便携版"],
    reading: "6 分钟",
    level: "基础",
    goal: "卸载应用时明确保留或删除哪些本地数据。",
    prerequisite: "重要媒体、模板与设置已完成备份。",
    outcome: "应用已移除，下载目录和账号会话按你的选择得到保留或清理。",
  },
  {
    id: "privacy",
    label: "隐私、安全与许可",
    group: "安全与帮助",
    summary: "理解本地数据、第三方服务和非商业许可边界。",
    keywords: ["隐私", "本地优先", "账号风险", "非商业", "License"],
    reading: "10 分钟",
    level: "基础",
    goal: "理解本地优先的真实边界，以及账号、AI、MCP 和许可风险。",
    prerequisite: "建议在启用 AI、MCP 或自动化之前阅读。",
    outcome: "知道哪些数据会离开电脑、哪些凭据不能分享、哪些用途被禁止。",
  },
  {
    id: "troubleshooting",
    label: "故障排查",
    group: "安全与帮助",
    summary: "按启动、登录、加载、下载和更新分类定位问题。",
    keywords: ["无法启动", "下载失败", "黑屏", "网络", "日志", "Issue"],
    reading: "15 分钟",
    level: "基础",
    goal: "按症状走完最短排查路径，避免同时修改多个变量。",
    prerequisite: "准备系统版本、应用版本、安装方式和脱敏错误文本。",
    outcome: "问题得到解决，或形成足够清楚且不含敏感信息的 Issue。",
  },
  {
    id: "faq",
    label: "常见问题",
    group: "安全与帮助",
    summary: "快速了解费用、平台、源码、风险和反馈渠道。",
    keywords: ["收费", "开源", "Linux", "Intel", "激活码", "反馈"],
    reading: "8 分钟",
    level: "入门",
    goal: "快速确认费用、平台、源码、更新、账号和进阶能力边界。",
    prerequisite: "无。",
    outcome: "常见疑问得到直接回答，并能跳转到对应详细章节。",
  },
];

export const DOC_CONTENT: Record<string, DocEntry> = {
  intro: {
    over: "DOCUMENTATION",
    title: "better-douyin 使用文档",
    desc: "从正确下载安装包开始，逐步掌握内容浏览、本地归档、AI、MCP 与自动化能力。",
    body: (
      <>
        <div className="doc-lead">
          <span>完整发行版</span>
          <strong>Rust + Tauri 桌面应用</strong>
          <p>
            目前唯一维护的发行版，安装包、校验文件和更新 metadata 均发布在主仓库
            Releases。
          </p>
        </div>

        <h2>先确认你需要哪一种</h2>
        <div className="doc-grid">
          <a href="#/docs/install">
            <MonitorDown />
            <b>直接使用软件</b>
            <span>普通用户从 Releases 下载完整桌面应用，不需要自行编译。</span>
            <ArrowRight />
          </a>
          <a href="#/docs/first-run">
            <CheckCircle2 />
            <b>完成首次配置</b>
            <span>登录账号、选择下载目录，再用一条公开作品验证环境。</span>
            <ArrowRight />
          </a>
          <a href="#/docs/mcp">
            <Network />
            <b>连接进阶工作流</b>
            <span>在基础功能稳定后，再按需启用 AI、MCP 与自动化。</span>
            <ArrowRight />
          </a>
        </div>

        <h2>产品能力地图</h2>
        <div className="capability-map">
          <div>
            <Search />
            <strong>发现</strong>
            <span>用户搜索、分享链接、推荐流、点赞与收藏。</span>
          </div>
          <div>
            <Download />
            <strong>归档</strong>
            <span>批量任务、质量选择、命名模板与本地目录。</span>
          </div>
          <div>
            <Play />
            <strong>播放</strong>
            <span>视频、图集、Live Photo、原声与 BGM。</span>
          </div>
          <div>
            <Bot />
            <strong>扩展</strong>
            <span>AI 互动、本机 MCP、规则监控与调用日志。</span>
          </div>
        </div>

        <h2>发行版与公开源码的区别</h2>
        <p>
          GitHub Releases 提供完整可用的桌面应用。公开仓库中的源码是可运行的{" "}
          <strong>Open Shell</strong>，保留 React UI、组件、mock bridge、mock
          backend 和协作边界，不包含真实平台连接器、签名、Cookie
          处理、下载解析或发布密钥。
        </p>
        <Callout kind="warning" title="不要把公开 Demo 当作完整应用">
          <p>
            需要正常使用完整功能，请下载 Release。公开源码适合查看
            UI、改进体验和使用模拟数据进行开发。
          </p>
        </Callout>

        <h2>推荐阅读顺序</h2>
        <Steps
          items={[
            {
              title: "下载安装",
              text: <>根据系统与架构选择发行包，并完成 SHA-256 校验。</>,
            },
            {
              title: "首次配置",
              text: <>使用内置登录，设置下载目录并完成基础连通性检查。</>,
            },
            {
              title: "掌握核心流程",
              text: <>依次阅读搜索、推荐、下载任务、我的下载和播放器。</>,
            },
            {
              title: "谨慎启用进阶能力",
              text: <>先配置 AI，再连接 MCP，最后小范围验证自动化规则。</>,
            },
          ]}
        />
        <Callout title="唯一官方来源">
          <p>
            旧仓库和旧版本说明已经迁移。后续发行包以{" "}
            <a href={REPO}>anYuJia/better-douyin</a> 为准。
          </p>
        </Callout>
      </>
    ),
  },

  install: {
    over: "INSTALLATION",
    title: "下载与安装",
    desc: "先识别系统、处理器架构和发行包类型，再从官方 Releases 完成安装。",
    body: (
      <>
        <h2>当前发行平台</h2>
        <p>
          发行文件会随版本调整。以下依据当前主仓库 Release
          结构整理，下载时仍应以 Latest Release 的 Assets 为准。
        </p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>平台</th>
                <th>架构</th>
                <th>推荐文件</th>
                <th>适用场景</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Windows</td>
                <td>x64</td>
                <td>
                  <code>*-windows-x64-installer.exe</code>
                </td>
                <td>推荐，大多数用户直接安装。</td>
              </tr>
              <tr>
                <td>Windows</td>
                <td>x64</td>
                <td>
                  <code>*-windows-x64-portable.zip</code>
                </td>
                <td>无需安装，解压到固定目录使用。</td>
              </tr>
              <tr>
                <td>macOS</td>
                <td>Apple Silicon arm64</td>
                <td>
                  <code>*-macos-arm64.dmg</code>
                </td>
                <td>适用于 M1、M2、M3、M4 等 Apple 芯片。</td>
              </tr>
              <tr>
                <td>macOS</td>
                <td>Apple Silicon arm64</td>
                <td>
                  <code>*-macos-arm64-portable.zip</code>
                </td>
                <td>便携压缩包，适合手动管理应用位置。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout kind="warning" title="不要下载错文件">
          <p>
            <code>*.sig</code>、<code>latest.json</code>、
            <code>windows.json</code>、<code>darwin.json</code> 和 updater
            文件主要供更新机制使用，不是普通用户的安装入口。
          </p>
        </Callout>
        <ReleaseLink />

        <h2>Windows 安装</h2>
        <Steps
          items={[
            {
              title: "确认系统架构",
              text: (
                <>
                  打开“设置 → 系统 → 系统信息”，确认系统类型为 64
                  位操作系统、x64 处理器。
                </>
              ),
            },
            {
              title: "下载安装器",
              text: (
                <>
                  从 Latest Release 下载名称以{" "}
                  <code>windows-x64-installer.exe</code> 结尾的文件。
                </>
              ),
            },
            {
              title: "核对文件",
              text: (
                <>
                  下载同一 Release 中的 <code>checksums.sha256</code>
                  ，按下一篇文档完成 SHA-256 校验。
                </>
              ),
            },
            {
              title: "完成安装",
              text: (
                <>
                  退出旧版本与正在运行的下载任务，运行安装器并按提示完成安装。
                </>
              ),
            },
          ]}
        />

        <h3>使用 Windows 便携版</h3>
        <p>
          下载 <code>windows-x64-portable.zip</code>{" "}
          后完整解压到固定目录，再运行其中的应用。不要直接在压缩包预览窗口内启动，也不要随意移动单个文件。
        </p>

        <h2>macOS 安装</h2>
        <Steps
          items={[
            {
              title: "确认芯片",
              text: (
                <>
                  点击“ → 关于本机”，确认芯片显示 Apple M 系列。当前 Release
                  文件名中的 <code>arm64</code> 对应 Apple Silicon。
                </>
              ),
            },
            {
              title: "下载 DMG",
              text: (
                <>
                  从 Latest Release 下载名称以 <code>macos-arm64.dmg</code>{" "}
                  结尾的文件。
                </>
              ),
            },
            {
              title: "拖入应用程序",
              text: (
                <>
                  打开 DMG，将 better-douyin
                  拖入“应用程序”文件夹，再从应用程序目录启动。
                </>
              ),
            },
            {
              title: "处理首次打开提示",
              text: (
                <>
                  若系统阻止打开，请先确认来源与 checksum，然后在 Finder
                  中右键应用选择“打开”，或前往“隐私与安全性”确认。
                </>
              ),
            },
          ]}
        />
        <Callout title="macOS Intel 与 Linux">
          <p>
            当前 Release 列表没有 macOS x64/Intel 或 Linux 安装包。不要把 arm64
            包用于 Intel Mac，也不要从第三方来源寻找所谓兼容版。
          </p>
        </Callout>

        <h2>升级已有版本</h2>
        <ul className="check-list">
          <li>等待活动下载任务结束，或先暂停任务。</li>
          <li>记录当前下载目录和重要自定义模板。</li>
          <li>完全退出应用后再安装新版本。</li>
          <li>启动后检查版本号、账号状态和下载目录。</li>
        </ul>
      </>
    ),
  },

  verify: {
    over: "INTEGRITY",
    title: "校验安装包",
    desc: "Release 同时提供 checksums.sha256 与 checksums.json，用于确认文件完整且未被第三方替换。",
    body: (
      <>
        <h2>为什么要校验</h2>
        <p>
          SHA-256
          可以确认你下载的文件与发布者生成校验表时的文件完全一致。尤其是在浏览器提示重复下载、使用下载工具、经过代理或从本地备份恢复时，建议执行校验。
        </p>

        <h2>准备文件</h2>
        <ol>
          <li>从同一个 Release 下载目标安装包。</li>
          <li>
            下载该 Release 的 <code>checksums.sha256</code>。
          </li>
          <li>将两者放在同一个目录，方便比对。</li>
        </ol>

        <h2>Windows PowerShell</h2>
        <CodeBlock label="PowerShell">{`Get-FileHash .\\better-douyin-*.exe -Algorithm SHA256`}</CodeBlock>
        <p>
          复制输出中的 Hash，在 <code>checksums.sha256</code>{" "}
          中查找对应文件名。字母大小写不影响结果，但所有字符必须一致。
        </p>

        <h2>macOS Terminal</h2>
        <CodeBlock label="Terminal">{`shasum -a 256 better-douyin-*.dmg`}</CodeBlock>
        <p>
          将输出的 64 位摘要与 <code>checksums.sha256</code>{" "}
          中同名文件的摘要逐字比对。
        </p>

        <h2>结果不一致怎么办</h2>
        <Steps
          items={[
            {
              title: "不要运行文件",
              text: <>立即停止安装，不要尝试忽略差异。</>,
            },
            {
              title: "删除并重新下载",
              text: (
                <>清除浏览器缓存或换一个稳定网络，再从官方 Release 重新下载。</>
              ),
            },
            {
              title: "确认版本一致",
              text: <>安装包与校验文件必须来自同一个 tag，不能跨版本比对。</>,
            },
            {
              title: "仍然不一致",
              text: (
                <>
                  保留文件名与 Release 链接，在 GitHub Issues
                  报告，不要上传可疑二进制文件。
                </>
              ),
            },
          ]}
        />
        <Callout kind="tip" title="校验成功的含义">
          <p>
            校验成功能证明文件与 Release
            校验表一致，但不能替代账号安全、系统权限和合法使用方面的判断。
          </p>
        </Callout>
      </>
    ),
  },

  "first-run": {
    over: "FIRST RUN",
    title: "5 分钟快速上手",
    desc: "先跑通一条完整路径，再逐项调整画质、模板和进阶能力。",
    body: (
      <>
        <h2>开始前准备</h2>
        <ul className="check-list">
          <li>一个在官方端可以正常访问公开作品的账号。</li>
          <li>一个至少保留数 GB 空间、当前用户拥有写入权限的本地目录。</li>
          <li>
            一条可以公开播放的普通视频，用于排除图集、Live Photo 和权限差异。
          </li>
          <li>先关闭代理切换、AI 自动发送、MCP 写操作和自动化监控。</li>
        </ul>

        <h2>完成第一次端到端任务</h2>
        <Steps
          items={[
            {
              title: "第 1 分钟：确认当前版本",
              text: (
                <>
                  打开“设置 → 关于更新”，确认应用来自官方
                  Release。首次使用不需要立即调整高级设置。
                </>
              ),
            },
            {
              title: "第 2 分钟：完成账号登录",
              text: (
                <>
                  打开“设置 →
                  账号管理”，选择浏览器类型并使用内置窗口登录。回到应用后核对头像、昵称和当前账号标记。
                </>
              ),
            },
            {
              title: "第 3 分钟：选择下载目录",
              text: (
                <>
                  在“设置 → 下载配置”选择稳定目录，保留自动质量、3 个并发和 SSL
                  证书校验。
                </>
              ),
            },
            {
              title: "第 4 分钟：搜索并播放",
              text: (
                <>
                  按 <Kbd>⌘/Ctrl K</Kbd>{" "}
                  搜索一个公开用户，打开用户主页，选择一条普通视频完成播放。
                </>
              ),
            },
            {
              title: "第 5 分钟：下载并定位",
              text: (
                <>
                  把同一作品加入队列，展开右下角进度面板；完成后进入“我的下载”，点击定位到文件。
                </>
              ),
            },
          ]}
        />

        <Callout kind="tip" title="为什么只测试一条普通视频">
          <p>
            这样可以把变量降到最低。普通视频成功后，再分别测试图集、Live
            Photo、批量下载、音频和不同质量。
          </p>
        </Callout>

        <h2>推荐的下载设置</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>设置</th>
                <th>首次使用建议</th>
                <th>原因</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>下载质量</td>
                <td>自动</td>
                <td>先确认播放与下载链路，再按需要固定清晰度。</td>
              </tr>
              <tr>
                <td>并发数</td>
                <td>3 个</td>
                <td>应用内标记为推荐值，兼顾速度与稳定性。</td>
              </tr>
              <tr>
                <td>按目录归档</td>
                <td>开启</td>
                <td>按作者整理，后续扫描和备份更容易。</td>
              </tr>
              <tr>
                <td>SSL 证书校验</td>
                <td>开启</td>
                <td>避免在不可信链路中忽略证书异常。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>判断首次配置是否成功</h2>
        <ul className="check-list">
          <li>侧边栏账号头像与昵称正确，账号没有显示“已失效”。</li>
          <li>公开用户主页、作品封面与播放器能够加载。</li>
          <li>下载队列能从等待进入完成，没有目录权限错误。</li>
          <li>“我的下载”能扫描到刚完成的文件并定位到本地目录。</li>
        </ul>
        <Callout kind="warning" title="先不要开启自动写操作">
          <p>
            AI 自动发送、自动点赞、自动收藏、MCP
            写操作和持续监控都应在基础流程稳定后逐项测试。
          </p>
        </Callout>

        <h2>接下来怎么读</h2>
        <div className="doc-grid">
          <a href="#/docs/interface">
            <PanelLeft />
            <b>先认识界面</b>
            <span>了解侧边栏、命令入口、任务面板和日志。</span>
            <ArrowRight />
          </a>
          <a href="#/docs/download">
            <SlidersHorizontal />
            <b>再调整下载</b>
            <span>设置质量、并发、目录结构与命名模板。</span>
            <ArrowRight />
          </a>
          <a href="#/docs/troubleshooting">
            <ListChecks />
            <b>遇到问题</b>
            <span>按最小复现路径定位账号、网络或目录错误。</span>
            <ArrowRight />
          </a>
        </div>
      </>
    ),
  },

  interface: {
    over: "INTERFACE TOUR",
    title: "界面与导航",
    desc: "先理解页面分工，再用侧边栏、命令入口和底部面板快速移动。",
    body: (
      <>
        <h2>界面由四个区域组成</h2>
        <div className="capability-map">
          <div>
            <PanelLeft />
            <strong>左侧导航</strong>
            <span>
              切换首页、搜索、用户主页、推荐、下载、互动、监控与设置。
            </span>
          </div>
          <div>
            <MousePointer2 />
            <strong>主工作区</strong>
            <span>显示当前内容列表、详情页、播放器或设置内容。</span>
          </div>
          <div>
            <TerminalSquare />
            <strong>底部任务面板</strong>
            <span>查看下载进度与最近运行日志，也可快速打开下载目录。</span>
          </div>
          <div>
            <Settings2 />
            <strong>设置中心</strong>
            <span>管理账号、下载、外观、AI、MCP 与应用更新。</span>
          </div>
        </div>
        <DocImage
          src="screen-user-detail.png"
          alt="better-douyin 用户主页与左侧导航"
          caption="左侧保持导航与账号入口，右侧主工作区承载当前任务。"
        />

        <h2>左侧导航逐项说明</h2>
        <div className="table-scroll wide">
          <table>
            <thead>
              <tr>
                <th>入口</th>
                <th>主要用途</th>
                <th>何时使用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>首页</td>
                <td>查看快捷入口和本地下载概览。</td>
                <td>刚启动应用或不知道从哪里开始时。</td>
              </tr>
              <tr>
                <td>搜索</td>
                <td>按昵称、抖音号或 UID 查找用户。</td>
                <td>需要浏览某位创作者的资料与作品时。</td>
              </tr>
              <tr>
                <td>用户主页</td>
                <td>保留当前打开的用户详情与作品列表。</td>
                <td>从搜索结果进入创作者主页后。</td>
              </tr>
              <tr>
                <td>推荐视频</td>
                <td>浏览精选或推荐内容。</td>
                <td>需要连续发现、播放或小批量下载时。</td>
              </tr>
              <tr>
                <td>我的下载</td>
                <td>管理任务记录与本地媒体。</td>
                <td>下载完成后搜索、播放、定位或删除文件。</td>
              </tr>
              <tr>
                <td>点赞 / 收藏</td>
                <td>读取当前账号可见的点赞、收藏与合集。</td>
                <td>整理官方端已经标记过的内容。</td>
              </tr>
              <tr>
                <td>通知 / 好友</td>
                <td>查看互动来源、好友状态与私信会话。</td>
                <td>处理评论、未读消息和会话时。</td>
              </tr>
              <tr>
                <td>监控</td>
                <td>配置和观察自动化规则。</td>
                <td>基础使用稳定后，小范围验证进阶流程。</td>
              </tr>
              <tr>
                <td>设置</td>
                <td>进入账号、下载、外观、AI、MCP 和更新页。</td>
                <td>需要改变全局行为或检查版本时。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>两个高频命令入口</h2>
        <div className="do-dont">
          <div>
            <strong>
              <Kbd>⌘/Ctrl K</Kbd> 搜索用户
            </strong>
            <ul>
              <li>适合昵称、抖音号与 UID。</li>
              <li>保留最近搜索，便于回到常用用户。</li>
              <li>搜索结果进入用户主页。</li>
            </ul>
          </div>
          <div>
            <strong>
              <Kbd>⌘/Ctrl L</Kbd> 解析链接
            </strong>
            <ul>
              <li>适合分享文本、短链接和完整 URL。</li>
              <li>用于直接预览一条作品。</li>
              <li>下载前先核对作者和内容类型。</li>
            </ul>
          </div>
        </div>

        <h2>底部任务面板</h2>
        <p>
          右下角面板有“进度”和“日志”两个标签。进度页显示活动任务及暂停、恢复、取消、定位等操作；日志页显示最近的运行消息，最多保留并展示最近一段记录。点击文件夹按钮可直接打开当前下载目录。
        </p>
        <Steps
          items={[
            {
              title: "展开面板",
              text: (
                <>
                  点击右下角面板，或按 <Kbd>⌘/Ctrl J</Kbd>。
                </>
              ),
            },
            {
              title: "选择进度",
              text: (
                <>
                  查看等待、下载中、暂停、失败和完成任务；先处理最早出现的失败。
                </>
              ),
            },
            {
              title: "选择日志",
              text: (
                <>重做一次问题操作，按时间顺序找到第一条 warning 或 error。</>
              ),
            },
            {
              title: "完成后收起",
              text: (
                <>点击面板外部或再次使用快捷键，主工作区不会因此切换页面。</>
              ),
            },
          ]}
        />

        <h2>设置中心的六个标签</h2>
        <ul className="check-list">
          <li>
            <strong>账号管理：</strong>登录、多账号切换、重新登录和账号删除。
          </li>
          <li>
            <strong>下载配置：</strong>目录、质量、Live Photo、并发、模板与
            SSL。
          </li>
          <li>
            <strong>外观偏好：</strong>主题和字体大小。
          </li>
          <li>
            <strong>AI 互动：</strong>服务协议、模型、提示词、测试和自动动作。
          </li>
          <li>
            <strong>AI 工具接入：</strong>本机 MCP、Token、权限与调用日志。
          </li>
          <li>
            <strong>关于更新：</strong>版本、检查更新、下载安装和更新代理。
          </li>
        </ul>
        <Callout title="设置会自动保存">
          <p>
            设置页会提示“修改将自动保存并立即生效”。一次只改一个变量，等待成功提示后再继续，排障会更容易。
          </p>
        </Callout>
      </>
    ),
  },

  account: {
    over: "ACCOUNT",
    title: "账号与登录",
    desc: "管理内置登录、账号有效状态、多账号切换和手动 Cookie 输入。",
    body: (
      <>
        <h2>推荐：使用内置登录</h2>
        <p>
          进入“设置 → 账号 → 登录账号”，选择 Chrome、Edge 或 Chromium
          浏览器类型，然后点击“打开内置窗口登录”。应用会显示启动、等待、成功、失败或取消状态。
        </p>
        <Steps
          items={[
            {
              title: "选择浏览器类型",
              text: (
                <>选择你日常使用且已正确安装的 Chrome、Edge 或 Chromium。</>
              ),
            },
            {
              title: "打开登录窗口",
              text: (
                <>
                  在独立窗口内完成扫码或网页登录，不要把验证码或会话信息发送给他人。
                </>
              ),
            },
            {
              title: "等待账号写入",
              text: (
                <>回到设置页，确认账号出现在“当前账号”列表并标记为当前激活。</>
              ),
            },
          ]}
        />

        <h2>多账号管理</h2>
        <p>
          账号列表会显示当前激活和已失效状态。可以切换有效账号、对失效账号重新登录，或注销账号并清除该账号在应用内保存的
          Cookie。
        </p>
        <Callout title="切换后的检查">
          <p>
            切换账号后，先刷新点赞、收藏、通知和好友页面，确认看到的是目标账号的数据，再执行下载或互动操作。
          </p>
        </Callout>

        <h2>手动录入 Cookie</h2>
        <p>
          应用提供高级入口，可粘贴 Cookie 并校验必要的 <code>sessionid</code>{" "}
          参数。普通用户优先使用内置登录，本文不提供提取或绕过登录的操作步骤。
        </p>
        <Callout kind="warning" title="Cookie 等同于敏感凭据">
          <ul>
            <li>不要发到群聊、Issue、截图、录屏或第三方网站。</li>
            <li>不要使用来源不明的 Cookie，也不要替他人保管。</li>
            <li>账号异常时先在官方平台修改密码并使旧会话失效。</li>
          </ul>
        </Callout>

        <h2>账号显示已失效</h2>
        <ol>
          <li>确认官方客户端或网页端仍可正常登录。</li>
          <li>在账号列表点击“重新登录”。</li>
          <li>登录成功后重新打开目标页面。</li>
          <li>如果频繁失效，暂停自动化并降低操作频率。</li>
        </ol>
      </>
    ),
  },

  discover: {
    over: "DISCOVER",
    title: "搜索与链接解析",
    desc: "用用户信息打开创作者主页，或粘贴分享链接直接解析单条作品。",
    body: (
      <>
        <h2>搜索用户</h2>
        <p>
          使用侧边栏“搜索”或按 <Kbd>⌘/Ctrl K</Kbd>，可按昵称、抖音号或 UID
          查找用户。搜索结果打开后可以查看用户资料、作品列表、粉丝、关注与获赞等信息。
        </p>
        <DocImage
          src="screen-user-detail.png"
          alt="用户主页与作品列表"
          caption="用户主页集中显示资料、作品和下载入口。"
        />

        <h3>搜索不到用户时</h3>
        <ul>
          <li>优先使用完整抖音号或 UID，昵称可能重复。</li>
          <li>移除昵称前后的空格、@ 符号和无关描述。</li>
          <li>确认账号仍然公开且当前登录状态有效。</li>
          <li>短时间内连续搜索失败时，暂停后再试。</li>
        </ul>

        <h2>解析分享链接</h2>
        <p>
          按 <Kbd>⌘/Ctrl L</Kbd>{" "}
          打开链接输入页。支持粘贴分享文本中的短链接或完整作品
          URL，用于解析单条视频、图集和部分 Live Photo 内容。
        </p>
        <Steps
          items={[
            {
              title: "复制官方分享内容",
              text: <>从官方应用或网页复制分享链接，不要使用第三方跳转页。</>,
            },
            {
              title: "粘贴并解析",
              text: <>应用会识别文本中的链接并显示作品摘要。</>,
            },
            {
              title: "先预览再下载",
              text: <>确认作者、封面与内容类型正确，避免保存错作品。</>,
            },
          ]}
        />
        <Callout title="链接能打开但解析失败">
          <p>
            可能是作品权限、短链接过期、登录状态或平台页面变化。先在官方端确认作品仍可访问，再查看故障排查。
          </p>
        </Callout>
      </>
    ),
  },

  feeds: {
    over: "BROWSE",
    title: "推荐、点赞与收藏",
    desc: "在统一界面浏览推荐内容、账号点赞、收藏视频与收藏合集。",
    body: (
      <>
        <h2>推荐视频</h2>
        <p>
          推荐页支持精选与推荐切换、滚轮浏览、快速播放、一键下载和批量下载。先用播放确认内容，再把需要保留的作品加入队列。
        </p>
        <DocImage
          src="screen-recommended.png"
          alt="推荐视频流"
          caption="推荐流提供卡片预览、播放和下载入口。"
        />

        <h2>点赞视频</h2>
        <p>
          点赞页面读取当前激活账号可见的点赞列表。切换账号后应重新刷新。如果列表突然为空，先检查账号状态和作品可见性，不要立即反复请求。
        </p>

        <h2>收藏与合集</h2>
        <p>
          收藏页支持收藏视频、收藏合集以及合集内作品。批量下载合集前，建议确认目标目录、命名模板和预计占用空间。
        </p>

        <h2>批量操作建议</h2>
        <div className="do-dont">
          <div>
            <strong>建议</strong>
            <ul>
              <li>先筛选，再小批量加入队列。</li>
              <li>观察失败率和磁盘空间。</li>
              <li>使用作者或合集目录归档。</li>
            </ul>
          </div>
          <div>
            <strong>避免</strong>
            <ul>
              <li>短时间反复刷新多个列表。</li>
              <li>一次性创建超大任务。</li>
              <li>把批量操作用于营销或数据销售。</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  download: {
    over: "DOWNLOADS",
    title: "下载任务与设置",
    desc: "控制下载来源、任务队列、质量、并发、目录结构与文件命名。",
    body: (
      <>
        <h2>可创建任务的位置</h2>
        <p>
          单条作品、用户作品、搜索结果、推荐流、点赞列表、收藏列表和收藏合集都可以进入下载队列。任务创建前会沿用当前下载设置。
        </p>

        <h2>任务状态与操作</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>状态</th>
                <th>含义</th>
                <th>可采取的操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>等待</td>
                <td>任务已入队，等待并发槽位。</td>
                <td>继续等待或取消。</td>
              </tr>
              <tr>
                <td>下载中</td>
                <td>正在写入目标目录并更新进度。</td>
                <td>查看速度与日志，必要时暂停。</td>
              </tr>
              <tr>
                <td>已暂停</td>
                <td>暂时停止处理。</td>
                <td>恢复或取消。</td>
              </tr>
              <tr>
                <td>失败</td>
                <td>网络、权限、作品状态或媒体请求异常。</td>
                <td>查看提示，修复原因后重试。</td>
              </tr>
              <tr>
                <td>完成</td>
                <td>文件已保存并写入下载记录。</td>
                <td>播放、定位或在“我的下载”管理。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <DocImage
          src="screen-downloads.png"
          alt="下载队列与本地文件"
          caption="任务队列、下载记录和本地扫描位于同一个页面。"
        />

        <h2>质量与并发</h2>
        <p>
          质量可选自动、最高质量、H.264 兼容优先、4K、2K、1080P、720P、480P
          和最小体积。内容源不一定提供每一种规格，选择目标规格不代表所有作品都能得到对应清晰度。
        </p>
        <p>
          并发可选 1、2、3、4、5、6、8、10，其中 3
          个在应用中标记为推荐值。网络不稳定、磁盘较慢或失败率升高时，应降低并发。
        </p>

        <h2>目录与命名模板</h2>
        <p>
          开启“按目录归档”后可使用作者目录规则。文件名和目录模板支持以下变量：
        </p>
        <div className="token-list">
          <code>
            {"{title}"}
            <span>标题</span>
          </code>
          <code>
            {"{aweme_id}"}
            <span>作品 ID</span>
          </code>
          <code>
            {"{author}"}
            <span>作者</span>
          </code>
          <code>
            {"{date}"}
            <span>日期</span>
          </code>
          <code>
            {"{time}"}
            <span>时间</span>
          </code>
          <code>
            {"{media_type}"}
            <span>媒体类型</span>
          </code>
        </div>
        <CodeBlock label="推荐文件名模板">
          {"{author}_{title}_{aweme_id}"}
        </CodeBlock>
        <Callout kind="tip" title="避免重名">
          <p>
            模板中保留 <code>{"{aweme_id}"}</code>{" "}
            最稳妥。只使用标题时，应用会尝试自动补
            ID，但明确写入模板更便于迁移与核对。
          </p>
        </Callout>

        <h2>Live Photo 与音频</h2>
        <p>
          实况图可以分别选择保存视频和图片。发行版还支持保存视频原声或
          BGM，实际可用内容取决于作品本身。
        </p>

        <h2>SSL 证书校验</h2>
        <p>
          默认保持“使用系统证书校验”。只有在你完全理解网络环境和风险时才考虑忽略证书错误，并在排障完成后立即恢复。
        </p>
        <Callout kind="warning" title="忽略证书错误会降低连接安全性">
          <p>
            不要把关闭 SSL
            校验当作通用下载修复方法。优先检查系统时间、代理、证书软件和网络环境。
          </p>
        </Callout>
      </>
    ),
  },

  library: {
    over: "LOCAL LIBRARY",
    title: "我的下载",
    desc: "让下载完成后的内容保持可查找、可播放、可定位和可备份。",
    body: (
      <>
        <h2>文件视图与作品视图</h2>
        <p>
          “我的下载”提供文件视图和作品视图。文件视图接近磁盘结构，适合核对目录；作品视图根据下载记录与媒体信息组织内容，适合浏览。
        </p>

        <h2>常用操作</h2>
        <ul className="check-list">
          <li>按关键词搜索已下载内容。</li>
          <li>使用类型、作者或状态筛选。</li>
          <li>直接打开播放器查看本地媒体。</li>
          <li>定位到系统文件管理器中的实际文件。</li>
          <li>删除单个文件，或按确认提示处理目录。</li>
        </ul>

        <h2>目录同步</h2>
        <p>
          当你在系统文件管理器中移动或删除内容后，可以重新扫描下载目录。扫描只应针对你明确选择的目录，避免把过大的通用磁盘根目录设为下载目录。
        </p>

        <h2>更换下载目录</h2>
        <Steps
          items={[
            { title: "暂停任务", text: <>确保没有任务正在向旧目录写入。</> },
            {
              title: "备份旧目录",
              text: <>保留完整目录结构，不要只复制单个媒体文件。</>,
            },
            {
              title: "修改设置",
              text: <>在下载设置中选择新目录，新任务会写入新位置。</>,
            },
            {
              title: "手动迁移并扫描",
              text: (
                <>如需迁移旧文件，使用系统文件管理器复制完成后再扫描核对。</>
              ),
            },
          ]}
        />
        <Callout kind="warning" title="删除操作不可替代备份">
          <p>
            删除前确认选择的是文件还是目录，并先在系统文件管理器核对路径。重要内容请保留独立备份。
          </p>
        </Callout>
      </>
    ),
  },

  player: {
    over: "PLAYER",
    title: "播放器",
    desc: "统一播放视频、图集、Live Photo、原声和 BGM，并在内容之间快速切换。",
    body: (
      <>
        <h2>播放器能力</h2>
        <p>
          沉浸式播放器提供进度、音量、倍速、清晰度、自动播放下一条、失败重试和媒体切换。作品支持时，还可以查看评论、点赞、收藏、分享或生成评论草稿。
        </p>
        <DocImage
          src="screen-player.png"
          alt="沉浸式播放器"
          caption="播放器把媒体、作品信息和互动入口放在同一视图。"
        />

        <h2>播放器快捷键</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>按键</th>
                <th>作用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Kbd>Space</Kbd>
                </td>
                <td>播放或暂停。</td>
              </tr>
              <tr>
                <td>
                  <Kbd>↑</Kbd> 或 <Kbd>K</Kbd>
                </td>
                <td>上一条作品。</td>
              </tr>
              <tr>
                <td>
                  <Kbd>↓</Kbd> 或 <Kbd>J</Kbd>
                </td>
                <td>下一条作品。</td>
              </tr>
              <tr>
                <td>
                  <Kbd>←</Kbd>
                </td>
                <td>上一个媒体项，例如图集上一张。</td>
              </tr>
              <tr>
                <td>
                  <Kbd>→</Kbd>
                </td>
                <td>下一个媒体项，例如图集下一张。</td>
              </tr>
              <tr>
                <td>
                  <Kbd>Esc</Kbd>
                </td>
                <td>关闭播放器。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>清晰度与播放失败</h2>
        <p>
          清晰度菜单只显示当前作品可用的规格。切换失败时先回到自动或默认规格。若所有规格都失败，依次检查作品可见性、登录状态、网络、代理和应用版本。
        </p>

        <h2>自动播放下一条</h2>
        <p>
          启用后，视频结束或图集播放完成会进入下一条作品。处理评论、私信或长时间停留时可关闭，避免内容在后台继续播放。
        </p>
      </>
    ),
  },

  messages: {
    over: "COMMUNICATION",
    title: "通知、好友与私信",
    desc: "集中查看点赞、评论、关注、好友在线状态与私信历史。",
    body: (
      <>
        <h2>通知中心</h2>
        <p>
          通知页展示点赞、评论和关注等互动，支持后台刷新、刷新间隔设置以及跳转到来源内容或来源评论。
        </p>
        <DocImage
          src="screen-notices.png"
          alt="通知中心"
          caption="通知中心用于追踪互动来源和待处理内容。"
        />

        <h2>好友与在线状态</h2>
        <p>
          好友模块包含好友列表、在线状态、关注列表和未读提醒。在线状态取决于当前账号权限和可用数据，不应作为持续监视他人的工具。
        </p>

        <h2>私信会话</h2>
        <p>
          私信支持会话列表、历史同步、未读状态和分享卡片展示。发送前核对会话对象，尤其是在切换账号或使用
          AI 草稿之后。
        </p>
        <DocImage
          src="screen-friends.png"
          alt="好友与私信"
          caption="好友、状态和会话在桌面工作台中集中呈现。"
        />

        <h2>发送前检查</h2>
        <ul className="check-list">
          <li>当前激活账号正确。</li>
          <li>会话对象与上下文正确。</li>
          <li>AI 生成内容已经人工阅读。</li>
          <li>没有包含 API Key、Cookie、路径或其他私人信息。</li>
        </ul>
        <Callout kind="warning" title="避免自动骚扰">
          <p>
            不要对大量陌生账号发送相同内容，不要把自动回复用于营销获客、刷量或规避平台限制。
          </p>
        </Callout>
      </>
    ),
  },

  ai: {
    over: "AI PROVIDERS",
    title: "AI 服务配置",
    desc: "选择请求协议，填写服务地址、模型与密钥，再通过轻量测试确认配置。",
    body: (
      <>
        <h2>支持的请求格式</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>格式</th>
                <th>典型用途</th>
                <th>地址处理</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI Compatible</td>
                <td>
                  OpenAI、DeepSeek、通义千问、硅基流动、火山/豆包等兼容 Chat
                  Completions 的服务。
                </td>
                <td>
                  根地址会规范化到 <code>/v1/chat/completions</code>。
                </td>
              </tr>
              <tr>
                <td>Anthropic Messages</td>
                <td>使用 Anthropic Messages 协议的服务。</td>
                <td>
                  根地址会组合为 <code>/v1/messages</code>。
                </td>
              </tr>
              <tr>
                <td>Gemini GenerateContent</td>
                <td>使用 Gemini GenerateContent 协议的服务。</td>
                <td>
                  模型名会进入{" "}
                  <code>models/&#123;model&#125;:generateContent</code> 路径。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>配置步骤</h2>
        <Steps
          items={[
            {
              title: "选择服务商或协议",
              text: <>协议由服务端接口决定，不能只根据模型名称猜测。</>,
            },
            {
              title: "填写模型",
              text: (
                <>使用服务商控制台给出的完整模型标识，注意大小写与版本后缀。</>
              ),
            },
            {
              title: "填写 Base URL",
              text: <>填服务根地址。应用会预览最终请求地址，保存前逐字检查。</>,
            },
            {
              title: "填写 API Key",
              text: (
                <>使用权限和额度最小化的独立密钥，不要复用高权限管理密钥。</>
              ),
            },
            {
              title: "保存并测试",
              text: <>测试会先保存当前配置，再发起一次轻量模型请求。</>,
            },
          ]}
        />
        <CodeBlock label="字段示意">{`Protocol: OpenAI Compatible\nBase URL: https://api.example.com/v1\nModel: provider-model-name\nAPI Key: ••••••••••••`}</CodeBlock>

        <h2>系统提示词与用户提示词</h2>
        <p>
          系统提示词用于定义角色、语气、边界和禁止事项；用户提示词补充当前场景和输出要求。应用支持导入{" "}
          <code>.md</code> 与 <code>.txt</code> 文档，单个文件最大 300 KB。
        </p>
        <div className="do-dont">
          <div>
            <strong>系统提示词适合</strong>
            <ul>
              <li>明确身份与语气。</li>
              <li>限制敏感内容。</li>
              <li>规定输出长度和格式。</li>
            </ul>
          </div>
          <div>
            <strong>用户提示词适合</strong>
            <ul>
              <li>描述当前任务。</li>
              <li>补充受众和上下文。</li>
              <li>指定本次回复重点。</li>
            </ul>
          </div>
        </div>

        <h2>测试失败排查</h2>
        <ol>
          <li>核对协议与服务商文档是否一致。</li>
          <li>
            查看预览的最终请求地址，避免重复的 <code>/v1</code> 或错误路径。
          </li>
          <li>确认模型名存在且当前 API Key 有权访问。</li>
          <li>检查余额、频率限制、地区限制与代理。</li>
          <li>复制脱敏后的测试诊断信息，不要包含密钥。</li>
        </ol>
        <Callout kind="warning" title="第三方数据边界">
          <p>
            启用 AI 后，提交给模型的文本会发送到所选服务商。不要把 Cookie、API
            Key、私密会话或未经授权的个人信息放入提示词。
          </p>
        </Callout>
      </>
    ),
  },

  mcp: {
    over: "MODEL CONTEXT PROTOCOL",
    title: "MCP 接入",
    desc: "通过只监听本机的 HTTP MCP 服务，让兼容客户端调用发行版提供的工具。",
    body: (
      <>
        <h2>默认安全模型</h2>
        <div className="security-facts">
          <div>
            <ShieldCheck />
            <b>仅本机</b>
            <span>监听 127.0.0.1，不应暴露到公网。</span>
          </div>
          <div>
            <Network />
            <b>首选端口 39144</b>
            <span>端口占用时会自动向后探测，以应用显示值为准。</span>
          </div>
          <div>
            <KeyRound />
            <b>Bearer Token</b>
            <span>每个请求需要令牌，轮换后旧令牌立即失效。</span>
          </div>
          <div>
            <FileCheck2 />
            <b>默认只读</b>
            <span>写操作默认关闭，并可要求每次显式确认。</span>
          </div>
        </div>

        <h2>连接客户端</h2>
        <Steps
          items={[
            {
              title: "开启服务",
              text: <>进入“设置 → MCP / AI 工具接入”，启用本机 HTTP MCP。</>,
            },
            {
              title: "等待运行状态",
              text: (
                <>确认状态显示运行中，并记录应用实际显示的端口与工具数量。</>
              ),
            },
            {
              title: "复制客户端配置",
              text: (
                <>
                  使用应用的“复制配置”，获得完整 Endpoint 和 Authorization
                  Header。
                </>
              ),
            },
            {
              title: "添加到客户端",
              text: (
                <>
                  在兼容 MCP 的客户端中选择 HTTP 连接，粘贴 URL 与 Bearer
                  Header。
                </>
              ),
            },
            {
              title: "先做只读测试",
              text: <>重新加载工具，先查询状态或列表，再考虑写操作。</>,
            },
          ]}
        />
        <CodeBlock label="连接结构示意">{`URL: <应用内显示的 MCP Endpoint>\nHeader: Authorization: Bearer <应用内显示的 Token>`}</CodeBlock>
        <Callout title="不要手动猜地址">
          <p>
            应用会在端口占用时自动选择新端口，Endpoint
            路径也应以设置页复制的配置为准。
          </p>
        </Callout>

        <h2>HTTP MCP 与实时私信 WS</h2>
        <p>
          设置页可能同时显示 MCP Endpoint 和实时私信 WebSocket
          地址。前者用于工具调用，后者用于支持实时私信的集成。两者都需要应用显示的
          Bearer Token。
        </p>

        <h2>写操作与确认</h2>
        <p>
          “允许写操作”控制客户端能否请求可能改变账号状态的动作；“写操作需要确认”用于要求每次显式确认。建议长期保持只读，需要时临时开启，并在任务结束后关闭。
        </p>
        <div className="do-dont">
          <div>
            <strong>适合先测试</strong>
            <ul>
              <li>读取应用状态。</li>
              <li>查询内容或任务。</li>
              <li>查看下载队列。</li>
            </ul>
          </div>
          <div>
            <strong>必须谨慎</strong>
            <ul>
              <li>关注或取消关注。</li>
              <li>发送评论或私信。</li>
              <li>删除或改变本地内容。</li>
            </ul>
          </div>
        </div>

        <h2>令牌与日志</h2>
        <p>
          令牌泄露或不再信任某客户端时，点击重新生成，旧令牌会立即失效。调用日志可选择显示
          20、50 或 100 条，用于查看工具名、结果和异常。
        </p>
        <Callout kind="warning" title="不要暴露本机服务">
          <p>
            不要做端口转发，不要把 Endpoint 与 Token 发布到
            Issue、聊天记录、脚本仓库或远程服务器。
          </p>
        </Callout>
      </>
    ),
  },

  automation: {
    over: "AUTOMATION",
    title: "自动化监控",
    desc: "用来源、条件、阈值和单轮上限约束持续监控，避免自动化失控。",
    body: (
      <>
        <h2>可监控的来源</h2>
        <p>
          完整发行版支持推荐流、好友私信、通知、评论区和创作者作品更新等监控流程。可用来源会随当前版本和账号状态变化。
        </p>
        <DocImage
          src="screen-automation.png"
          alt="自动化监控设置"
          caption="规则设置包含监控来源、过滤、阈值、动作和日志。"
        />

        <h2>规则组成</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>维度</th>
                <th>可配置内容</th>
                <th>作用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>来源</td>
                <td>通知、好友、评论、推荐流等。</td>
                <td>限定扫描对象。</td>
              </tr>
              <tr>
                <td>文本过滤</td>
                <td>匹配关键词、排除关键词。</td>
                <td>减少无关触发。</td>
              </tr>
              <tr>
                <td>数据阈值</td>
                <td>最低点赞、评论、播放数量。</td>
                <td>只处理达到条件的内容。</td>
              </tr>
              <tr>
                <td>运行节奏</td>
                <td>扫描间隔、单轮最大动作数。</td>
                <td>限制请求频率和影响范围。</td>
              </tr>
              <tr>
                <td>动作</td>
                <td>草稿、发送、点赞、收藏等。</td>
                <td>决定触发后做什么。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>安全启用顺序</h2>
        <Steps
          items={[
            {
              title: "只观察",
              text: <>先开启一个来源，只生成日志，不发送、不点赞、不收藏。</>,
            },
            {
              title: "生成草稿",
              text: <>让 AI 生成草稿，但保留人工审阅和发送。</>,
            },
            {
              title: "小范围动作",
              text: <>设置严格关键词、较长间隔和很小的单轮上限。</>,
            },
            {
              title: "持续复盘",
              text: <>每天检查日志、跳过原因、误触发和账号状态。</>,
            },
          ]}
        />

        <h2>自动发送前的最低要求</h2>
        <ul className="check-list">
          <li>AI 测试成功，提示词已覆盖禁止事项。</li>
          <li>开启“需要上下文”，并设置合理最大字数。</li>
          <li>设置发送延迟和单轮最大动作数。</li>
          <li>排除营销、敏感和不确定关键词。</li>
          <li>准备随时暂停规则，并定期检查日志。</li>
        </ul>
        <Callout kind="warning" title="自动化不等于无人值守">
          <p>
            平台策略、内容和账号状态会变化。不要长期无人检查，不要用于批量营销、刷量、骚扰或规避平台限制。
          </p>
        </Callout>
      </>
    ),
  },

  shortcuts: {
    over: "KEYBOARD",
    title: "键盘快捷键",
    desc: "在 macOS 使用 Command，在 Windows 使用 Ctrl；播放器快捷键不需要组合键。",
    body: (
      <>
        <h2>全局快捷键</h2>
        <div className="shortcut-list">
          <div>
            <Kbd>⌘/Ctrl K</Kbd>
            <span>
              <b>搜索用户</b>
              <small>切换到搜索页面。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl L</Kbd>
            <span>
              <b>解析链接</b>
              <small>切换到分享链接输入页。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl ,</Kbd>
            <span>
              <b>打开设置</b>
              <small>显示应用设置。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl J</Kbd>
            <span>
              <b>切换底部栏</b>
              <small>展开或收起下载任务底栏。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl 1</Kbd>
            <span>
              <b>首页</b>
              <small>快速回到首页。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl 2</Kbd>
            <span>
              <b>搜索</b>
              <small>打开搜索页面。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl 3</Kbd>
            <span>
              <b>用户主页</b>
              <small>打开当前用户主页。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl 4</Kbd>
            <span>
              <b>推荐视频</b>
              <small>打开推荐内容。</small>
            </span>
          </div>
          <div>
            <Kbd>⌘/Ctrl 5</Kbd>
            <span>
              <b>我的下载</b>
              <small>打开本地内容。</small>
            </span>
          </div>
          <div>
            <Kbd>Esc</Kbd>
            <span>
              <b>关闭浮层</b>
              <small>关闭命令面板、设置或播放器。</small>
            </span>
          </div>
        </div>

        <h2>播放器快捷键</h2>
        <p>
          播放器打开时会优先处理空格、方向键、J、K 和
          Esc，避免全局导航让正在播放的媒体留在后台。
        </p>
        <div className="shortcut-list compact">
          <div>
            <Kbd>Space</Kbd>
            <span>
              <b>播放 / 暂停</b>
            </span>
          </div>
          <div>
            <Kbd>↑ / K</Kbd>
            <span>
              <b>上一条作品</b>
            </span>
          </div>
          <div>
            <Kbd>↓ / J</Kbd>
            <span>
              <b>下一条作品</b>
            </span>
          </div>
          <div>
            <Kbd>← / →</Kbd>
            <span>
              <b>切换媒体项</b>
            </span>
          </div>
        </div>
        <Callout title="输入框中的快捷键">
          <p>
            播放器会在评论或私信输入框获得焦点时避免拦截内容按键。全局快捷键仍建议在输入完成后使用。
          </p>
        </Callout>
      </>
    ),
  },

  appearance: {
    over: "PREFERENCES",
    title: "外观与通用设置",
    desc: "让桌面界面适应环境光、阅读距离和窗口尺寸。",
    body: (
      <>
        <h2>主题</h2>
        <p>
          应用提供亮色、暗色和跟随系统三种模式。白天高亮环境适合亮色，夜间或低照度环境适合暗色；跟随系统会随操作系统设置切换。
        </p>

        <h2>字体大小</h2>
        <p>
          可选较小、默认、较大和超大。修改后检查侧边栏、设置、评论与私信长文本是否仍舒适，不必为了显示更多内容牺牲可读性。
        </p>

        <h2>侧边栏与小屏</h2>
        <p>
          桌面侧边栏可以展开或收起；较窄窗口会自动使用紧凑模式。折叠时可通过图标提示识别页面。
        </p>

        <h2>调整后的建议检查</h2>
        <ul className="check-list">
          <li>标题、正文和辅助文字均有足够对比度。</li>
          <li>较长昵称和文件名没有遮挡主要操作。</li>
          <li>播放器控制在当前窗口尺寸下完整可见。</li>
          <li>高 DPI 屏幕上的图标与截图保持清晰。</li>
        </ul>
      </>
    ),
  },

  updates: {
    over: "MAINTENANCE",
    title: "升级与备份",
    desc: "使用应用内更新或官方 Releases 获取新版本，并保留可恢复的本地数据。",
    body: (
      <>
        <h2>检查更新</h2>
        <p>
          进入“设置 →
          关于”，可查看当前版本、检查新版本、阅读更新说明并下载安装。部分平台或版本可能只提供“打开
          Release 页面”进行手动更新。
        </p>

        <h2>更新代理</h2>
        <p>
          检查或下载更新受网络影响时，可以设置 HTTP 或 HTTPS 代理，例如{" "}
          <code>http://127.0.0.1:7890</code>。留空则使用系统或环境变量代理。
        </p>
        <Callout kind="warning" title="只使用可信代理">
          <p>
            代理可以看到连接目标并影响下载链路。更新后仍应核对版本与
            checksum，不要使用公开来源不明的代理。
          </p>
        </Callout>

        <h2>升级前备份</h2>
        <ul className="check-list">
          <li>保存下载目录中的重要媒体。</li>
          <li>记录自定义文件名和目录模板。</li>
          <li>
            记录 AI 协议、Base URL 和模型名，但不要把 API Key 写进明文笔记。
          </li>
          <li>暂停自动化和 MCP 写操作。</li>
          <li>退出所有活动下载任务。</li>
        </ul>

        <h2>升级后验证</h2>
        <Steps
          items={[
            {
              title: "确认版本",
              text: <>在“关于”中检查版本号与 Release 一致。</>,
            },
            { title: "确认账号", text: <>检查当前激活账号和登录有效状态。</> },
            {
              title: "确认目录",
              text: <>下载路径、归档规则和模板没有被重置。</>,
            },
            {
              title: "做一条测试任务",
              text: <>完成搜索、播放和单条下载，再恢复批量或自动化。</>,
            },
          ]}
        />

        <h2>回退版本</h2>
        <p>
          只有在确认新版本存在阻断问题时才考虑回退。先备份数据，再从官方
          Releases
          的历史版本下载；不同版本的配置结构可能不兼容，因此不要覆盖唯一备份。
        </p>
      </>
    ),
  },

  diagnostics: {
    over: "DIAGNOSTICS",
    title: "运行日志与诊断",
    desc: "从最近一次操作的第一条异常开始，逐步缩小账号、网络、内容和本地环境问题。",
    body: (
      <>
        <h2>打开日志面板</h2>
        <p>
          点击右下角任务面板并选择“日志”，或先按 <Kbd>⌘/Ctrl J</Kbd>{" "}
          展开面板。日志按时间记录信息、成功、警告和错误；界面只展示最近一段记录，更早内容会显示为已折叠。
        </p>
        <div className="shortcut-list compact">
          <div>
            <Kbd>⌘/Ctrl J</Kbd>
            <span>
              <b>展开 / 收起面板</b>
              <small>不会改变当前工作区。</small>
            </span>
          </div>
          <div>
            <Kbd>↓</Kbd>
            <span>
              <b>滚动到最新日志</b>
              <small>使用日志页顶部的向下按钮。</small>
            </span>
          </div>
        </div>
        <Callout kind="warning" title="清空日志前先记录问题">
          <p>
            日志页的垃圾桶按钮会清空当前可见记录。先保存必要的脱敏错误文本，再执行清空和重新复现。
          </p>
        </Callout>

        <h2>最有效的复现流程</h2>
        <Steps
          items={[
            {
              title: "固定环境",
              text: (
                <>
                  记录系统版本、应用版本、安装器或便携版、当前网络与是否使用代理。
                </>
              ),
            },
            {
              title: "停止并行变量",
              text: (
                <>
                  暂停下载队列、自动化、MCP 写操作与 AI
                  自动发送，只保留要检查的功能。
                </>
              ),
            },
            {
              title: "清空无关日志",
              text: (
                <>
                  确认已保存必要信息后清空当前日志，让时间线从一次干净操作开始。
                </>
              ),
            },
            {
              title: "只做一个动作",
              text: (
                <>
                  例如只搜索一个公开用户，或只下载一条普通视频，不要连续点击重试。
                </>
              ),
            },
            {
              title: "找到第一条异常",
              text: (
                <>
                  先看最早出现的 warning 或
                  error，后续错误可能只是它的连锁结果。
                </>
              ),
            },
            {
              title: "改变一个条件",
              text: (
                <>
                  一次只更换账号、网络、目录、作品或协议中的一个，然后再次复现。
                </>
              ),
            },
          ]}
        />

        <h2>根据日志关键词判断方向</h2>
        <div className="table-scroll wide">
          <table>
            <thead>
              <tr>
                <th>日志线索</th>
                <th>常见归类</th>
                <th>优先动作</th>
                <th>不要先做</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cookie、登录、验证、账号失效</td>
                <td>会话或账号状态</td>
                <td>在官方端确认账号，再使用“重新登录”。</td>
                <td>反复刷新多个列表。</td>
              </tr>
              <tr>
                <td>network、timeout、proxy、certificate</td>
                <td>网络、代理或证书</td>
                <td>检查系统时间和代理，用稳定网络单次重试。</td>
                <td>永久关闭 SSL 校验。</td>
              </tr>
              <tr>
                <td>permission、path、write、space</td>
                <td>下载目录或磁盘</td>
                <td>检查剩余空间和目录写入权限。</td>
                <td>把磁盘根目录设为下载目录。</td>
              </tr>
              <tr>
                <td>not found、private、unavailable</td>
                <td>单个作品或可见性</td>
                <td>在官方端打开作品，再换公开作品对照。</td>
                <td>立即认定整个应用失效。</td>
              </tr>
              <tr>
                <td>401、403、model、quota、rate limit</td>
                <td>AI 服务配置</td>
                <td>核对协议、模型权限、额度与最终请求地址。</td>
                <td>把 API Key 发到 Issue。</td>
              </tr>
              <tr>
                <td>port、endpoint、bearer、unauthorized</td>
                <td>MCP 连接</td>
                <td>复制应用当前 Endpoint 与 Token，重新加载客户端。</td>
                <td>猜测端口或做公网转发。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>建立最小对照组</h2>
        <p>
          最小对照组能帮助判断是“所有操作都失败”还是“只有某个对象失败”。每次只替换一项：
        </p>
        <ul className="check-list">
          <li>
            <strong>内容对照：</strong>失败作品与一条公开普通视频比较。
          </li>
          <li>
            <strong>账号对照：</strong>当前账号在官方端是否能访问同一内容。
          </li>
          <li>
            <strong>目录对照：</strong>
            原下载目录与用户文档中的临时测试目录比较。
          </li>
          <li>
            <strong>网络对照：</strong>当前代理配置与系统默认网络比较。
          </li>
          <li>
            <strong>配置对照：</strong>
            自定义质量、并发、模板与首次推荐默认值比较。
          </li>
        </ul>

        <h2>提交反馈需要哪些信息</h2>
        <div className="do-dont">
          <div>
            <strong>可以提供</strong>
            <ul>
              <li>系统与应用版本。</li>
              <li>安装器或便携版。</li>
              <li>从启动开始的最短复现步骤。</li>
              <li>第一条脱敏后的异常文本。</li>
              <li>是否仅发生在单个公开作品。</li>
            </ul>
          </div>
          <div>
            <strong>必须移除</strong>
            <ul>
              <li>Cookie、API Key、MCP Token。</li>
              <li>私信正文与未公开个人资料。</li>
              <li>本机用户名和完整绝对路径。</li>
              <li>任何真实平台内部请求信息。</li>
            </ul>
          </div>
        </div>
        <IssuesLink />
      </>
    ),
  },

  uninstall: {
    over: "UNINSTALL",
    title: "卸载与数据清理",
    desc: "应用程序、账号会话、配置缓存和下载媒体是四类不同数据，需要分别决定是否保留。",
    body: (
      <>
        <h2>卸载前先做决定</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>内容</th>
                <th>卸载应用时</th>
                <th>建议</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>应用程序文件</td>
                <td>会被卸载器或手动移除。</td>
                <td>确认活动任务全部结束后再处理。</td>
              </tr>
              <tr>
                <td>账号会话与设置</td>
                <td>不应假定一定随程序自动删除。</td>
                <td>需要彻底退出时，先在账号管理中注销账号。</td>
              </tr>
              <tr>
                <td>下载历史与缓存</td>
                <td>可能与媒体目录分开保存。</td>
                <td>先记录需要恢复的模板和设置。</td>
              </tr>
              <tr>
                <td>已下载媒体</td>
                <td>通常位于你选择的目录，不会因卸载程序自动消失。</td>
                <td>重要文件独立备份，清理前逐项核对路径。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout kind="warning" title="不要把卸载当作删除下载文件">
          <p>
            卸载应用和删除下载目录是两件事。文档不会建议递归删除不明确的目录；请在系统文件管理器中确认实际路径和备份后再清理。
          </p>
        </Callout>

        <h2>推荐的安全顺序</h2>
        <Steps
          items={[
            {
              title: "停止所有活动",
              text: (
                <>暂停或等待下载任务结束，关闭播放器、MCP 服务和自动化规则。</>
              ),
            },
            {
              title: "记录与备份",
              text: (
                <>
                  备份重要媒体，记录下载目录、命名模板、AI
                  协议和模型名；不要明文记录密钥。
                </>
              ),
            },
            {
              title: "注销账号",
              text: (
                <>
                  如果不希望保留会话，在“设置 →
                  账号管理”逐个注销并清除应用内保存的 Cookie。
                </>
              ),
            },
            {
              title: "完全退出应用",
              text: <>确认窗口与后台进程都已结束，避免文件仍被占用。</>,
            },
            {
              title: "卸载程序",
              text: <>按平台方式移除安装版，或移除完整的便携版解压目录。</>,
            },
            {
              title: "单独处理本地媒体",
              text: <>只有明确不再需要时，才在文件管理器中手动处理下载目录。</>,
            },
          ]}
        />

        <h2>Windows</h2>
        <h3>安装器版本</h3>
        <ol>
          <li>打开“设置 → 应用 → 已安装的应用”。</li>
          <li>找到 better-douyin，选择卸载并按系统提示完成。</li>
          <li>
            卸载后不要直接删除不认识的 AppData
            目录；若需要完整数据清理，先确认路径确实属于本应用。
          </li>
        </ol>
        <h3>便携版</h3>
        <p>
          完全退出后，可以移除当初完整解压的便携版目录。不要只删除其中一个可执行文件，也不要把下载媒体存放在将被整体删除的便携目录中。
        </p>

        <h2>macOS</h2>
        <ol>
          <li>完全退出 better-douyin。</li>
          <li>
            从“应用程序”将 better-douyin 移到废纸篓；便携版则移除完整解压位置。
          </li>
          <li>已下载媒体仍按下载设置保存在原目录，按需单独保留或处理。</li>
        </ol>

        <h2>准备重新安装时</h2>
        <ul className="check-list">
          <li>重新从官方 Latest Release 下载，不复用来源不明的旧安装包。</li>
          <li>按校验文档核对新的 SHA-256。</li>
          <li>先使用默认设置完成一条测试任务，再恢复自定义配置。</li>
          <li>不要在确认新安装正常前删除唯一备份。</li>
        </ul>
      </>
    ),
  },

  privacy: {
    over: "TRUST & SAFETY",
    title: "隐私、安全与许可",
    desc: "理解数据存放位置、第三方服务边界、账号风险和非商业许可。",
    body: (
      <>
        <h2>本地优先，不等于完全离线</h2>
        <p>
          账号、配置、下载历史、缓存和媒体文件主要保存在本机。软件仍需连接平台加载内容；启用
          AI 时，相关文本会发送给你选择的模型服务商。
        </p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>数据</th>
                <th>主要位置</th>
                <th>保护建议</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cookie 与账号会话</td>
                <td>本机应用数据</td>
                <td>不要截图、上传或粘贴到 Issue。</td>
              </tr>
              <tr>
                <td>下载历史与配置</td>
                <td>本机应用数据</td>
                <td>升级前备份，不与他人共享完整配置。</td>
              </tr>
              <tr>
                <td>媒体文件</td>
                <td>你选择的下载目录</td>
                <td>确认版权与授权，重要文件单独备份。</td>
              </tr>
              <tr>
                <td>AI 请求文本</td>
                <td>第三方模型服务商</td>
                <td>阅读服务商政策，移除私密与敏感信息。</td>
              </tr>
              <tr>
                <td>MCP Token 与日志</td>
                <td>本机设置与日志</td>
                <td>只给可信客户端，泄露后立即轮换。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>账号风险</h2>
        <p>
          任何第三方工具都不能承诺零风险。账号环境、请求频率、平台策略变化和使用方式都可能导致验证、限流、内容不可用或账号异常。
        </p>
        <ul className="check-list">
          <li>从小规模、低频率、只读操作开始。</li>
          <li>不要长时间无人值守运行自动化。</li>
          <li>遇到验证、限流或异常提示立即暂停。</li>
          <li>不要寻求绕过风控、解封或规避限制的方法。</li>
        </ul>

        <h2>非商业许可</h2>
        <p>
          公开版本采用 Better Douyin Non-Commercial
          License，仅允许个人在非商业的学习、研究、学术探讨和测试场景中使用、复制、学习和修改。
        </p>
        <Callout kind="warning" title="禁止的商业用途">
          <p>
            未经书面许可，不得收费分发、收费下载或代下、制作付费镜像、提供托管 /
            SaaS / 代部署、商业集成、数据销售或其他直接与间接营利行为。
          </p>
        </Callout>

        <h2>公开源码安全边界</h2>
        <p>
          公开 Open Shell 不包含真实平台端点、签名、加密、Cookie
          提取、下载解析内部逻辑、发布密钥或生产凭据。不要在公开贡献或 Issue
          中请求、提交或推测这些内容。
        </p>
      </>
    ),
  },

  troubleshooting: {
    over: "TROUBLESHOOTING",
    title: "故障排查",
    desc: "按最小复现路径检查版本、账号、网络、权限和内容状态。",
    body: (
      <>
        <h2>先做五项基础检查</h2>
        <ol>
          <li>确认使用的是官方 Latest Release，而不是公开 mock Demo。</li>
          <li>记录操作系统、应用版本与安装包类型。</li>
          <li>确认当前账号在官方端仍可正常使用。</li>
          <li>暂停 AI、MCP 写操作与自动化规则。</li>
          <li>用一条公开内容复现，排除单个作品权限问题。</li>
        </ol>

        <h2>常见症状</h2>
        <div className="table-scroll wide">
          <table>
            <thead>
              <tr>
                <th>症状</th>
                <th>优先检查</th>
                <th>下一步</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>应用无法启动</td>
                <td>系统与架构是否匹配，文件是否校验成功。</td>
                <td>重新下载官方安装包，查看系统安全提示。</td>
              </tr>
              <tr>
                <td>登录窗口打不开</td>
                <td>选择的 Chrome、Edge 或 Chromium 是否存在。</td>
                <td>更换浏览器类型，退出残留登录窗口后重试。</td>
              </tr>
              <tr>
                <td>账号已失效</td>
                <td>官方端登录状态、密码或会话是否变化。</td>
                <td>在账号列表使用“重新登录”。</td>
              </tr>
              <tr>
                <td>搜索或列表为空</td>
                <td>账号权限、内容可见性与网络。</td>
                <td>用公开用户测试，降低刷新频率。</td>
              </tr>
              <tr>
                <td>播放器黑屏</td>
                <td>作品是否仍可访问，可用清晰度与网络。</td>
                <td>切回自动清晰度，重启播放器。</td>
              </tr>
              <tr>
                <td>下载立即失败</td>
                <td>目录存在、写入权限、磁盘空间与 SSL。</td>
                <td>换到用户文档目录做单条测试。</td>
              </tr>
              <tr>
                <td>文件已存在</td>
                <td>命名模板与重复文件跳过提示。</td>
                <td>保留作品 ID，检查目标目录。</td>
              </tr>
              <tr>
                <td>AI 测试失败</td>
                <td>协议、Base URL、模型、Key 与额度。</td>
                <td>复制脱敏诊断，按服务商文档校正。</td>
              </tr>
              <tr>
                <td>MCP 无法连接</td>
                <td>运行状态、实际端口、Endpoint 与 Token。</td>
                <td>复制最新配置，重启服务并重新加载客户端。</td>
              </tr>
              <tr>
                <td>检查更新失败</td>
                <td>GitHub 访问、代理格式与系统时间。</td>
                <td>清空代理或使用可信代理，手动打开 Release。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>应用无法启动或启动后空白</h2>
        <Steps
          items={[
            {
              title: "核对发行文件",
              text: (
                <>
                  Windows 需要 x64 文件；Apple 芯片 Mac 需要 arm64 文件。不要把
                  updater、签名或 metadata 当作安装包。
                </>
              ),
            },
            {
              title: "重新校验 SHA-256",
              text: (
                <>
                  如果文件经过网盘、下载器、代理或多次恢复，重新从官方 Release
                  下载并校验。
                </>
              ),
            },
            {
              title: "查看系统拦截提示",
              text: (
                <>
                  Windows 查看安全提示；macOS 在确认来源与校验值后，从 Finder
                  右键选择“打开”或检查“隐私与安全性”。
                </>
              ),
            },
            {
              title: "排除旧进程",
              text: (
                <>
                  完全退出残留窗口和后台进程，再启动一次；便携版必须完整解压到固定目录。
                </>
              ),
            },
            {
              title: "仍然失败",
              text: (
                <>
                  记录系统版本、架构、安装包完整文件名和出现提示的阶段，不要只写“打不开”。
                </>
              ),
            },
          ]}
        />

        <h2>登录成功但内容加载失败</h2>
        <p>
          登录窗口成功只说明会话写入完成，不代表每个内容接口都可用。按以下顺序判断：
        </p>
        <ol>
          <li>在官方客户端或网页端打开同一账号和同一公开作品。</li>
          <li>回到“账号管理”确认当前激活账号、头像与昵称正确。</li>
          <li>用一个公开用户替换昵称搜索，优先尝试完整抖音号或 UID。</li>
          <li>切换账号后重新刷新点赞、收藏、通知和好友页，避免查看旧状态。</li>
          <li>若出现验证或限流提示，停止连续重试并等待账号恢复正常。</li>
        </ol>
        <Callout title="空列表不一定是程序错误">
          <p>
            账号权限、隐私设置、列表本身为空、作品下架、区域差异和会话状态都可能返回空内容。使用公开对照对象可以最快区分。
          </p>
        </Callout>

        <h2>播放正常但下载失败</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>检查项</th>
                <th>验证方法</th>
                <th>恢复后表现</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>目录权限</td>
                <td>选择用户文档下的新测试目录，只下载一条普通视频。</td>
                <td>任务能够从等待进入下载中。</td>
              </tr>
              <tr>
                <td>磁盘空间</td>
                <td>检查目标磁盘剩余空间，不只看系统盘。</td>
                <td>文件大小持续增长并最终完成。</td>
              </tr>
              <tr>
                <td>并发过高</td>
                <td>把并发降到 1，暂停其他大文件任务。</td>
                <td>失败率下降，速度趋于稳定。</td>
              </tr>
              <tr>
                <td>质量不可用</td>
                <td>从固定 4K / 2K 切回“自动”。</td>
                <td>使用内容源实际提供的规格。</td>
              </tr>
              <tr>
                <td>模板或重名</td>
                <td>
                  在模板保留 <code>{"{aweme_id}"}</code>，检查目标目录已有文件。
                </td>
                <td>新任务生成唯一且可定位的文件名。</td>
              </tr>
              <tr>
                <td>证书或代理</td>
                <td>恢复系统证书校验，检查系统时间与可信代理。</td>
                <td>日志不再出现 certificate 或 proxy 异常。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>下载完成但“我的下载”看不到</h2>
        <ol>
          <li>在任务卡片中打开文件位置，确认文件实际存在且大小正常。</li>
          <li>核对当前“我的下载”使用的目录与任务写入目录是否一致。</li>
          <li>如果曾手动移动文件，重新扫描目标下载目录。</li>
          <li>切换文件视图与作品视图，清除筛选词和类型过滤。</li>
          <li>不要反复下载同一作品来修复索引，这会增加重名文件。</li>
        </ol>

        <h2>AI、MCP 与更新问题</h2>
        <div className="do-dont">
          <div>
            <strong>AI 测试</strong>
            <ul>
              <li>协议必须匹配服务端。</li>
              <li>
                检查最终请求地址是否重复 <code>/v1</code>。
              </li>
              <li>确认模型权限、Key、额度与限流。</li>
              <li>不要提交真实 API Key。</li>
            </ul>
          </div>
          <div>
            <strong>MCP 连接</strong>
            <ul>
              <li>桌面应用必须保持运行。</li>
              <li>复制当前 Endpoint，不猜端口。</li>
              <li>更新 Bearer Token 后重载客户端。</li>
              <li>先恢复默认只读模式测试。</li>
            </ul>
          </div>
        </div>
        <p>
          更新检查失败时，先确认系统时间和 GitHub
          可访问；清空错误代理，或使用你明确知道来源的 HTTP / HTTPS
          代理。自动更新不可用时，可以手动打开官方 Release，但仍需完成校验。
        </p>

        <h2>问题恢复后的验证顺序</h2>
        <ol>
          <li>保持默认质量、1 到 3 个并发和只读进阶能力。</li>
          <li>完成一次公开用户搜索和一条普通视频播放。</li>
          <li>完成一次单条下载并定位到本地文件。</li>
          <li>
            恢复自定义模板、批量任务、AI、MCP 和自动化时，每次只开启一项。
          </li>
        </ol>
        <a className="doc-inline-next" href="#/docs/diagnostics">
          <TerminalSquare aria-hidden="true" />
          <span>
            <b>需要继续定位？</b>
            <small>阅读“运行日志与诊断”，建立干净的最小复现。</small>
          </span>
          <ArrowRight aria-hidden="true" />
        </a>

        <h2>提交 Issue 前脱敏</h2>
        <div className="do-dont">
          <div>
            <strong>应该提供</strong>
            <ul>
              <li>系统与应用版本。</li>
              <li>清晰的复现步骤。</li>
              <li>预期结果与实际结果。</li>
              <li>经过脱敏的错误文本。</li>
            </ul>
          </div>
          <div>
            <strong>绝对不要提供</strong>
            <ul>
              <li>Cookie、API Key、MCP Token。</li>
              <li>完整私信或个人资料。</li>
              <li>包含用户名的本地绝对路径。</li>
              <li>真实平台内部请求信息。</li>
            </ul>
          </div>
        </div>
        <IssuesLink />
      </>
    ),
  },

  faq: {
    over: "FAQ",
    title: "常见问题",
    desc: "关于费用、平台、源码、升级、账号和进阶能力的快速回答。",
    body: (
      <div className="faq">
        <details open>
          <summary>
            软件收费吗？
            <ArrowRight />
          </summary>
          <p>
            不收费。官方没有付费版、激活码、会员解锁、收费代下或付费镜像。赞助是自愿支持，不会解锁功能。
          </p>
        </details>
        <details>
          <summary>
            现在还有 Python 版和 Rust 版之分吗？
            <ArrowRight />
          </summary>
          <p>
            官网只指向当前唯一主发布仓库{" "}
            <a href={REPO}>anYuJia/better-douyin</a>。完整应用采用 Rust +
            Tauri，旧仓库用户应重新从主仓库 Releases 下载。
          </p>
        </details>
        <details>
          <summary>
            公开仓库是完整源码吗？
            <ArrowRight />
          </summary>
          <p>
            不是。公开源码是 Open Shell，包含 UI、mock bridge、mock backend
            与协作边界。完整可用应用在
            Releases，真实平台连接器和发布密钥等不在公开范围。
          </p>
        </details>
        <details>
          <summary>
            支持 Windows、macOS 和 Linux 吗？
            <ArrowRight />
          </summary>
          <p>
            当前 Release 提供 Windows x64 和 macOS Apple Silicon arm64
            文件。是否新增平台以未来 Release 的 Assets 为准；目前不要把 arm64
            包用于 Intel Mac。
          </p>
        </details>
        <details>
          <summary>
            安装器与便携版怎么选？
            <ArrowRight />
          </summary>
          <p>
            普通用户优先安装器或
            DMG。便携版适合希望手动管理目录的用户，必须完整解压后运行。
          </p>
        </details>
        <details>
          <summary>
            可以从第三方网盘下载吗？
            <ArrowRight />
          </summary>
          <p>
            不建议。只使用官方 Releases，并用同一版本的 checksums.sha256
            校验文件。
          </p>
        </details>
        <details>
          <summary>
            下载的内容保存在哪里？
            <ArrowRight />
          </summary>
          <p>
            保存在“设置 →
            下载”中选择的目录。可以启用按作者归档，并使用标题、作品
            ID、作者、日期、时间和媒体类型模板。
          </p>
        </details>
        <details>
          <summary>
            卸载软件会删除已经下载的内容吗？
            <ArrowRight />
          </summary>
          <p>
            不应把两者视为同一件事。应用程序、账号会话、配置缓存和下载媒体位于不同位置；已下载媒体通常仍保存在你选择的目录。请先阅读“卸载与数据清理”，逐项确认后再处理。
          </p>
        </details>
        <details>
          <summary>
            下载成功但“我的下载”里看不到怎么办？
            <ArrowRight />
          </summary>
          <p>
            先从任务卡片定位实际文件，再核对当前下载目录，清除作品视图中的筛选条件并重新扫描。不要通过反复下载同一作品来修复索引。
          </p>
        </details>
        <details>
          <summary>
            AI 功能必须使用 OpenAI 吗？
            <ArrowRight />
          </summary>
          <p>
            不必须。应用支持 OpenAI Compatible、Anthropic Messages 与 Gemini
            GenerateContent
            请求格式，具体模型和服务由你配置并承担相应费用与政策责任。
          </p>
        </details>
        <details>
          <summary>
            MCP 会暴露到网络吗？
            <ArrowRight />
          </summary>
          <p>
            设计上只监听 127.0.0.1，并使用 Bearer
            Token。不要做端口转发，也不要分享 Endpoint 与 Token。
          </p>
        </details>
        <details>
          <summary>
            MCP 端口一定是 39144 吗？
            <ArrowRight />
          </summary>
          <p>
            39144
            是首选端口，不是应当手写的固定值。端口被占用时应用会向后探测；始终复制设置页当前显示的
            Endpoint 与 Bearer Token。
          </p>
        </details>
        <details>
          <summary>
            自动化可以长期无人值守吗？
            <ArrowRight />
          </summary>
          <p>
            不建议。应保留严格条件、较长间隔、很小的单轮上限和持续日志检查，任何异常都应立即暂停。
          </p>
        </details>
        <details>
          <summary>
            使用会不会导致账号风险？
            <ArrowRight />
          </summary>
          <p>
            不能承诺零风险。请遵守平台规则与法律，只在合法、授权、非商业场景使用，并控制频率和影响范围。
          </p>
        </details>
        <details>
          <summary>
            去哪里反馈问题？
            <ArrowRight />
          </summary>
          <p>
            前往 GitHub
            Issues，先搜索已有问题，再提供版本、系统、复现步骤和脱敏后的错误信息。
          </p>
        </details>
        <details>
          <summary>
            反馈前怎样收集有效日志？
            <ArrowRight />
          </summary>
          <p>
            按 ⌘/Ctrl J
            打开底部日志面板，暂停其他任务后只复现一个动作，记录第一条 warning
            或 error。提交前删除 Cookie、API Key、MCP
            Token、私信和本地用户名路径。
          </p>
        </details>
      </div>
    ),
  },
};
