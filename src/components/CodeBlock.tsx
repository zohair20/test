import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = '',
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);

  // Clean code and split into lines
  const cleanCode = code.replace(/\r\n/g, '\n').trimEnd();
  const lines = cleanCode.split('\n');
  const hasMultipleLines = lines.length > 1;

  // Language display name and badge color
  const langKey = (language || 'code').toLowerCase().trim();
  let langDisplay = 'CODE';
  let badgeColor = 'bg-stone-800 text-stone-300 border-stone-700';

  if (langKey.includes('c') && !langKey.includes('sql')) {
    langDisplay = 'C';
    badgeColor = 'bg-blue-950/80 text-blue-300 border-blue-800/80';
  } else if (langKey.includes('java')) {
    langDisplay = 'JAVA';
    badgeColor = 'bg-orange-950/80 text-orange-300 border-orange-800/80';
  } else if (langKey.includes('sql') || langKey.includes('oracle') || langKey.includes('plsql')) {
    langDisplay = langKey.includes('plsql') || langKey.includes('oracle') ? 'PL/SQL' : 'SQL';
    badgeColor = 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80';
  } else if (langKey.includes('bash') || langKey.includes('sh') || langKey.includes('shell')) {
    langDisplay = 'BASH';
    badgeColor = 'bg-purple-950/80 text-purple-300 border-purple-800/80';
  } else if (langKey.includes('js') || langKey.includes('javascript')) {
    langDisplay = 'JS';
    badgeColor = 'bg-yellow-950/80 text-yellow-300 border-yellow-800/80';
  }

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(cleanCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="my-3.5 rounded-xl overflow-hidden border border-stone-700/80 dark:border-stone-800 bg-[#15171e] text-stone-100 shadow-sm transition-all"
    >
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#1f222e] border-b border-stone-800 text-xs select-none">
        <div className="flex items-center gap-2">
          {langKey.includes('bash') || langKey.includes('sh') ? (
            <Terminal className="w-3.5 h-3.5 text-stone-400" />
          ) : (
            <Code2 className="w-3.5 h-3.5 text-stone-400" />
          )}
          <span
            className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase border ${badgeColor}`}
          >
            {langDisplay}
          </span>
          <span className="text-[11px] text-stone-400 font-mono hidden sm:inline">
            {lines.length} {lines.length === 1 ? 'ligne' : 'lignes'}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-stone-300 hover:text-white hover:bg-stone-700/60 transition-colors text-[11px] font-medium"
          title="Copier le code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copié</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copier</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-3 sm:p-4 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed select-text">
        {hasMultipleLines && showLineNumbers ? (
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                  <td
                    className="select-none pr-4 text-right align-top text-stone-500 text-[11px] font-mono border-r border-stone-800/80 w-8 shrink-0"
                    style={{ minWidth: '2.5rem' }}
                  >
                    {idx + 1}
                  </td>
                  <td className="pl-4 align-top whitespace-pre font-mono text-stone-200">
                    {line || '\u00A0'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <pre className="whitespace-pre font-mono text-stone-200">{cleanCode}</pre>
        )}
      </div>
    </div>
  );
};
