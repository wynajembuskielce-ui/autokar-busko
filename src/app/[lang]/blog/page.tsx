import BlogIndexClient from '@/src/components/BlogIndexClient';

export const dynamic = 'force-dynamic';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <BlogIndexClient lang={lang} />;
}
