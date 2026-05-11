// Atoms: Button, Tag, Badge, Icon
const I = ({ name, size = 20, color }) => (
  <img src={`../../assets/icons/${name}.svg`} width={size} height={size} alt="" style={{ filter: 'none', color: color || 'currentColor' }} />
);

const Button = ({ variant = 'primary', children, onClick, href }) => {
  const cls = `btn btn--${variant}`;
  if (href) return <a className={cls} href={href} onClick={(e) => { e.preventDefault(); onClick && onClick(); }}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
};

const Tag = ({ children }) => <span className="tag">{children}</span>;

const TagRow = ({ tags }) => <div className="tags">{tags.map((t, i) => <Tag key={i}>{t}</Tag>)}</div>;

const Badge = ({ variant, children }) => <span className={`badge badge--${variant}`}>{children}</span>;

const SectionHeading = ({ children, align = 'center' }) => (
  <h2 className="section__heading" style={align === 'left' ? { textAlign: 'left' } : {}}>{children}</h2>
);

const Section = ({ surface, children }) => (
  <section className={`section ${surface ? 'section--surface' : ''}`}>
    <div className="container">{children}</div>
  </section>
);

Object.assign(window, { I, Button, Tag, TagRow, Badge, SectionHeading, Section });
