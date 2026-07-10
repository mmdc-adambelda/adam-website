import Link from "next/link";
import { articles } from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [featured, ...moreArticles] = articles;

  return (
    <main>
      <header className="site-header shell">
        <Link className="brand" href="/" aria-label="Adam Belda home">
          <span className="brand-mark">AB</span>
          <span className="brand-name">Adam Belda</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#journal">Journal</a>
          <a href="#about">About</a>
          <a href="#connect">Connect</a>
        </nav>

        <a className="header-cta" href="#connect">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Manila, Philippines · Online</p>
          <h1 id="hero-title">Tech, taste &amp; a life<br />well <em>designed.</em></h1>
          <p className="hero-intro">
            I&apos;m Adam—a digital marketer, tech enthusiast, and curious human
            sharing honest takes on the gear, games, places, and ideas worth
            making time for.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#journal">Explore the journal <Arrow /></a>
            <a className="text-link" href="#about">More about Adam <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Adam Belda editorial monogram">
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="hero-grid" />
          <div className="monogram">A<span>/</span>B</div>
          <p className="visual-label">Digital culture<br />in real life</p>
          <p className="visual-index">EST. 2018<br />14.5995° N</p>
        </div>
      </section>

      <section className="ticker" aria-label="Topics covered">
        <div>
          <span>Consumer tech</span><i>✦</i><span>Modern living</span><i>✦</i>
          <span>Gaming culture</span><i>✦</i><span>Food &amp; places</span><i>✦</i>
          <span>Digital marketing</span><i>✦</i>
        </div>
      </section>

      <section className="journal shell" id="journal" aria-labelledby="journal-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Fresh from the feed</p>
            <h2 id="journal-title">Latest field notes</h2>
          </div>
          <p>Thoughtful reads for people who want their tech useful, their weekends memorable, and their feeds less noisy.</p>
        </div>

        <article className="featured-card">
          <div className={`article-art art-${featured.art}`}>
            <span className="art-code">{featured.code}</span>
            <div className="art-orbit" />
            <strong>{featured.artLabel}</strong>
          </div>
          <div className="featured-copy">
            <p className="article-meta"><span>{featured.category}</span>{featured.date} · {featured.readTime}</p>
            <h3><Link href={`/${featured.slug}`}>{featured.title}</Link></h3>
            <p>{featured.excerpt}</p>
            <Link className="read-link" href={`/${featured.slug}`}>Read field note <Arrow /></Link>
          </div>
        </article>

        <div className="article-grid">
          {moreArticles.map((article) => (
            <article className="article-card" key={article.slug}>
              <div className={`article-art art-${article.art}`}>
                <span className="art-code">{article.code}</span>
                <div className="art-orbit" />
                <strong>{article.artLabel}</strong>
              </div>
              <p className="article-meta"><span>{article.category}</span>{article.date}</p>
              <h3><Link href={`/${article.slug}`}>{article.title}</Link></h3>
              <p>{article.excerpt}</p>
              <Link className="read-link" href={`/${article.slug}`}>Read story <Arrow /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about" aria-labelledby="about-title">
        <div className="about-index">01<span>/</span>ABOUT</div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Behind the screen</p>
          <h2 id="about-title">Curiosity is the operating system.</h2>
          <p className="about-lead">I work where technology, storytelling, and everyday life overlap.</p>
          <div className="about-columns">
            <p>From reviewing a new game to finding a table worth the drive, I write from experience—clear, useful, and with no borrowed hype.</p>
            <p>This journal is a running log of what I&apos;m learning, testing, eating, and thinking about from Manila and beyond.</p>
          </div>
        </div>
        <div className="about-stats" aria-label="Adam's interests">
          <div><strong>06+</strong><span>Years writing online</span></div>
          <div><strong>05</strong><span>Core topics explored</span></div>
          <div><strong>∞</strong><span>Things left to learn</span></div>
        </div>
      </section>

      <section className="connect shell" id="connect" aria-labelledby="connect-title">
        <p className="eyebrow"><span /> Open channel</p>
        <h2 id="connect-title">Have a story, product,<br />or place I should know?</h2>
        <p>Collaborations, event invites, product reviews, or just a good recommendation—my inbox is open.</p>
        <a className="button button-light" href="mailto:hello@adambelda.net">hello@adambelda.net <Arrow /></a>
        <div className="connect-orbit orbit-a" /><div className="connect-orbit orbit-b" />
      </section>

      <footer className="footer shell">
        <Link className="brand" href="/"><span className="brand-mark">AB</span><span className="brand-name">Adam Belda</span></Link>
        <p>Technology, lifestyle, and useful curiosity.<br />Made in Manila.</p>
        <div><a href="#journal">Journal</a><a href="#about">About</a><a href="mailto:hello@adambelda.net">Email</a></div>
        <a className="back-top" href="#top" aria-label="Back to top">↑</a>
      </footer>
    </main>
  );
}
