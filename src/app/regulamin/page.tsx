import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulamin świadczenia usług | Autokar Busko',
};

export default function RegulaminPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'content/regulamin.md'),
    'utf-8'
  );
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 prose prose-lg prose-headings:text-[#1a1a1a] prose-a:text-[#639922]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </main>
  );
}
