import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import {
  BriefcaseBusiness,
  Download,
  GitFork,
  Mail,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";
import { THEME_STORAGE_KEY } from "../lib/theme";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Sherwynd Liew | Backend Developer & AWS DevOps",
  description:
    "Portfolio of Sherwynd Liew Li-Yuan, a PHP and Laravel Backend Developer with hands-on AWS ECS, EC2, CloudFormation, Docker, and CloudWatch experience.",
  openGraph: {
    type: "website",
    title: "Sherwynd Liew | Backend Developer & AWS DevOps",
    description:
      "PHP and Laravel backend development with hands-on AWS ECS, EC2, CloudFormation, Docker, and CloudWatch experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherwynd Liew | Backend Developer & AWS DevOps",
    description:
      "PHP and Laravel backend development with hands-on AWS ECS, EC2, CloudFormation, Docker, and CloudWatch experience.",
  },
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

const footerLinks = [
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/sherwynd-liew-590843171/",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub Sherwynd",
    href: "https://github.com/sherwynd",
    icon: GitFork,
  },
  {
    label: "GitHub Shawn627",
    href: "https://github.com/shawn627",
    icon: GitFork,
  },
  {
    label: "Email Sherwynd",
    href: "mailto:sherwyndliewliyuan@gmail.com",
    icon: Mail,
  },
  { label: "Call Sherwynd", href: "tel:+60169508763", icon: Phone },
] as const;

const themeInitScript = `
  (function () {
    var root = document.documentElement;
    var storedTheme = null;
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    try {
      storedTheme = window.localStorage.getItem("${THEME_STORAGE_KEY}");
    } catch (error) {}

    var theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : prefersDark ? "dark" : "light";

    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <header className="site-header">
          <a
            href="#home"
            className="brand"
            aria-label="Sherwynd portfolio home"
          >
            <span>SL</span>
            <strong>Sherwynd</strong>
          </a>
          <nav aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <a
              href="/sherwynd-liew-cv.pdf"
              className="header-cta header-download"
              download
              aria-label="Download revised CV"
              title="Download CV"
            >
              <Download aria-hidden="true" />
              <span className="header-download-label">Download CV</span>
            </a>
            <button
              type="button"
              className="header-cta header-secondary contact-trigger"
              popoverTarget="contact-options"
            >
              Contact Me
            </button>
          </div>
        </header>
        <div
          id="contact-options"
          className="contact-popover"
          popover="auto"
          aria-labelledby="contact-options-title"
        >
          <div className="contact-popover-heading">
            <div>
              <p className="eyebrow">Contact Me</p>
              <h2 id="contact-options-title">Choose how to get in touch</h2>
            </div>
            <button
              type="button"
              className="icon-button"
              popoverTarget="contact-options"
              popoverTargetAction="hide"
              aria-label="Close contact options"
              title="Close"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="contact-option-list">
            <a href="mailto:sherwyndliewliyuan@gmail.com">
              <Mail aria-hidden="true" />
              <span>
                <strong>Send Email</strong>
                <small>sherwyndliewliyuan@gmail.com</small>
              </span>
            </a>
            <a
              href="https://wa.me/60169508763"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              <span>
                <strong>WhatsApp</strong>
                <small>+60 16 950 8763</small>
              </span>
            </a>
            <a href="tel:+60169508763">
              <Phone aria-hidden="true" />
              <span>
                <strong>Call</strong>
                <small>+60 16 950 8763</small>
              </span>
            </a>
          </div>
        </div>
        {children}
        <footer className="site-footer">
          <strong>Sherwynd</strong>
          <div className="footer-icon-links" aria-label="Footer contact links">
            {footerLinks.map(({ icon: FooterIcon, ...link }) => (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                key={link.href}
              >
                <FooterIcon aria-hidden="true" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
