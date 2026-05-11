const Nav = ({ page, onNav }) => (
  <nav className="nav">
    <div className="nav__inner">
      <a className="nav__brand" href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }}>T. Ballad</a>
      <div className="nav__menu">
        <ul className="nav__links">
          <li><span className={`nav-link ${page === 'projects' ? 'active' : ''}`} onClick={() => onNav('projects')}>Projects</span></li>
          <li><span className={`nav-link ${page === 'about' ? 'active' : ''}`} onClick={() => onNav('about')}>About</span></li>
          <li><span className={`nav-link ${page === 'contact' ? 'active' : ''}`} onClick={() => onNav('contact')}>Contact</span></li>
        </ul>
        <Button variant="primary" onClick={() => alert('Resume download (demo)')}>Download Resume</Button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <p className="footer__copy">T. Ballad &middot; &copy; 2026</p>
    <div className="footer__links">
      <span className="footer__link"><I name="github" size={16}/> GitHub</span>
      <span className="footer__sep" aria-hidden="true">|</span>
      <span className="footer__link"><I name="linkedin" size={16}/> LinkedIn</span>
      <span className="footer__sep" aria-hidden="true">|</span>
      <span className="footer__link"><I name="mail" size={16}/> tballad@me.com</span>
    </div>
  </footer>
);

Object.assign(window, { Nav, Footer });
