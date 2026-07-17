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
  title: "Sherwynd Liew | Backend Developer Portfolio",
  description:
    "Backend developer portfolio for Sherwynd Liew Li-Yuan, featuring experience, projects, technical skills, and CV.",
};

const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

const footerLinks = [
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/sherwynd-liew-590843171/",
    icon: "linkedin",
  },
  { label: "GitHub Sherwynd", href: "https://github.com/sherwynd", icon: "github" },
  { label: "GitHub Shawn627", href: "https://github.com/shawn627", icon: "github" },
  { label: "Email Sherwynd", href: "mailto:sherwyndliewliyaun@gmail.com", icon: "mail" },
  { label: "Call Sherwynd", href: "tel:+60169508763", icon: "phone" },
] as const;

function FooterIcon({ name }: { name: "mail" | "phone" | "linkedin" | "github" }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.93c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92v2.85c0 .28.18.6.69.5A10.12 10.12 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.37 7.95H2.46v13.1h2.91V7.95ZM5.7 4.1a1.72 1.72 0 1 0-3.44 0 1.72 1.72 0 0 0 3.44 0Zm15.84 9.75c0-3.53-1.88-5.17-4.39-5.17a3.78 3.78 0 0 0-3.42 1.88h-.04V7.95h-2.79v13.1h2.91v-6.48c0-1.71.32-3.36 2.44-3.36 2.09 0 2.12 1.95 2.12 3.47v6.37h2.91l.26-7.2Z" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.3-.3.73-.4 1.12-.27 1.23.41 2.55.63 3.91.63.62 0 1.12.5 1.12 1.12v3.48c0 .62-.5 1.12-1.12 1.12C10.66 21.76 2.24 13.34 2.24 3.56c0-.62.5-1.12 1.12-1.12h3.49c.62 0 1.12.5 1.12 1.12 0 1.36.22 2.68.63 3.91.12.39.03.82-.28 1.12l-1.7 2.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.75 5.25h16.5c.83 0 1.5.67 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5H3.75c-.83 0-1.5-.67-1.5-1.5V6.75c0-.83.67-1.5 1.5-1.5Zm.78 2.3 7.47 5.2 7.47-5.2H4.53Zm15.72 9.24V9.2l-7.82 5.45a.75.75 0 0 1-.86 0L3.75 9.2v7.59h16.5Z" />
    </svg>
  );
}

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
          <div className="header-actions">
            <a href="mailto:sherwyndliewliyaun@gmail.com" className="header-link">
              Email
            </a>
            <a href="/sherwynd-liew-cv.pdf" className="header-cta" download>
              Download CV
            </a>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <strong>Sherwynd</strong>
          <div className="footer-icon-links" aria-label="Footer contact links">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                key={link.href}
              >
                <FooterIcon name={link.icon} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
