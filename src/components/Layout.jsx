import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  {
    to: '/verticals',
    label: 'Verticals',
    menu: [
      { label: 'Banking & Finance', to: '/verticals#banking' },
      { label: 'Healthcare', to: '/verticals#healthcare' },
      { label: 'IoT', to: '/verticals#iot' },
      { label: 'Manufacturing', to: '/verticals#manufacturing' },
      { label: 'Insurance', to: '/verticals#insurance' },
      { label: 'Mobility', to: '/verticals#mobility' },
    ],
  },
  { to: '/coe', label: 'CoE' },
  { to: '/contact', label: 'Contact' },
]

const quickLinks = ['Home', 'About Us', 'Services', 'Verticals', 'CoE', 'Contact']
const solutions = ['Staffing Solutions', 'Training & Deployments', 'App Development', 'Cloud Services', 'Data & Analytics', 'ERP Solutions']

export default function Layout() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="contact-strip">
              <div className="contact-item">
                <span className="contact-icon">☎</span>
                <a href="tel:+917386546680">+91-7386546680</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <a href="mailto:info@flahcloud.com">info@flahcloud.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⌖</span>
                <span>Madhapur, Hyderabad, India</span>
              </div>
            </div>

            <div className="social-strip" aria-label="Social media links">
              <a href="#" aria-label="LinkedIn" className="social-icon">in</a>
              <a href="#" aria-label="X" className="social-icon">x</a>
              <a href="#" aria-label="Facebook" className="social-icon">f</a>
            </div>
          </div>
        </div>

        <div className="container navbar">
          <div className="brand-block logo-brand-block">
            <img src="/flahcloud-logo.svg" alt="Flahcloud logo" className="brand-logo" />
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => {
              if (item.menu) {
                return (
                  <div key={item.to} className="nav-dropdown">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                      {item.label}
                      <span className="caret">•</span>
                    </NavLink>

                    <ul className="dropdown-menu">
                      {item.menu.map((menuItem) => (
                        <li key={menuItem.to}>
                          <NavLink to={menuItem.to} className="dropdown-item">
                            {menuItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand-block logo-brand-block">
              <img src="/flahcloud-logo.svg" alt="Flahcloud logo" className="brand-logo footer-logo" />
            </div>
            <p>
              FLAHCLOUD SOFTWARE PRIVATE LIMITED is a diversity-owned IT staffing and solutions company orchestrating future-ready strategies for ambitious enterprises across the globe.
            </p>
            <div className="socials footer-socials">LinkedIn Twitter Facebook Instagram</div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link}><NavLink to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '').replace('aboutus', 'about').replace('services', 'services').replace('verticals', 'verticals').replace('coe', 'coe').replace('contact', 'contact')}`}>{link}</NavLink></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Solutions</h4>
            <ul>
              {solutions.map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="contact-list">
              <li><a href="tel:+917386546680">+91-7386546680</a></li>
              <li><a href="mailto:info@flahcloud.com">info@flahcloud.com</a></li>
            </ul>
            <div className="newsletter">
              <label htmlFor="newsletter">Email for newsletter</label>
              <div className="newsletter-row">
                <input id="newsletter" type="email" placeholder="Email" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Flah Cloud. All rights reserved.</span>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
