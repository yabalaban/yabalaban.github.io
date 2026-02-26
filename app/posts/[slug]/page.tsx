import type { Metadata } from 'next';
import { getPostData, getAllPostSlugs } from '@/lib/posts';

// Generate static paths for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);
  const url = `https://yabalaban.github.io/posts/${params.slug}`;

  return {
    title: `${post.title} — Alexander Balaban`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: ['Alexander Balaban'],
      siteName: 'Alexander Balaban',
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <div className="min-h-screen font-mono" style={{ background: 'rgb(var(--bg-primary))', color: 'rgb(var(--text-primary))' }}>
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgb(var(--text-primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--text-primary)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 'var(--grid-opacity)'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-16">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs transition-colors mb-12 border px-4 py-2 rounded back-link"
        >
          <span>←</span>
          <span>Back to posts</span>
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": postData.title,
              "description": postData.excerpt,
              "datePublished": postData.date,
              "url": `https://yabalaban.github.io/posts/${params.slug}`,
              "author": {
                "@type": "Person",
                "name": "Alexander Balaban",
                "url": "https://yabalaban.github.io"
              }
            })
          }}
        />

        {/* Article */}
        <article>
          <header className="mb-12 pb-8" style={{ borderBottom: '1px solid rgb(var(--border-primary))' }}>
            <div className="flex items-center gap-3 mb-4">
              <time className="text-xs font-normal" style={{ color: 'rgb(var(--text-tertiary))' }}>
                {new Date(postData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).replace(/\//g, '.')}
              </time>
            </div>
            <h1 className="text-2xl font-normal leading-tight" style={{ color: 'rgb(var(--text-primary))' }}>
              {postData.title}
            </h1>
          </header>

          {/* Article content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: postData.content || '' }}
          />
        </article>

        {/* Footer */}
        <footer className="mt-20 pt-8" style={{ borderTop: '1px solid rgb(var(--border-primary))' }}>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs transition-colors border px-4 py-2 rounded back-link"
          >
            <span>←</span>
            <span>Back to posts</span>
          </a>
        </footer>
      </div>
    </div>
  );
}
