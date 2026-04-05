import { useEffect, useRef } from 'react'
import './App.css'

/* ── Card mouse-glow effect ── */
function useCardGlow() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card')
    const handler = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      e.currentTarget.style.setProperty('--mx', `${x}%`)
      e.currentTarget.style.setProperty('--my', `${y}%`)
    }
    cards.forEach(c => c.addEventListener('mousemove', handler))
    return () => cards.forEach(c => c.removeEventListener('mousemove', handler))
  }, [])
}

/* ── Data ── */
const INTERESTS = [
  { icon: '💻', label: 'Open Source' },
  { icon: '🎮', label: 'Gaming' },
  { icon: '🎨', label: 'Diseño UI/UX' },
  { icon: '🤖', label: 'IA & LLMs' },
  { icon: '📐', label: 'Arquitectura' },
  { icon: '🎬', label: 'Cine' },
]

const EXPERIENCE = [
  {
    company: 'Doble Filo Studio',
    role: 'Co-Fundador & Dev Lead',
    period: '2022 — now',
    badge: 'Activo',
    badgeClass: 'green',
    bullets: [
      'Estudio creativo en Colombia y España — branding, web, digital.',
      'Arquitectura full-stack de proyectos para clientes.',
      'Integración de IA conversacional en productos web.',
      'Stack: React, Next.js, Node.js, PostgreSQL, Netlify.',
    ],
  },
  {
    company: 'Freelancer',
    role: 'Desarrollador Full Stack',
    period: '2020 — now',
    badge: '2020 — now',
    badgeClass: '',
    bullets: [
      'APIs REST con Express.js y bases de datos SQL/NoSQL.',
      'Interfaces React/Next.js con diseño personalizado.',
      'Automatizaciones y scripts Python para clientes.',
      'Proyectos para clientes de múltiples países.',
    ],
  },
]

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    chips: [
      { name: 'React', cls: 'cyan' },
      { name: 'Next.js', cls: 'blue' },
      { name: 'Vite', cls: 'yellow' },
      { name: 'TypeScript', cls: 'blue' },
      { name: 'Tailwind CSS', cls: 'cyan' },
      { name: 'SCSS', cls: 'pink' },
    ],
  },
  {
    label: 'Backend',
    chips: [
      { name: 'Node.js', cls: 'green' },
      { name: 'Express.js', cls: 'green' },
      { name: 'Python', cls: 'yellow' },
      { name: 'API REST', cls: 'orange' },
      { name: 'Netlify Fn', cls: 'cyan' },
    ],
  },
  {
    label: 'Bases de Datos',
    chips: [
      { name: 'PostgreSQL', cls: 'blue' },
      { name: 'MySQL', cls: 'orange' },
      { name: 'MongoDB', cls: 'green' },
      { name: 'SQLite/Turso', cls: 'cyan' },
    ],
  },
  {
    label: 'Herramientas',
    chips: [
      { name: 'Git & GitHub', cls: '' },
      { name: 'VS Code', cls: '' },
      { name: 'Figma', cls: 'pink' },
      { name: 'Netlify', cls: 'cyan' },
      { name: 'Linux', cls: '' },
    ],
  },
]

const EDUCATION = [
  { title: 'Técnico Superior', sub: 'Informática', year: '2020 — 2022' },
  { title: 'Bachiller', sub: 'Ciencias', year: '2019' },
  { title: 'Cursos & Cert.', sub: 'React, Python, SQL, UX Design', year: '2020 — 2025' },
]

const PORTFOLIO_LINKS = [
  { label: 'GitHub', dot: 'dot-blue', href: 'https://github.com/' },
  { label: 'LinkedIn', dot: 'dot-cyan', href: '#' },
  { label: 'Doble Filo', dot: 'dot-orange', href: '#' },
  { label: 'Instagram', dot: 'dot-pink', href: '#' },
  { label: 'Dribbble', dot: 'dot-green', href: '#' },
]

