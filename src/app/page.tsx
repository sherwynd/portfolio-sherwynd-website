const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "8", label: "Practice Projects" },
  { value: "4", label: "Core Stacks" },
  { value: "100%", label: "Open To Learn" },
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "Laravel / PHP",
  "REST APIs",
  "MySQL",
  "Tailwind CSS",
];

const projects = [
  {
    title: "Leave Management System",
    tag: "Full-stack",
    description:
      "A HR workflow app concept with employee leave requests, approval status, and clean admin views.",
  },
  {
    title: "Portfolio Generator",
    tag: "Frontend",
    description:
      "A guided portfolio builder that turns user inputs into structured portfolio sections and project copy.",
  },
  {
    title: "Provider Integration Work",
    tag: "Backend",
    description:
      "Real working experience reading API docs, debugging payloads, and improving provider-facing flows.",
  },
];

const timeline = [
  "Fresh graduate with hands-on software development training",
  "1 year working experience contributing to real product tasks",
  "Currently growing as a junior developer focused on clean, maintainable work",
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Junior Developer Portfolio</p>
            <h1>
              Sherwynd
              <span>Software Developer</span>
            </h1>
            <p className="hero-description">
              Fresh graduate with 1 year of working experience, building clean
              web interfaces, backend flows, and practical tools while growing
              into a dependable full-stack developer.
            </p>

            <div className="hero-actions" aria-label="Portfolio actions">
              <a href="#projects" className="btn btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile design placeholder">
            <div className="profile-orbit">
              <div className="profile-card">
                <span className="profile-initials">SL</span>
                <p>Replace with your photo later</p>
              </div>
            </div>
            <div className="floating-badge badge-top">
              <strong>Junior</strong>
              <span>Developer</span>
            </div>
            <div className="floating-badge badge-bottom">
              <strong>1 yr</strong>
              <span>Experience</span>
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
          <h2>Building my foundation through real product work.</h2>
        </div>
        <div className="section-copy">
          <p>
            I am early in my developer journey, but I already value readable
            code, clear communication, and understanding the real problem before
            jumping into implementation. This mock portfolio is designed so each
            section can grow as I collect stronger projects and achievements.
          </p>
          <div className="check-grid">
            {timeline.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools I can work with now</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-pill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Project placeholders to refine later</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to junior developer opportunities.</h2>
        </div>
        <a href="mailto:your.email@example.com" className="btn btn-primary">
          Email Me
        </a>
      </section>
    </main>
  );
}
