import { useState } from 'react';
import type { FormEvent } from 'react';

const commandResponses: Record<string, string> = {
  help: 'Try: projects · skills · contact',
  projects: 'Mohammed Soboh, eDentist.ai, GuruHub, and a social platform.',
  skills: 'React · Next.js · TypeScript · Tailwind CSS',
  contact: 'aseelalali81@gmail.com',
};

export function useTerminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const submitCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = command.trim().toLowerCase();
    if (!normalized) return;

    const response = commandResponses[normalized] ?? 'Command not found. Type “help”.';
    setHistory((current) => [...current.slice(-2), `> ${normalized}`, response]);
    setCommand('');
  };

  return { command, history, setCommand, submitCommand };
}
