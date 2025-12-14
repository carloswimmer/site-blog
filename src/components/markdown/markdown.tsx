import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={styledComponents}>
      {content}
    </ReactMarkdown>
  );
};

const styledComponents = {
  a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
    <a href={href} className="text-blue-200 hover:underline">
      {children}
    </a>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-6 leading-relaxed text-gray-200">{children}</p>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-extrabold text-gray-200">{children}</strong>
  ),
};
