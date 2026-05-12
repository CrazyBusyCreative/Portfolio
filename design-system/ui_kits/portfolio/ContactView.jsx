const ContactView = () => {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', msg: '' });
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>Let's Talk</h1>
          <p className="page-hero__subtitle">Open to AI Engineer and TPM roles &middot; Remote</p>
        </div>
      </div>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          <ContactCard icon="mail" title="Email" handle="tballad@me.com" cta="Send an Email &rarr;"/>
          <ContactCard icon="linkedin" title="LinkedIn" handle="linkedin.com/in/tballad" cta="View LinkedIn &rarr;"/>
          <ContactCard icon="github" title="GitHub" handle="github.com/hexcodestudio" cta="View GitHub &rarr;"/>
        </div>
      </Section>

      <Section surface>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <SectionHeading>Send a Message</SectionHeading>
          {sent ? (
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--color-navy)', marginBottom: 8 }}>Message received.</p>
              <p className="muted" style={{ fontSize: 14 }}>I'll reply within two business days.</p>
            </div>
          ) : (
            <form className="card" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })}/>
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })}/>
              <Field label="Message" multiline value={form.msg} onChange={(v) => setForm({ ...form, msg: v })}/>
              <div style={{ marginTop: 16 }}><Button variant="primary">Send Message</Button></div>
            </form>
          )}
        </div>
      </Section>

      <section className="section--surface">
        <div className="container">
          <div className="availability-band"><p>Remote preferred &middot; Hybrid in California considered</p></div>
        </div>
      </section>

      <Section>
        <div className="closing-note">
          <div className="closing-note__quote-mark" aria-hidden="true">&ldquo;</div>
          <p className="closing-note__text">I work best with teams building something that actually matters. If that's you, I'd love to talk about what you're trying to do before we talk about titles and comp.</p>
        </div>
      </Section>
    </main>
  );
};

const ContactCard = ({ icon, title, handle, cta }) => (
  <div className="contact-card">
    <div className="contact-card__icon"><I name={icon} size={28}/></div>
    <p className="contact-card__title">{title}</p>
    <p className="contact-card__handle">{handle}</p>
    <a className="contact-card__link" dangerouslySetInnerHTML={{ __html: cta }}/>
  </div>
);

const Field = ({ label, value, onChange, type = 'text', multiline }) => (
  <label style={{ display: 'block', marginBottom: 14 }}>
    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 6 }}>{label}</div>
    {multiline ? (
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={4} style={fieldStyle}/>
    ) : (
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} style={fieldStyle}/>
    )}
  </label>
);

const fieldStyle = {
  width: '100%',
  fontFamily: 'Barlow, sans-serif',
  fontSize: 14,
  padding: '10px 12px',
  background: '#fff',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: 6,
  color: '#1a1a18',
  outline: 'none',
};

Object.assign(window, { ContactView, ContactCard, Field });
