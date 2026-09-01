export default function AboutUs() {
  return (
    <section className="content-section about-section">
      <div className="container split-layout">
        <div className="section-copy-block">
          <p className="section-kicker">ABOUT US</p>
          <h2>Engineering Talent Solutions for a Future-Ready World</h2>
          <p>
            Flahcloud Private Limited is a diversity-owned IT staffing and solutions organization, founded with a singular vision — to redefine how enterprises discover, deploy, and retain elite technology talent.
          </p>
          <p>
            We are not just reactive recruiters. We anticipate, we advise, and we surpass expectations. With deep industry knowledge and an agile delivery model, we sit at the vanguard of a rapidly evolving recruitment landscape.
          </p>
          <ul className="check-list">
            <li>Future-ready strategies aligned with critical technologies</li>
            <li>Industry-specific verticals with dedicated domain experts</li>
            <li>Center of Excellence for BPM, Cloud, ERP, Data and more</li>
            <li>Transparent engagement, predictable outcomes, lifelong partnerships</li>
          </ul>
          <a className="text-link" href="/contact">Learn More About Us</a>
        </div>
        <div className="about-visual">
          <div className="visual-box">
            <div className="visual-badge">Talent</div>
            <div className="visual-badge alt">Delivery</div>
            <div className="visual-badge small">Growth</div>
          </div>
        </div>
      </div>
    </section>
  )
}
