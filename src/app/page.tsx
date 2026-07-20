import Image from "next/image";
import {
  ArrowDown,
  BriefcaseBusiness,
  Download,
  GitFork,
  Mail,
  Phone,
} from "lucide-react";
import profilePhoto from "../public/Sherwynd-profile.png";
import { calculateAge } from "../lib/calculate-age";
import {
  languages,
  portfolioStats,
  softSkills,
} from "../lib/portfolio-content";

export const revalidate = 86_400;

const contact = {
  email: "sherwyndliewliyuan@gmail.com",
  phone: "0169508763",
  linkedin: "https://www.linkedin.com/in/sherwynd-liew-590843171/",
  githubs: [
    {
      label: "Primary GitHub",
      handle: "@sherwynd",
      href: "https://github.com/sherwynd",
    },
    {
      label: "Secondary GitHub",
      handle: "@shawn627",
      href: "https://github.com/shawn627",
    },
  ],
  cv: "/sherwynd-liew-cv.pdf",
};

const skillGroups = [
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel",
      "RESTful API",
      "Node.js",
      "TypeScript",
      "MySQL",
      "OAuth 2.0",
    ],
  },
  {
    title: "AWS & DevOps",
    items: ["AWS", "ECS", "EC2", "Auto Scaling", "Docker", "CloudFormation"],
  },
  {
    title: "Monitoring & Delivery",
    items: [
      "Deployment Automation",
      "CloudWatch",
      "CI/CD",
      "GitHub",
      "Git",
      "GitLab",
      "DockerHub",
      "MariaDB",
    ],
  },
  {
    title: "Tools & Workflow",
    items: ["Jira", "Agile", "Scrum", "Cursor", "VS Code", "Codex", "Terminal"],
  },
];

const carouselSkills = skillGroups.flatMap((group) => group.items);

const experiences = [
  {
    role: "Backend Developer",
    company: "DES DIGITAL MARKETING Sdn Bhd",
    period: "Apr 2025 - Current",
    stack:
      "PHP, Laravel, Node.js, TypeScript, MySQL, AWS Lambda, ECS, EC2 Auto Scaling, CloudFormation, CloudWatch, Docker",
    impact:
      "Improved deployment stability and performance across PHP/Laravel services and AWS infrastructure, automated developer deployments, and refactored code for readability and maintainability.",
  },
  {
    role: "Backend Developer",
    company: "IP ServerOne Solutions",
    period: "Sep 2024 - Dec 2024",
    stack: "Laravel, PHP, MariaDB, Docker, Kubernetes",
    impact:
      "Implemented and enhanced Laravel REST APIs for NovaCloud Hosting, investigated and resolved assigned issues, and applied SOLID principles to improve code maintainability.",
  },
  {
    role: "Full Stack Developer",
    company: "Fusionex Group",
    period: "Jul 2023 - Dec 2023",
    stack: "Vue.js, Node.js, Express.js, MongoDB",
    impact:
      "Developed and enhanced frontend features for a custom transportation web application, contributed to API development and integration, and resolved bugs across the Vue.js and Node.js stack.",
  },
];

