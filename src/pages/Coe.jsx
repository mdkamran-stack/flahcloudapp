const coe = ['BPM', 'Client Server', 'Cloud', 'ERP', 'Data']

export default function Coe() {
  return (
    <section className="content-section coe-section" id="coe">
      <div className="container narrow center-text">
        <p className="section-kicker">CENTER OF EXCELLENCE</p>
        <h2>CoE Aligned with Critical Technologies</h2>
        <p className="section-copy">
          Our domain-aligned Centers of Excellence ensure consistent delivery, deep specialization and continuous innovation across the most strategic technology areas.
        </p>
      </div>

      <div className="container coe-pills" aria-label="Technology focus areas">
        {coe.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
