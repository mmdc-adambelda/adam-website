export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  art: string;
  artLabel: string;
  code: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "galli-spanish-restaurant",
    title: "A slow table in Tagaytay: Galli Spanish Restaurant",
    category: "Food & Places",
    date: "Jan 10, 2021",
    readTime: "3 min read",
    excerpt: "Paella, house wine, and an intimate room in the south—an honest field note from a table worth sharing.",
    art: "galli",
    artLabel: "TAGAYTAY / 01",
    code: "14.1153° N",
    paragraphs: [
      "Galli brings a warm, intimate Spanish dining experience to Tagaytay. It is the kind of place that makes a meal feel slower—in the best possible way.",
      "The paella is the table's anchor, with seafood on top and a serving size made for sharing. Callos, gambas, salpicao, and a glass of house wine round out a menu that rewards bringing good company.",
      "The restaurant sits along Tagaytay Main Road in Sungay East, near Southridge Village. The room is compact, the team is attentive, and the atmosphere works just as well for a quiet dinner as it does for a long-overdue reunion.",
      "Verdict: come hungry, order for the table, and leave space in the evening to enjoy the pace."
    ]
  },
  {
    slug: "legends-of-runeterra-review-first-impression",
    title: "Legends of Runeterra: first impressions after the hype",
    category: "Gaming",
    date: "Jun 21, 2020",
    readTime: "4 min read",
    excerpt: "Riot's card battler feels familiar at first, then starts revealing a smart rhythm of its own.",
    art: "runeterra",
    artLabel: "PLAY / THINK",
    code: "BUILD 20.06",
    paragraphs: [
      "Riot Games entered mobile card games with a world that already felt familiar to millions of League of Legends players. The better surprise is how quickly Runeterra begins to feel like its own game.",
      "Turns are fast, the presentation is polished, and the back-and-forth action keeps both players involved. Familiar champions give new players an easy way into the deck-building systems.",
      "My first impression: approachable enough for a casual session, but layered enough to keep strategy-minded players experimenting after the tutorial ends."
    ]
  },
  {
    slug: "blade-and-soul-mobile-english-version",
    title: "Blade & Soul mobile gets the English treatment",
    category: "Tech / Gaming",
    date: "Jun 14, 2020",
    readTime: "3 min read",
    excerpt: "A PC favorite makes the jump to mobile with more of its identity intact than expected.",
    art: "blade",
    artLabel: "MOBILE / MMO",
    code: "PORT_001",
    paragraphs: [
      "Some PC-to-mobile adaptations feel like distant relatives of the original. Blade & Soul's mobile release makes a stronger first impression by keeping the look, movement, and scale players remember.",
      "The controls naturally take adjustment, but the visual language and world-building translate well to a smaller screen. An English version also makes the experience far easier to explore for a wider audience.",
      "It is still a mobile MMO—with all the convenience and compromise that implies—but this is one of the more recognizable transitions from desktop to phone."
    ]
  },
  {
    slug: "cyberzone-game-fest-2020",
    title: "Inside Cyberzone Game Fest 2020",
    category: "Events",
    date: "Feb 28, 2020",
    readTime: "3 min read",
    excerpt: "Filipino gaming steps into the spotlight with community, competition, and hardware under one roof.",
    art: "cyberzone",
    artLabel: "MANILA / LIVE",
    code: "EVENT_2020",
    paragraphs: [
      "SM Cyberzone's Game Fest brought the local gaming community together across select malls, putting tournaments, new hardware, and passionate players in the same room.",
      "The energy came from more than competition. It was a chance for casual fans, aspiring esports players, and curious shoppers to see how wide the Philippine gaming scene had become.",
      "Events like this work best when they make the community visible—and Game Fest made the case that Filipino gaming deserves a bigger stage."
    ]
  }
];

export function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
