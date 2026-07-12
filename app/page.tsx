import Link from "next/link";
import { articles } from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [featured, ...moreArticles] = articles;
  const basePath = process.env.GITHUB_ACTIONS === "true" ? "/adam-website" : "";

  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header shell">
          <Link className="brand" href="/" aria-label="Adam Belda home">
            <span className="brand-mark">AB<span>.</span></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#journal">Journal</a>
            <a href="#topics">Topics</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="menu-link" href="#contact">Let&apos;s talk <Arrow /></a>
        </header>

        <div className="hero-inner shell">
          <p className="availability"><i /> Available for stories &amp; collaborations</p>
          <h1>ADAM BELDA</h1>
          <div className="hero-stage">
            <div className="hero-note hero-note-left">
              <span>01 / MANILA</span>
              <p>Digital marketer.<br />Curious human.<br />Useful storyteller.</p>
            </div>
            <div className="portrait-frame">
              <div className="portrait-orbit" />
              <div className="portrait-grid" />
              <img className="portrait-photo" src={`${basePath}/adam-belda.jpg`} alt="Adam Belda" />
              <small>EST. 2018</small>
            </div>
            <div className="hero-note hero-note-right">
              <div className="mini-avatars"><b>AB</b><b>TC</b><b>ML</b></div>
              <p><strong>Tech, taste &amp; real life.</strong><br />Field notes without the borrowed hype.</p>
            </div>
          </div>
          <div className="role-strip">
            <span>TECHNOLOGY</span><i /> <span>GAMING</span><i /> <span>FOOD &amp; PLACES</span><i /> <span>DIGITAL CULTURE</span>
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="shell intro-grid">
          <div className="section-tag"><span>02</span> About Adam</div>
          <div className="intro-copy">
            <h2>I FOLLOW CURIOSITY<br />WHEREVER IT <em>LEADS.</em></h2>
            <p className="intro-lead">I write where technology, culture, and everyday life overlap—turning firsthand experiences into useful stories.</p>
            <div className="intro-columns">
              <p>From trying a new game to finding a table worth the drive, every article starts with the same question: is this genuinely worth your time?</p>
              <p>This journal is a living archive of what I&apos;m testing, learning, eating, and noticing from Manila and beyond.</p>
            </div>
          </div>
          <div className="intro-stamp">
            <span>WRITE / TEST / EXPLORE /</span>
            <strong>AB</strong>
          </div>
        </div>
      </section>

      <section className="topics" id="topics">
        <div className="shell">
          <div className="section-heading dark-heading">
            <div className="section-tag"><span>03</span> What I cover</div>
            <h2>STORIES BUILT<br />FOR REAL LIFE.</h2>
          </div>
          <div className="topic-grid">
            {[
              ["01", "TECH & GEAR", "Hands-on thoughts about the devices and digital tools that earn a place in everyday routines."],
              ["02", "GAMING CULTURE", "First impressions, events, and the communities shaping how people play in the Philippines."],
              ["03", "FOOD & PLACES", "Honest field notes from memorable tables, weekends away, and places worth the trip."],
              ["04", "DIGITAL LIFE", "Ideas from marketing, online culture, and the constant work of living well with technology."],
            ].map(([number, title, copy]) => (
              <article className="topic-card" key={number}>
                <div><span>{number}</span><b><Arrow /></b></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Adam's editorial themes">
        <div>TECH WITH PURPOSE <span>✳</span> LIFE WITH TASTE <span>✳</span> STORIES WITH SIGNAL <span>✳</span></div>
      </section>

      <section className="journal" id="journal">
        <div className="shell">
          <div className="section-heading">
            <div className="section-tag"><span>04</span> Latest journal</div>
            <div>
              <h2>RECENT FIELD<br />NOTES.</h2>
              <p>Ideas, reviews, and useful discoveries from Adam&apos;s corner of the internet.</p>
            </div>
          </div>

          <article className="featured-story">
            <Link className={`story-art art-${featured.art}`} href={`/${featured.slug}`} aria-label={`Read ${featured.title}`}>
              <span>{featured.code}</span>
              <div className="story-ring" />
              <strong>{featured.artLabel}</strong>
            </Link>
            <div className="featured-copy">
              <p className="story-meta">{featured.category} <span>/</span> {featured.date}</p>
              <h3><Link href={`/${featured.slug}`}>{featured.title}</Link></h3>
              <p>{featured.excerpt}</p>
              <Link className="circle-link" href={`/${featured.slug}`} aria-label="Read featured story"><Arrow /></Link>
            </div>
          </article>

          <div className="story-grid">
            {moreArticles.map((article, index) => (
              <article className="story-card" key={article.slug}>
                <Link className={`story-art art-${article.art}`} href={`/${article.slug}`}>
                  <span>{article.code}</span><div className="story-ring" /><strong>{article.artLabel}</strong>
                </Link>
                <p className="story-meta">0{index + 2} / {article.category}</p>
                <h3><Link href={`/${article.slug}`}>{article.title}</Link></h3>
                <Link className="text-arrow" href={`/${article.slug}`}>Read story <Arrow /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <div className="section-tag"><span>05</span> Open channel</div>
          <h2>HAVE SOMETHING<br />WORTH <em>SHARING?</em></h2>
          <div className="contact-row">
            <p>Products, events, good food, useful ideas—if it fits the journal, Adam wants to hear about it.</p>
            <a className="contact-button" href="mailto:hello@adambelda.net">Start a conversation <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <Link className="brand" href="/"><span className="brand-mark">AB<span>.</span></span></Link>
        <p>Technology, lifestyle, and useful curiosity.<br />Made in Manila.</p>
        <nav><a href="#about">About</a><a href="#journal">Journal</a><a href="#contact">Contact</a></nav>
        <a className="back-top" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
