const ProjectsView = ({ onNav }) => (
  <main>
    <div className="page-hero">
      <div className="container">
        <h1>Projects</h1>
        <p className="page-hero__subtitle">Production AI systems, iOS apps, and published technical writing</p>
      </div>
    </div>

    <div className="container">
      <ProjectDetail
        id="signalforge"
        badge={{ variant: 'production', label: 'Production' }}
        title="SignalForge — AI Lead Intelligence Platform"
        img="../../assets/SignalForge.jpg"
        tags={['FastAPI','PostgreSQL','SQLAlchemy 2.x','Alembic','Anthropic SDK','HTMX','Multi-LLM abstraction']}
        score="84 TRS"
        desc="Production Python/FastAPI application that monitors a portfolio of startups and surfaces fractional CTO opportunities through LLM analysis. Features multi-dimensional Technical Readiness Scoring, human-in-the-loop outreach governance, and ethical AI guardrails. Designed and shipped end-to-end."
      />
      <ProjectDetail
        badge={{ variant: 'in-progress', label: 'In Progress' }}
        title="SignalCast — AI Job Briefing App"
        img="../../assets/SignalCast Screenshot.jpg"
        tags={['FastAPI','SQLite','APScheduler','BeautifulSoup4','httpx','Claude SDK','HTMX']}
        desc="Local-first AI job briefing tool. Aggregates listings from four sources, scores them against a candidate profile using Claude, and delivers a ranked daily briefing."
      />

      <section className="project-card">
        <h3>iOS Applications</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', margin: '1.25rem 0' }}>
          <AppEntry icon="leaf" name="myApothecary" desc="Herb &amp; remedy tracker"/>
          <AppEntry icon="star" name="myTarot" desc="Deck purchases · Apple IAP"/>
          <AppEntry icon="diamond" name="Creative Pantry" desc="Offline creative tool"/>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>~80% MVP Complete</p>
        <TagRow tags={['SwiftUI','Core Data','UserNotifications','Apple IAP','Offline-first']}/>
      </section>

      <section className="project-card">
        <h3>Published Books</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', margin: '1.25rem 0' }}>
          <BookItem cover="../../assets/AccessControl.png" title="Access Control, Authentication &amp; Public Key Infrastructure" pub="Jones &amp; Bartlett Learning"/>
          <BookItem cover="../../assets/SecuringPHP.png" title="Securing PHP Web Applications" pub="Addison-Wesley Professional"/>
          <BookItem cover="../../assets/DummiesBook.png" title="PHP &amp; MySQL Web Development All-in-One Desk Reference" pub="Wiley / For Dummies"/>
        </div>
      </section>
    </div>

    <section className="section--surface">
      <div className="container">
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div className="btn-row">
            <Button variant="primary" onClick={() => alert('Resume download (demo)')}>Download Resume (PDF)</Button>
            <Button variant="ghost" onClick={() => onNav('contact')}>Get in touch &rarr;</Button>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const ProjectDetail = ({ id, badge, title, img, tags, score, desc }) => (
  <section id={id} className="project-card">
    <Badge variant={badge.variant}>{badge.label}</Badge>
    <div className="project-card__layout">
      <div><img src={img} alt="" className="project-screenshot" /></div>
      <div>
        <h2 className="project-card__title">{title}</h2>
        <TagRow tags={tags}/>
        {score && <div><span className="score-callout"><I name="bar-chart-3" size={12}/> {score}</span></div>}
        <p className="project-card__desc">{desc}</p>
        <a className="project-card__link">View Project &rarr;</a>
      </div>
    </div>
  </section>
);

const AppEntry = ({ icon, name, desc }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
    <div style={{ color: 'var(--color-navy)' }}><I name={icon} size={24}/></div>
    <div>
      <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-navy)' }} dangerouslySetInnerHTML={{ __html: name }}/>
      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }} dangerouslySetInnerHTML={{ __html: desc }}/>
    </div>
  </div>
);

const BookItem = ({ cover, title, pub }) => (
  <div style={{ textAlign: 'center' }}>
    <img src={cover} alt="" style={{ width: '100%', borderRadius: 6, aspectRatio: '2/3', objectFit: 'cover', marginBottom: '0.5rem' }}/>
    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.25rem' }} dangerouslySetInnerHTML={{ __html: title }}/>
    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }} dangerouslySetInnerHTML={{ __html: pub }}/>
  </div>
);

Object.assign(window, { ProjectsView, ProjectDetail, AppEntry, BookItem });
