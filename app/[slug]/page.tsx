import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, findArticle } from "../content";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  return article ? { title: `${article.title} | Adam Belda`, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  return (
    <main className="article-page">
      <header className="site-header shell">
        <Link className="brand" href="/"><span className="brand-mark">AB</span><span className="brand-name">Adam Belda</span></Link>
        <Link className="header-cta" href="/#journal">Back to journal <span aria-hidden="true">↙</span></Link>
      </header>
      <article className="article-detail shell">
        <div className="article-kicker"><span>{article.category}</span>{article.date} · {article.readTime}</div>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.excerpt}</p>
        <div className={`article-hero-art article-art art-${article.art}`}>
          <span className="art-code">{article.code}</span><div className="art-orbit" /><strong>{article.artLabel}</strong>
        </div>
        <div className="article-body">
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <footer className="article-end">
          <span>— AB</span>
          <Link href="/#journal">Read more field notes <span aria-hidden="true">→</span></Link>
        </footer>
      </article>
    </main>
  );
}
