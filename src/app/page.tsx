import Image from "next/image";
import profilePhoto from "../public/Sherwynd-profile.jpeg";

const contact = {
  email: "sherwyndliewliyaun@gmail.com",
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

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "30%", label: "Infra Cost Reduced" },
  { value: "45%", label: "Traffic Load Reduced" },
  { value: "3.78", label: "UM CGPA" },
];

const skillGroups = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "TypeScript",
      "PHP",
      "Laravel",
      "RESTful API",
      "OAuth 2.0",
      "Microservices",
      "API Development",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "JavaScript",
    ],
  },
  {
    title: "Cloud & Data",
    items: [
      "AWS Lambda",
      "AWS ECS",
      "Docker",
      "CI/CD",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Postgres",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Agile",
      "Scrum",
      "Cursor",
      "VSCode",
      "Codex",
      "DockerHub",
    ],
  },
];

const carouselSkills = skillGroups.flatMap((group) => group.items);

const experiences = [
  {
    role: "Backend Developer",
    company: "DES DIGITAL MARKETING Sdn Bhd",
    period: "Apr 2025 - Current",
    stack:
      "Node.js, TypeScript, AWS Lambda, OAuth 2.0, Docker, AWS ECS, PHP, Laravel, MySQL",
    impact:
      "Built AWS Lambda authentication services, containerized backend services, and refactored legacy modules with SOLID principles.",
  },
  {
    role: "Backend Developer",
    company: "IP ServerOne Solutions",
    period: "Sep 2024 - Dec 2024",
    stack: "Laravel, PHP, MariaDB, Docker, Kubernetes",
    impact:
      "Contributed REST APIs and automated testing for NovaCloud Hosting, a multi-region cloud platform.",
  },
  {
    role: "Full Stack Developer",
    company: "Fusionex Group",
    period: "Jul 2023 - Dec 2023",
    stack: "Vue.js, Node.js, Express.js, MongoDB",
    impact:
      "Developed a custom transportation web application and integrated a handwriting recognition module in an Agile Scrum team.",
  },
];

const projects = [
  {
    title: "Water Potability Prediction",
    tag: "Machine Learning / Next.js",
    githubLink: "https://github.com/sherwynd/water-potability-prediction",
    description:
      "Deployed an interactive water safety prediction app with server-side analytics, exploratory data analysis, and model testing.",
  },
  {
    title: "Student Sport Portal",
    tag: "Full-stack / OAuth",
    githubLink: "https://github.com/sherwynd/FYP-Student-Sport-Portal",
    description:
      "Built a Next.js portal with event CRUD, Google OAuth 2.0, dashboards, and automated certificate generation.",
  },
  {
    title: "Ecommerce Sport Website",
    tag: "Commerce / Vercel",
    githubLink: "https://github.com/sherwynd/web-programming-form",
    description:
      "Created an ecommerce demo with payment gateway integration, order management, blogs, and event registration.",
  },
];

const education = [
  "University Malaya - Bachelor of Information System, CGPA 3.78/4.00",
  "Johor Matriculation College - Science Stream",
  "Sultan Abu Bakar School - Science Stream",
];

const softSkills = [
  "Problem-solving",
  "Communication",
  "Adaptability",
  "Project management",
  "Critical thinking",
  "Positive thinking",
];

const languages = [
  { name: "English", level: "Native" },
  { name: "Chinese", level: "Native" },
  { name: "Malay", level: "Advanced" },
];

function Icon({ name }: { name: "mail" | "phone" | "linkedin" | "github" }) {
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

export default function Home() {
  const marqueeSkills = [...carouselSkills, ...carouselSkills];

  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Backend Developer | Software Engineer</p>
            <h1>
              <span className="solid-name">Sherwynd</span>
              <span className="outline-name">Liew Li-Yuan</span>
            </h1>
            <p className="hero-description">
              Backend-focused junior developer with 1+ years of experience
              building scalable web applications, RESTful APIs, cloud-native
              services, and practical full-stack products using Node.js,
              TypeScript, Laravel, AWS, and Docker.
            </p>

            <div className="hero-actions" aria-label="Portfolio actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href={contact.cv} className="btn btn-ghost" download>
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile design placeholder">
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
            <div className="floating-badge badge-top">
              <strong>30%</strong>
              <span>Cost Reduction</span>
            </div>
            <div className="floating-badge badge-bottom">
              <strong>1+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <div className="stats-strip" aria-label="Portfolio highlights">
          {stats.map((item) => (
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
          <h2>Fresh graduate, real backend product experience.</h2>
        </div>
        <div className="section-copy">
          <p>
            I graduated from University Malaya and have worked across backend,
            full-stack, cloud, and API-focused roles. I enjoy turning unclear
            technical problems into maintainable services, clean data flows, and
            user-ready web products.
          </p>
          <div className="check-grid">
            {education.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
          <h2>Technical stack from my CV</h2>
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

      <section className="content-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects worth showing first</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`View GitHub for ${project.title}`}
              >
                <Icon name="github" />
                View GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section">
        <div>
          <p className="eyebrow">Working Style</p>
          <h2>Soft skills and languages</h2>
        </div>
        <div className="mini-list-grid">
          <div>
            <h3>Soft Skills</h3>
            {softSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div>
            <h3>Languages</h3>
            <div className="language-list">
              {languages.map((language) => (
                <div className="language-row" key={language.name}>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to junior backend or full-stack roles.</h2>
          <div className="contact-icon-links" aria-label="Contact information">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${contact.email}`}
            >
              <Icon name="mail" />
              <span className="sr-only">{contact.email}</span>
            </a>
            <a
              href={`tel:+60${contact.phone.slice(1)}`}
              aria-label={`Phone ${contact.phone}`}
            >
              <Icon name="phone" />
              <span className="sr-only">{contact.phone}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Icon name="linkedin" />
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
                <Icon name="github" />
                <span>
                  <strong>{github.label}</strong>
                  <small>{github.handle}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
        <a href={contact.cv} className="btn btn-primary" download>
          Download CV
        </a>
      </section>
    </main>
  );
}
