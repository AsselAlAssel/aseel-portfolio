import { useId } from 'react';
import { useTerminal } from '../../hooks/useTerminal';

export function TerminalCard() {
  const inputId = useId();
  const { command, history, setCommand, submitCommand } = useTerminal();

  return (
    <div className="terminal glass-panel" data-cursor="code">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
          aseel.ts
        </span>
      </div>
      <div className="min-h-[260px] p-5 font-mono text-xs leading-6 sm:p-7 sm:text-sm">
        <p>
          <span className="text-violet">const</span> <span className="text-blue">developer</span>{' '}
          <span className="text-primary">= {'{'}</span>
        </p>
        <p className="pl-4">
          <span className="text-cyan">name</span>:{' '}
          <span className="text-emerald-300">&quot;Aseel Hussain Al-Ali&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-cyan">role</span>:{' '}
          <span className="text-emerald-300">&quot;Frontend Engineer&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-cyan">location</span>:{' '}
          <span className="text-emerald-300">&quot;Jenin, Palestine&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-cyan">mindset</span>:{' '}
          <span className="text-emerald-300">&quot;Always learning&quot;</span>,
        </p>
        <p className="text-primary">{'}'};</p>
        <div className="mt-5 min-h-[54px] text-secondary" aria-live="polite">
          {history.map((line, index) => (
            <p key={`${line}-${index}`} className={line.startsWith('>') ? 'text-cyan' : ''}>
              {line}
            </p>
          ))}
        </div>
        <form
          onSubmit={submitCommand}
          className="mt-3 flex items-center gap-2 border-t border-border pt-4"
        >
          <label htmlFor={inputId} className="text-cyan">
            &gt;
          </label>
          <input
            id={inputId}
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="type help"
            autoComplete="off"
            spellCheck="false"
            className="min-w-0 flex-1 bg-transparent text-primary outline-none placeholder:text-secondary/60"
            aria-label="Terminal command"
          />
          <span className="terminal-cursor" aria-hidden="true" />
        </form>
      </div>
    </div>
  );
}
