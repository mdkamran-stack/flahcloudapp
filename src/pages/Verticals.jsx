import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const verticals = [
  {
    id: 'banking',
    label: 'Banking & Finance',
    text: 'Driving Financial Success, One Hire at a Time.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    text: 'Empowering Healthcare Excellence Through Talent.',
  },
  {
    id: 'iot',
    label: 'IoT',
    text: 'Connecting Talent to the Future of Things.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    text: "Building Tomorrow's Industry Leaders Today.",
  },
  {
    id: 'insurance',
    label: 'Insurance',
    text: 'Insuring Your Success with the Right Talent.',
  },
  {
    id: 'mobility',
    label: 'Mobility',
    text: 'Moving Forward with Expert Talent Solutions.',
  },
]

export default function Verticals() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    if (!hash) return

    const target = document.getElementById(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <section className="content-section" id="verticals">
      <div className="container narrow center-text">
        <p className="section-kicker">OUR VERTICALS</p>
        <h2>Industry-Aligned Solutions, Domain-Aligned Talent</h2>
        <p className="section-copy">
          Vertical solutions for every industry — driving innovation, powering success, and accelerating digital transformation.
        </p>
      </div>

      <div className="container vertical-grid">
        {verticals.map((vertical) => (
          <article className="vertical-card" id={vertical.id} key={vertical.id}>
            <h3>{vertical.label}</h3>
            <p>{vertical.text}</p>
            <a href={`/verticals#${vertical.id}`}>Read More →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