const DETAILS = [
  { icon: '🌍', text: 'Colombia / España' },
  { icon: '✉️', text: 'contacto@doblefilo.xyz' },
  { icon: '💬', text: '+57 300 360 5009' },
  { icon: '🕐', text: 'COT / CET' },
]

/* ── Components ── */
function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">{'<DioverDM />'}</span>
      <ul className="nav-links">
        {['Inicio', 'Proyectos', 'Skills', 'Contacto'].map(l => (
          <li key={l}><a href="#">{l}</a></li>
        ))}
      </ul>
      <div className="nav-status">
        <div className="status-dot" />
        Available for hire
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-scanline" />

      {/* Top-left signal */}
      <div className="hero-signal">
        <div className="signal-bars">
          <span /><span /><span /><span />
        </div>
        <span className="wifi-icon">⌘</span>
      </div>

      {/* Top-right UI elements */}
      <div className="hero-ui-elements">
        <div className="three-dots">
          <span /><span /><span />
        </div>
        <div className="ui-pill">PORTOFOLIO</div>
        <div className="ui-tag">DEV · FULL STACK</div>
        <div className="ui-controls">
          {['⌃','⌥','⇧'].map(k => (
            <div key={k} className="ui-ctrl-btn">{k}</div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-eyebrow">What's Up Everyone</div>
        <div className="hero-name">
          DIOVER<br /><span>RIVERO</span>
        </div>
        <div className="hero-handle">
          @DioverDM <span className="cursor-blink" />
        </div>
        <p className="hero-bio">
          Desarrollador Full Stack & Co-Fundador de Doble Filo Studio Creativo.
          Apasionado por construir productos web modernos, APIs robustas y
          experiencias digitales que dejan huella.
        </p>
      </div>

      <div className="hero-bottom">
        {['Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'].map(t => (
          <span key={t} className="hero-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}

function InterestsRow() {
  return (
    <div className="interests-row">
      <span className="interests-label">Intereses</span>
      {INTERESTS.map(i => (
        <div key={i.label} className="interest-chip">
          <span className="icon">{i.icon}</span>
          {i.label}
        </div>
      ))}
    </div>
  )
}

function ExperienceCards() {
  return (
    <div className="exp-grid">
      {EXPERIENCE.map(exp => (
        <div key={exp.company} className="card">
          <div className="card-header">
            <span className="card-title">{exp.company}</span>
            <span className={`card-badge ${exp.badgeClass}`}>{exp.badge}</span>
          </div>
          <div className="card-subtitle">{exp.role}</div>
          <ul className="card-list">
            {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

function IntroCard() {
  return (
    <div className="intro-card">
      <div className="intro-card-inner">
        <div>
          <div className="intro-heading">Introduce My Self</div>
          <p className="intro-text">
            Soy <strong>Diover</strong>. Programador autodidacta con Técnico Superior
            en Informática. Me muevo entre el código y el diseño — construyo desde
            APIs REST hasta interfaces que enamoran. Co-fundé <strong>Doble Filo Studio</strong> para
            llevar esa combinación a clientes reales en Colombia y España.
          </p>
        </div>

        {/* Floating UI windows */}
        <div className="intro-ui-overlay">
          {/* Code window */}
          <div className="ui-window top-left">
            <div className="ui-window-header">
              <div className="dots">
                <span className="d1" /><span className="d2" /><span className="d3" />
              </div>
              <span className="ui-window-title">diover.json</span>
            </div>
            <div className="code-line"><span className="code-lnum">1</span><span className="code-key">role:</span><span className="code-str">"dev"</span></div>
            <div className="code-line"><span className="code-lnum">2</span><span className="code-key">exp:</span><span className="code-val">4+</span></div>
            <div className="code-line"><span className="code-lnum">3</span><span className="code-key">open:</span><span className="code-val">true</span></div>
          </div>

          {/* Toggle window */}
          <div className="ui-window mid">
            <div className="ui-window-header">
              <span className="ui-window-title">stack</span>
            </div>
            {[
              { icon: '⚛️', on: true },
              { icon: '🐍', on: true },
              { icon: '🗄️', on: true },
            ].map((t, i) => (
              <div key={i} className="toggle-row">
                <span className="toggle-icon">{t.icon}</span>
                <div className={`toggle-switch ${t.on ? 'on' : 'off'}`} />
              </div>
            ))}
          </div>

          {/* Status window */}
          <div className="ui-window bottom-right">
            <div className="ui-window-header">
              <span className="ui-window-title">status</span>
            </div>
            <div className="code-line"><span style={{color:'var(--accent3)'}}>● ONLINE</span></div>
            <div className="code-line"><span className="code-val">free 4 work</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <div className="card-full">
      <div className="section-label">Stack Tecnológico</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {SKILL_GROUPS.map(group => (
          <div key={group.label} className="card" style={{ padding: '14px 18px' }}>
            <div className="skills-row">
              <span className="skills-label">{group.label}</span>
              <div className="skill-chips">
                {group.chips.map(c => (
                  <span key={c.name} className={`skill-chip ${c.cls}`}>{c.name}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BottomGrid() {
  return (
    <div className="grid-2" style={{ animationDelay: '0.35s' }}>
      {/* Education */}
      <div className="card">
        <div className="section-label">Educación</div>
        {EDUCATION.map(e => (
          <div key={e.title} className="edu-item">
            <span className="edu-badge">{e.year}</span>
            <div className="edu-title">{e.title}</div>
            <div className="edu-sub">{e.sub}</div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="card">
        <div className="section-label">Idiomas</div>
        {[
          { flag: '🇻🇪', lang: 'Español', level: 'Nativo' },
          { flag: '🇺🇸', lang: 'Inglés', level: 'Intermedio B2' },
          { flag: '🇵🇹', lang: 'Portugués', level: 'Básico A2' },
        ].map(l => (
          <div key={l.lang} className="edu-item">
            <span className="edu-badge">{l.level}</span>
            <div className="edu-title">{l.flag} {l.lang}</div>
          </div>
        ))}
        <div className="card-divider" />
        <div className="section-label" style={{ marginBottom: 8 }}>Ubicación</div>
        <div className="edu-item" style={{ border: 'none' }}>
          <div className="edu-title">🌍 Colombia · España</div>
          <div className="edu-sub">Disponible para trabajo remoto worldwide</div>
        </div>
      </div>
    </div>
  )
}

function PortfolioLinks() {
  return (
    <div className="card card-full" style={{ marginBottom: 16, animationDelay: '0.4s' }}>
      <div className="portfolio-links">
        <span className="portfolio-label">Portfolio</span>
        {PORTFOLIO_LINKS.map(l => (
          <a key={l.label} href={l.href} className="link-chip" target="_blank" rel="noreferrer">
            <span className={`dot ${l.dot}`} />
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function DetailsRow() {
  return (
    <div className="card card-full" style={{ animationDelay: '0.45s' }}>
      <div className="details-row">
        <span className="detail-label">Contacto</span>
        {DETAILS.map(d => (
          <div key={d.text} className="detail-chip">
            <span className="icon">{d.icon}</span>
            {d.text}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── App ── */
export default function App() {
  useCardGlow()

  return (
    <>
      <Nav />
      <div className="portfolio">
        <Hero />
        <InterestsRow />
        <ExperienceCards />
        <IntroCard />
        <SkillsSection />
        <BottomGrid />
        <PortfolioLinks />
        <DetailsRow />

        <footer className="footer">
          <p>Diseñado y desarrollado por{' '}
            <a href="#">@DioverDM</a>
            {' '}·{' '}
            <a href="#">Doble Filo Studio</a>
            {' '}© 2025
          </p>
        </footer>
      </div>
    </>
  )
}
