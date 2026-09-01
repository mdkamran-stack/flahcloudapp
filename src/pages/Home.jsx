const stats = [
  { value: '500+', label: 'Talent Placed' },
  { value: '150+', label: 'Trusted Clients' },
  { value: '98%', label: 'Retention Rate' },
]

const features = [
  {
    title: 'Cost-Effective',
    text: 'Reduce your in-house recruitment overhead with scalable, on-demand IT staffing — pay only for what you need.',
  },
  {
    title: 'Vast Talent Network',
    text: 'A pre-vetted bench of domain experts and a global pipeline of niche-skill professionals ready to deploy.',
  },
  {
    title: 'Employee Retention',
    text: 'Try-before-you-hire models give you real performance insights — leading to better long-term hiring decisions.',
  },
  {
    title: 'Quick Turnaround',
    text: 'Our discovery methodology matches technical skills and culture fit with your business — fast and accurate.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">THE FUTURE OF IT STAFFING</p>
            <h1>
              One Destination.<span>Domain Experts.</span>
              <span>Techno Masters.</span>
            </h1>
            <p className="lead">
              Flahcloud delivers industry-specific staffing, training, and application development solutions — engineered for tomorrow, ready today. We connect ambitious enterprises with elite technology talent.
            </p>
            <div className="cta-row">
              <a className="primary-btn" href="/contact">Hire Talent</a>
              <a className="secondary-btn" href="/services">Explore Services</a>
            </div>

            <div className="stat-row">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Why Flahcloud overview">
            <div className="mini-card highlight-card">
              <span className="card-pill">Future-Ready</span>
              <h3>Engineering Talent Solutions</h3>
              <p>Domain-specific staffing, strategic delivery teams, and scalable talent programs for complex business transformation.</p>
            </div>
            <div className="mini-card">
              <span>✓</span>
              <p>Future-ready strategy aligned with critical technologies</p>
            </div>
            <div className="mini-card">
              <span>✓</span>
              <p>Transparent engagement with measurable outcomes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section intro-section" id="about">
        <div className="container narrow">
          <p className="section-kicker">WHY FLAHCLOUD</p>
          <h2>Built for the Modern Enterprise</h2>
          <p className="section-copy">
            We blend domain expertise, deep talent networks, and proven processes to deliver impact at every stage of your hiring and project journey.
          </p>
        </div>

        <div className="container features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
