import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="contact-page content-width">
        <section className="contact-page-layout">
          <div className="contact-copy">
            <h1 className="template-heading">Get In Touch<span>.</span></h1>
            <p>Looking to partner or work together? Reach out through the form and I&apos;ll get back to you in the next 48 hours.</p>
            <div className="contact-details">
              <a href="mailto:falanaseun100@gmail.com">
                <span className="contact-icon" aria-hidden="true">✉</span>
                falanaseun100@gmail.com
              </a>
              <span>
                <span className="contact-icon" aria-hidden="true">⌕</span>
                Nigeria | +234 903 093 9109
              </span>
            </div>
          </div>
          <div className="contact-page-portrait portrait-ring">
            <img src="/images/profile.jpeg" alt="Portrait of Opeyemi Falana" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
