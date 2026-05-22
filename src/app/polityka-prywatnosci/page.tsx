import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatnosci | Wynajem-autobus.pl',
  description: 'Informacje o przetwarzaniu danych osobowych na www.autokar-busko.pl.',
};

export default function PrivacyPolicyPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'content/polityka-prywatnosci-pl.md'),
    'utf-8'
  );
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 prose prose-lg prose-headings:text-[#1a1a1a] prose-a:text-[#f59e0b]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </main>
  );
}
