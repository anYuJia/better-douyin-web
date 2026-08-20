import { useState, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Download,
  ExternalLink,
  Github,
  Info,
} from "lucide-react";

const REPO = "https://github.com/anYuJia/better-douyin";
const RELEASES = `${REPO}/releases/latest`;
const ISSUES = `${REPO}/issues`;

export function Callout({
  children,
  kind = "note",
  title,
}: {
  children: ReactNode;
  kind?: "note" | "warning" | "tip";
  title?: string;
}) {
  const Icon =
    kind === "warning" ? AlertTriangle : kind === "tip" ? CheckCircle2 : Info;

  return (
    <div className={`callout ${kind}`}>
      <Icon aria-hidden="true" />
      <div>
        {title && <strong>{title}</strong>}
        <div>{children}</div>
      </div>
    </div>
  );
}

export function CodeBlock({
  children,
  label = "示例",
}: {
  children: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard?.writeText(children);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code">
      <div className="code-toolbar">
        <span className="code-label">{label}</span>
        <button
          type="button"
          className={copied ? "copied" : ""}
          onClick={() => void copy()}
          aria-label={`复制${label}`}
        >
          {copied ? (
            <Check aria-hidden="true" />
          ) : (
            <Clipboard aria-hidden="true" />
          )}
          {copied ? "已复制" : "复制"}
        </button>
      </div>
      <pre tabIndex={0} aria-label={`${label}代码`}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function DocImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="doc-image">
      <img
        src={`./images/${src}`}
        alt={alt}
        width="1200"
        height="800"
        loading="lazy"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Steps({
  items,
}: {
  items: Array<{ title: string; text: ReactNode }>;
}) {
  return (
    <ol className="doc-steps">
      {items.map((item, index) => (
        <li key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ReleaseLink() {
  return (
    <a className="doc-link" href={RELEASES} target="_blank" rel="noreferrer">
      <Download aria-hidden="true" />
      <span>
        <b>打开官方 Latest Release</b>
        <small>只从 github.com/anYuJia/better-douyin 下载</small>
      </span>
      <ExternalLink aria-hidden="true" />
    </a>
  );
}

export function IssuesLink() {
  return (
    <a className="doc-link" href={ISSUES} target="_blank" rel="noreferrer">
      <Github aria-hidden="true" />
      <span>
        <b>前往 GitHub Issues</b>
        <small>先搜索已有问题，再提交脱敏后的复现信息</small>
      </span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="inline-kbd">{children}</kbd>;
}
