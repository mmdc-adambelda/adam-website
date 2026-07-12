import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adambelda.net"),
  title: { default: "Adam Belda — Tech, Taste & a Life Well Designed", template: "%s | Adam Belda" },
  description: "Adam Belda writes honest field notes on technology, gaming, food, places, and modern life from Manila.",
  openGraph: { title: "Adam Belda — Tech, Taste & Real Life", description: "Technology, lifestyle, and useful curiosity from Manila.", type: "website", siteName: "Adam Belda", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Adam Belda — Tech, Taste & Real Life" }] },
  twitter: { card: "summary_large_image", title: "Adam Belda", description: "Tech, taste & real life.", images: ["/og-v2.png"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" id="top"><body>{children}</body></html>;
}
