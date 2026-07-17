import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sherwynd | Junior Developer Portfolio",
  description:
    "A maintainable portfolio mockup for Sherwynd, a junior developer with 1 year of working experience.",
};

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <header className="site-header">
          <a href="#home" className="brand" aria-label="Sherwynd portfolio home">
            <span>SL</span>
            <strong>Sherwynd</strong>
          </a>
          <nav aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact" className="header-cta">
            Hire Me
          </a>
        </header>
        {children}
        <footer className="site-footer">
          <strong>Sherwynd</strong>
          <div>
            <a href="https://www.linkedin.com" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank">
              GitHub
            </a>
            <a href="mailto:your.email@example.com">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
