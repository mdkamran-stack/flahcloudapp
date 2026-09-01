const services = [
  {
    title: 'Staffing Solutions',
    text: 'A bespoke approach matching the right talent to the right opportunity. Contract, contract-to-hire, and permanent staffing across all major technology stacks — sourced through our deep industry network and AI-driven matching.',
    link: 'Explore Staffing →',
  },
  {
    title: 'Training & Deployments',
    text: 'Customized upskilling programs that prepare candidates for high-impact roles. We handle end-to-end deployment with continuous mentoring, ensuring smooth transitions and consistent delivery quality.',
    link: 'Explore Training →',
  },
  {
    title: 'App Development & Maintenance',
    text: 'Cutting-edge product engineering for web, mobile and cloud. From architecture and design to deployment, scaling and 24×7 maintenance — we build software that drives measurable business outcomes.',
    link: 'Explore Development →',
  },
]

export default function Services() {
  return (
    <section className="content-section" id="services">
      <div className="container narrow center-text">
        <p className="section-kicker">OUR SOLUTIONS</p>
        <h2>End-to-End IT Services Tailored to Your Goals</h2>
        <p className="section-copy">
          From talent acquisition to product engineering — Flahcloud is your single partner for the entire IT lifecycle.
        </p>
      </div>

      <div className="container service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="/contact">{service.link}</a>
          </article>
        ))}
      </div>
    </section>
  )
}
