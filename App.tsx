import './index.css'

export default function App() {
  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav>
        <div className="nav-logo">Hassan<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:hassanpk225@gmail.com" className="nav-email">hassanpk225@gmail.com</a>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <span className="hero-tag">✦ Available for work</span>
        <h1>Hi, I'm <span className="accent">Hassan</span>.<br />Builder &amp; Creator.</h1>
        <p className="hero-desc">
          I craft digital experiences that are fast, clean, and built to last.
          Whether it's a web app, a design system, or a clever automation — I ship it.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="mailto:hassanpk225@gmail.com" className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <section id="skills">
        <p className="section-label">What I do</p>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <div className="skills-grid">
          {[
            'JavaScript / TypeScript',
            'React / Next.js',
            'Node.js',
            'Python',
            'HTML &amp; CSS',
            'UI / UX Design',
            'Git &amp; GitHub',
            'REST APIs',
            'Databases',
            'Cloud Deployment',
          ].map((skill) => (
            <div key={skill} className="skill-card">{skill}</div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {[
            {
              emoji: '🌐',
              name: 'Project One',
              desc: 'A brief description of what this project is and the problem it solves.',
              tags: ['React', 'Node.js', 'PostgreSQL'],
            },
            {
              emoji: '⚡',
              name: 'Project Two',
              desc: 'Another great project — showcasing different skills and a clean user experience.',
              tags: ['Next.js', 'TypeScript', 'Tailwind'],
            },
            {
              emoji: '🚀',
              name: 'Project Three',
              desc: 'Something you built that you\'re proud of. Tell the story here.',
              tags: ['Python', 'FastAPI', 'Docker'],
            },
          ].map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-image">{p.emoji}</div>
              <div className="project-body">
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <p className="section-label">About Me</p>
        <h2 className="section-title">A bit about Hassan</h2>
        <div className="about-grid">
          <div className="about-avatar">H</div>
          <div className="about-text">
            <p>
              I'm a developer and creator who loves building things that actually work —
              clean, fast, and useful. I've spent years learning the full stack and I enjoy
              every layer, from designing interfaces to wrangling backend logic.
            </p>
            <p>
              When I'm not coding, I'm exploring new tools, contributing to open source,
              or finding ways to make things better than they were yesterday.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="contact-inner">
          <h2>Let's work together.</h2>
          <p>Have something in mind? Reach out anytime — I typically reply within 24 hours.</p>
          <a href="mailto:hassanpk225@gmail.com" className="contact-email">hassanpk225@gmail.com</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        &copy; 2026 Hassan. Built with care.
      </footer>
    </div>
  )
}