export default function Home() {
  const marqueeSkills = [...carouselSkills, ...carouselSkills];
  const age = calculateAge(new Date(2002, 1, 2));

  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Backend Developer | AWS DevOps</p>
            <h1>
              <span className="solid-name">Sherwynd</span>
              <span className="outline-name">Liew Li-Yuan</span>
            </h1>
            <p className="hero-description">
              I build PHP and Laravel backend services and support AWS
              infrastructure across ECS, EC2 Auto Scaling, CloudFormation,
              CloudWatch, and Docker. I focus on reliable delivery and practical
              troubleshooting from application request to server health.
            </p>

            <div className="hero-actions" aria-label="Portfolio actions">
              <button
                type="button"
                className="btn btn-primary contact-trigger"
                popoverTarget="contact-options"
              >
                Contact Me
              </button>
              <a href={contact.cv} className="btn btn-ghost" download>
                <Download aria-hidden="true" />
                Download CV
              </a>
              <a href="#about" className="btn btn-link">
                View More
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Portrait of Sherwynd Liew Li-Yuan"
          >
            <div className="profile-orbit">
              <div className="profile-card">
                <Image
                  src={profilePhoto}
                  alt="Sherwynd Liew Li-Yuan profile photo"
                  className="profile-photo"
                  priority
                />
              </div>
            </div>
            <button
              type="button"
              className="floating-badge floating-contact contact-trigger badge-top"
              popoverTarget="contact-options"
            >
              <strong>Contact</strong>
              <span>Let&apos;s talk</span>
            </button>
            <div className="floating-badge badge-bottom">
              <strong>1+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <div className="stats-strip" aria-label="Portfolio highlights">
          {portfolioStats.map((item) => (
            <div className="stat-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section split-section" id="about">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>Backend development backed by hands-on AWS operations.</h2>
        </div>
        <div className="section-copy">
          <p>
            Hi, I&apos;m Sherwynd Liew Li-Yuan, a {age}-year-old Backend
            Developer based in Kuala Lumpur / Petaling Jaya, Malaysia. I
            currently develop PHP and Laravel services while supporting AWS
            infrastructure and investigating application, server, and client
            request issues.
          </p>
          <ul className="about-points">
            <li>
              <strong>Current role</strong>
              <span>
                Backend Developer (PHP/Laravel) with AWS DevOps responsibilities
              </span>
            </li>
            <li>
              <strong>Location</strong>
              <span>Kuala Lumpur / Petaling Jaya, Malaysia</span>
            </li>
            <li>
              <strong>Main strength</strong>
              <span>
                Self-directed troubleshooting and learning across application
                and AWS infrastructure layers
              </span>
            </li>
            <li>
              <strong>Growth area</strong>
              <span>
                Formalizing hands-on AWS knowledge through structured
                certification study
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="content-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Where I have contributed</h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.company}>
              <div>
                <span>{experience.period}</span>
                <h3>{experience.role}</h3>
                <strong>{experience.company}</strong>
              </div>
              <p>{experience.impact}</p>
              <small>{experience.stack}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section skill-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Backend and DevOps technical stack</h2>
        </div>

        <div className="skill-carousel" aria-label="Scrolling skills list">
          <div className="skill-track">
            {marqueeSkills.map((skill, index) => (
              <span className="skill-chip" key={`${skill}-${index}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-group-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.slice(0, 6).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section working-style-section">
        <div className="working-style-heading">
          <div>
            <p className="eyebrow">Working Style</p>
            <h2>How I work and communicate</h2>
          </div>
          <p>
            Practical habits that help me move technical work from unclear
            problems to reliable delivery.
          </p>
        </div>

        <div className="working-style-grid">
          <article className="working-card">
            <header>
              <div>
                <span className="working-card-kicker">Core strengths</span>
                <h3>Soft Skills</h3>
              </div>
              <span className="working-card-count">04</span>
            </header>
            <div className="working-list">
              {softSkills.map((skill) => (
                <div className="working-row" key={skill.name}>
                  <strong>{skill.name}</strong>
                  <span>{skill.cue}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="working-card">
            <header>
              <div>
                <span className="working-card-kicker">Communication</span>
                <h3>Languages</h3>
              </div>
              <span className="working-card-count">03</span>
            </header>
            <div className="working-list">
              {languages.map((language) => (
                <div className="working-row" key={language.name}>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to Backend Developer and AWS DevOps opportunities.</h2>
          <div className="contact-icon-links" aria-label="Contact information">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${contact.email}`}
            >
              <Mail aria-hidden="true" />
              <span className="sr-only">{contact.email}</span>
            </a>
            <a
              href={`tel:+60${contact.phone.slice(1)}`}
              aria-label={`Phone ${contact.phone}`}
            >
              <Phone aria-hidden="true" />
              <span className="sr-only">{contact.phone}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <BriefcaseBusiness aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
            {contact.githubs.map((github) => (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                aria-label={github.label}
                className="github-account"
                key={github.href}
              >
                <GitFork aria-hidden="true" />
                <span>
                  <strong>{github.label}</strong>
                  <small>{github.handle}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-cta-group">
          <button
            type="button"
            className="btn btn-primary contact-trigger"
            popoverTarget="contact-options"
          >
            Contact Me
          </button>
          <a href={contact.cv} className="btn btn-ghost" download>
            <Download aria-hidden="true" />
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}
