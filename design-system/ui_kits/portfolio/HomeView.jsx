const HomeView = ({ onNav }) => (
  <main>
    <section className="hero">
      <div className="container">
        <h1>T. Ballad</h1>
        <p className="hero__subtitle">AI Engineer &middot; Technical Program Manager</p>
        <p className="hero__body">20+ years shipping software. Now building production AI systems and driving the programs around them.</p>
        <div className="hero__ctas">
          <Button variant="primary" onClick={() => alert('Resume download (demo)')}>Download Resume (PDF)</Button>
          <Button variant="ghost" onClick={() => onNav('contact')}>Let's Talk &rarr;</Button>
        </div>
      </div>
    </section>

    <Section surface>
      <SectionHeading>Two Ways to Work Together</SectionHeading>
      <div className="grid-2">
        <div className="card">
          <p className="track-label">Track A</p>
          <h3>AI Engineer</h3>
          <TagRow tags={['Python','FastAPI','LLM Integration','RAG','Agentic AI','SwiftUI','Anthropic SDK']}/>
        </div>
        <div className="card">
          <p className="track-label">Track B</p>
          <h3>Technical Program Manager</h3>
          <TagRow tags={['Cross-functional Execution','PMI-ACP','AI Governance','Stakeholder Alignment','Release Readiness']}/>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid-4">
        {[
          { icon: 'calendar', n: '20+ Years', d: 'Shipping software' },
          { icon: 'package', n: '4', d: 'Production AI apps' },
          { icon: 'book-open', n: '3', d: 'Published tech books' },
          { icon: 'graduation-cap', n: 'CS Degree', d: 'Bradley University' },
        ].map((s, i) => (
          <div key={i}>
            <div className="stat__icon"><I name={s.icon} size={32}/></div>
            <span className="stat__number">{s.n}</span>
            <p className="stat__desc">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section surface>
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="grid-2">
        <FeaturedProject
          badge={{ variant: 'production', label: 'Production' }}
          title="SignalForge"
          subtitle="AI Lead Intelligence Platform"
          img="../../assets/SignalForge.jpg"
          tags={['FastAPI','PostgreSQL','SQLAlchemy 2.x','Alembic','Anthropic SDK','HTMX']}
          onOpen={() => onNav('projects')}
        />
        <FeaturedProject
          badge={{ variant: 'in-progress', label: 'In Progress' }}
          title="SignalCast"
          subtitle="AI Job Briefing App"
          img="../../assets/SignalCast Screenshot.jpg"
          tags={['FastAPI','SQLite','APScheduler','Claude SDK','HTMX']}
          onOpen={() => onNav('projects')}
        />
      </div>
      <div className="view-all"><a onClick={() => onNav('projects')}>View All Projects &rarr;</a></div>
    </Section>

    <section className="section--surface">
      <div className="container">
        <div className="convergence-band">
          <div className="convergence-band__icon"><I name="atom" size={48}/></div>
          <p className="convergence-band__quote">"Not a career pivot. A convergence."</p>
          <a className="convergence-band__link" onClick={() => onNav('about')}>Read My Story &rarr;</a>
        </div>
      </div>
    </section>
  </main>
);

const FeaturedProject = ({ badge, title, subtitle, img, tags, onOpen }) => (
  <div className="card">
    <Badge variant={badge.variant}>{badge.label}</Badge>
    <h3 style={{ marginTop: '0.75rem', marginBottom: '0.25rem' }}>{title}</h3>
    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>{subtitle}</p>
    <img src={img} alt="" className="project-screenshot" />
    <TagRow tags={tags}/>
    <p style={{ marginTop: '1rem' }}><a className="project-card__link" onClick={onOpen}>View Project &rarr;</a></p>
  </div>
);

Object.assign(window, { HomeView, FeaturedProject });
