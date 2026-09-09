import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutExperience from '../../components/AboutExperience';

const stackItems = [
  'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'REST APIs', 'Responsive Design', 'Git & GitHub', 'Redux Toolkit'
];

const experiences = [
  {
    number: '01',
    role: 'Frontend Developer, Technical Department',
    company: 'Sudo Africa',
    text: 'Delivered production-ready web applications using React, Next.js, TypeScript, and Tailwind CSS. Built secure interfaces, integrated RESTful APIs, and developed reusable UI components.'
  },
  {
    number: '02',
    role: 'Frontend Intern / Technical Support',
    company: 'Mackodev Tech Lab',
    text: 'Provided technical support and troubleshooting assistance while contributing to web applications built with React, JavaScript, HTML, CSS, and API integrations.'
  },
  {
    number: '03',
    role: 'Education',
    company: 'B.Eng. Computer Engineering',
    text: 'Ekiti State University, Nigeria, 2025. Second Class Honours, Upper Division. React.js Front-End Developer certified by GoMyCode.'
  }
];

export default function AboutPage() {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="about-page">
        <section className="about-intro content-width">
          <h1 className="template-heading">About me<span>.</span></h1>
          <p className="about-lead">I build responsive, accessible, and reliable web applications with modern frontend technologies and a strong focus on user experience.</p>
        </section>

        <section className="about-cards content-width">
          <div>
            <h2 className="about-card-title">My Stack<span>.</span></h2>
            <div className="stack-motion-card">
              <div className="stack-marquee first-row">
                {[...stackItems, ...stackItems].map((item, index) => <span key={`one-${index}`}>{item}<b>☆</b></span>)}
              </div>
              <div className="stack-marquee second-row">
                {[...stackItems.slice(3), ...stackItems, ...stackItems.slice(0, 3)].map((item, index) => <span key={`two-${index}`}>{item}<b>☆</b></span>)}
              </div>
              <div className="stack-marquee third-row">
                {[...stackItems.slice(1), ...stackItems, ...stackItems.slice(0, 1)].map((item, index) => <span key={`three-${index}`}>{item}<b>☆</b></span>)}
              </div>
            </div>
          </div>
          <div>
            <h2 className="about-card-title">My Special Place<span>.</span></h2>
            <div className="globe-card"><div className="globe"><span /></div></div>
          </div>
        </section>

        <section className="about-experience content-width">
          <h2 className="template-heading">My Experience<span>.</span></h2>
          <AboutExperience experiences={experiences} />
        </section>

        <section className="about-skills content-width">
          <h2 className="template-heading">Skills<span>.</span></h2>
          <div className="about-skill-grid">
            <div><h3>Frontend</h3><p>React.js</p><p>Next.js</p><p>JavaScript</p><p>TypeScript</p></div>
            <div><h3>Styling</h3><p>HTML5</p><p>CSS3</p><p>Tailwind CSS</p><p>Responsive Design</p></div>
            <div><h3>Tools</h3><p>RESTful APIs</p><p>Git &amp; GitHub</p><p>Redux Toolkit</p><p>Performance Optimization</p></div>
            <div><h3>Professional</h3><p>Problem Solving</p><p>Communication</p><p>Technical Support</p><p>Collaboration</p></div>
          </div>
        </section>

        <section className="about-certifications content-width">
          <h2 className="template-heading">Certifications<span>.</span></h2>
          <div className="certification-list">
            <p>React.js Front-End Developer Certification <span>GoMyCode, 2025</span></p>
            <p>Web Development Certification <span>Udemy, 2024</span></p>
            <p>Mackodev Technical Training Certification <span>Mackodev, 2024</span></p>
            <p>HTML Structure, Tags, Attributes and Images <span>GoMyCode, 2024</span></p>
          </div>
        </section>

        <section className="about-story content-width">
          <h2 className="template-heading">My Story<span>.</span></h2>
          <p>I earned my Bachelor of Engineering in Computer Engineering from Ekiti State University in 2025, graduating with Second Class Honours, Upper Division.</p>
          <p>My professional experience includes frontend development at Sudo Africa and frontend internship and technical support work at Mackodev Tech Lab.</p>
          <p>Today, I focus on building responsive products with React, Next.js, TypeScript, Tailwind CSS, and RESTful APIs. I love turning ideas into useful experiences. <span>💜</span></p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
