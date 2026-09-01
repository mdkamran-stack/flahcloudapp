export default function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="container cta-layout">
        <div className="cta-copy">
          <p className="section-kicker">CONTACT</p>
          <h2>Let&apos;s Build the Future Together</h2>
          <p>
            Whether you need elite talent, a custom platform, or a long-term strategic partner — we&apos;re here to help. Drop us a line and we&apos;ll respond within one business day.
          </p>
          <div className="contact-meta">
            <div>
              <h4>Head Office</h4>
              <p>FLAHCLOUD SOFTWARE PRIVATE LIMITED. Plot No. 920 Ground Floor, Road No. 47, Opposite Little Wings Child Development Centre, Ayyappa Society, Madhapur, Hyderabad — 500081, Telangana.</p>
            </div>
            <div>
              <h4>Phone</h4>
              <a href="tel:+917386546680">+91-7386546680</a>
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:info@flahcloud.com">info@flahcloud.com</a>
            </div>
            <div>
              <h4>Working Hours</h4>
              <p>Mon — Sat : 9:30 AM – 6:30 PM IST</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h3>Send us a message</h3>
          <div className="field-row">
            <label>
              <span>Full Name *</span>
              <input type="text" placeholder="Full Name" />
            </label>
            <label>
              <span>Email *</span>
              <input type="email" placeholder="Email" />
            </label>
          </div>
          <div className="field-row">
            <label>
              <span>Phone</span>
              <input type="tel" placeholder="Phone" />
            </label>
            <label>
              <span>Company</span>
              <input type="text" placeholder="Company" />
            </label>
          </div>
          <label>
            <span>Service of Interest</span>
            <input type="text" placeholder="Service of Interest" />
          </label>
          <label>
            <span>Message *</span>
            <textarea rows="5" placeholder="Message" />
          </label>
          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}
