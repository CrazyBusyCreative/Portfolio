const AboutView = () => (
  <main>
    <div className="page-hero">
      <div className="container">
        <h1>About T. Ballad</h1>
        <p className="page-hero__subtitle page-hero__subtitle--italic">Not a career pivot. A convergence.</p>
      </div>
    </div>

    <Section>
      <SectionHeading align="left">My Story</SectionHeading>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <p>I started my career as a web application developer in 2000 — writing PHP, building systems, shipping features. In 2004, I transitioned into technical writing, project management, and eventually technical program leadership. That wasn't a retreat from engineering; it was a different vantage point.</p>
        <p>In 2025, I came back to hands-on engineering — not because I ran out of PM opportunities, but because AI tools made it possible to combine both halves again.</p>
        <p>SignalForge is the proof. A production Python/FastAPI application with multi-provider LLM abstraction, multi-dimensional scoring, and ethical AI guardrails — designed, architected, and shipped solo.</p>
      </div>
    </Section>

    <Section surface>
      <SectionHeading>Education &amp; Credentials</SectionHeading>
      <ul className="credential-list">
        <li className="credential-item"><I name="check-circle" size={20}/><span>BA Computer Science + Creative Writing — Bradley University</span></li>
        <li className="credential-item"><I name="check-circle" size={20}/><span>PMI-ACP Certified — Project Management Institute</span></li>
        <li className="credential-item"><I name="check-circle" size={20}/><span>Human-Centered AI Leadership <em>(In Progress)</em></span></li>
      </ul>
    </Section>

    <Section>
      <SectionHeading>The Convergence</SectionHeading>
      <div className="convergence-cards">
        <div className="card card--accent-left">
          <h3>AI Engineer</h3>
          <p className="convergence-card__subtitle">What I Build</p>
          <p className="convergence-card__body">Production Python/FastAPI backends, LLM-integrated pipelines, local-first iOS apps in SwiftUI</p>
          <p className="convergence-card__subtitle">Tools I Use</p>
          <p className="convergence-card__body">Anthropic SDK, LangChain, FastAPI, SQLAlchemy, Alembic, HTMX, Cursor</p>
          <p className="convergence-card__subtitle">Examples</p>
          <p className="convergence-card__body">SignalForge, SignalCast, myApothecary, myTarot, Creative Pantry</p>
        </div>
        <div className="card card--accent-left">
          <h3>Technical Program Manager</h3>
          <p className="convergence-card__subtitle">Program Approach</p>
          <p className="convergence-card__body">Cross-functional execution, dependency tracking, release readiness, stakeholder alignment</p>
          <p className="convergence-card__subtitle">Governance</p>
          <p className="convergence-card__body">Ethical AI guardrails, human-in-the-loop design, bias audit frameworks</p>
          <p className="convergence-card__subtitle">Stakeholder Alignment</p>
          <p className="convergence-card__body">Translating technical constraints into business language and back again</p>
        </div>
      </div>
    </Section>

    <Section>
      <SectionHeading>Career Timeline</SectionHeading>
      <div className="timeline">
        {[
          { y: '2025–Present', r: 'Fractional CTO / AI Engineer', c: 'HexCode Studio / DisEntangled Tech, LLC — Remote', d: 'Building production AI applications and providing technical program leadership.' },
          { y: '2025', r: 'Director of Technology', c: 'EXACT Sports — Chicago, IL', d: 'Launched three SaaS products in six months. Grew engineering team 75% while improving productivity 150%.' },
          { y: '2023–2024', r: 'PMO Coordinator — Enterprise Technology Portfolio', c: 'Chicago Transit Authority — Chicago, IL', d: 'Built program governance infrastructure from scratch across a multi-team, multi-vendor enterprise portfolio.' },
          { y: '2021–2022', r: 'Program Manager', c: 'Assurance Data — Remote', d: 'Led FedRAMP readiness program end-to-end.' },
          { y: '2004–2023', r: 'Founder / Digital Transformation Consultant', c: 'DisEntangled Tech, LLC — Remote', d: 'Nearly two decades leading digital transformation programs.' },
          { y: '2000–2004', r: 'Web Application Developer', c: 'TransUnion · RBS Greenwich Capital · Follett', d: 'Began career writing production web applications.' },
        ].map((e, i) => (
          <div key={i} className="timeline__entry">
            <p className="timeline__year">{e.y}</p>
            <p className="timeline__role">{e.r}</p>
            <p className="timeline__company">{e.c}</p>
            <p className="timeline__desc">{e.d}</p>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

Object.assign(window, { AboutView });
