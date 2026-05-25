import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const titles: Record<string, string> = {
    en: 'Privacy Policy | Autokar Busko',
    de: 'Datenschutzerklärung | Autokar Busko',
  };
  return { title: titles[lang] ?? 'Polityka prywatności | Autokar Busko' };
}

export default async function LangPolitykaPrywatnosci({ params }: Props) {
  const { lang } = await params;

  const file =
    lang === 'en' ? 'polityka-prywatnosci-en.md' :
    lang === 'de' ? 'polityka-prywatnosci-de.md' :
    'polityka-prywatnosci-pl.md';

  const content = fs.readFileSync(
    path.join(process.cwd(), 'content', file),
    'utf-8'
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 prose prose-lg prose-headings:text-[#1a1a1a] prose-a:text-[#639922]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </main>
  );
}
