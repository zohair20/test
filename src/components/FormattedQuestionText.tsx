import React from 'react';
import { CodeBlock } from './CodeBlock';

interface FormattedTextProps {
  content: string;
  isTitle?: boolean;
  className?: string;
}

interface Segment {
  type: 'text' | 'code' | 'inline-code';
  content: string;
  language?: string;
}

export const FormattedQuestionText: React.FC<FormattedTextProps> = ({
  content,
  isTitle = false,
  className = '',
}) => {
  if (!content) return null;

  // Check if content has markdown code fences ```
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\s*\n?([\s\S]*?)```/g;
  const segments: Segment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: content.slice(lastIndex, match.index),
      });
    }

    segments.push({
      type: 'code',
      language: match[1]?.trim() || 'code',
      content: match[2],
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    segments.push({
      type: 'text',
      content: content.slice(lastIndex),
    });
  }

  // Render text segment supporting inline backticks `code`
  const renderTextWithInlineCode = (text: string, keyPrefix: string) => {
    // Split by `inline code`
    const parts = text.split(/(`[^`]+`)/g);

    return (
      <span key={keyPrefix}>
        {parts.map((part, pIdx) => {
          if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
            const inlineCode = part.slice(1, -1);
            return (
              <code
                key={`${keyPrefix}-code-${pIdx}`}
                className="px-1.5 py-0.5 mx-0.5 font-mono text-[12px] sm:text-[13px] bg-stone-100 text-stone-800 border border-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700 rounded select-all font-semibold"
              >
                {inlineCode}
              </code>
            );
          }
          return <span key={`${keyPrefix}-txt-${pIdx}`}>{part}</span>;
        })}
      </span>
    );
  };

  if (segments.length === 1 && segments[0].type === 'text') {
    return (
      <div className={className}>
        {renderTextWithInlineCode(segments[0].content, 'single')}
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {segments.map((seg, sIdx) => {
        if (seg.type === 'code') {
          return (
            <CodeBlock
              key={`code-${sIdx}`}
              code={seg.content}
              language={seg.language}
            />
          );
        }

        const trimmed = seg.content.trim();
        if (!trimmed) return null;

        return (
          <div
            key={`txt-${sIdx}`}
            className={
              isTitle
                ? 'text-stone-900 dark:text-stone-100 leading-snug font-bold text-base sm:text-lg'
                : 'text-stone-800 dark:text-stone-200 leading-relaxed'
            }
          >
            {renderTextWithInlineCode(seg.content, `seg-${sIdx}`)}
          </div>
        );
      })}
    </div>
  );
};
