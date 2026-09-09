import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Experience from '../components/Experience';

const projects = [
  {
    title: 'SafeHaven Platform',
    description: 'A responsive platform with customer-facing interfaces and backend integration.',
    stack: 'React / TypeScript / Tailwind',
    href: '#contact'
  },
  {
    title: 'CloudCard Institution Dashboard',
    description: 'An integrated administrative dashboard with responsive interfaces and API integrations.',
    stack: 'Next.js / TypeScript / Tailwind',
    href: '#contact'
  },
  {
    title: 'Card Core Admin Dashboard',
    description: 'Administrative dashboard functionality supporting platform monitoring and operations.',
    stack: 'React / TypeScript / REST APIs',
    href: '#contact'
  },
  {
    title: 'International Student Loan Platform',
    description: 'A platform supporting students seeking educational funding opportunities abroad.',
    stack: 'React / JavaScript / Responsive UI',
    href: 'https://github.com/ope10'
  },
  {
    title: 'Construction Company Website',
    description: 'A fully responsive corporate website designed for a clear business presence.',
    stack: 'React / HTML / CSS',
    href: 'https://github.com/ope10/Construction_website'
  },
  {
    title: 'Cardholder Dashboard',
    description: 'A responsive dashboard experience built collaboratively for cardholders.',
    stack: 'React / TypeScript / API Integration',
    href: '#contact'
  }
];

const experiences = [
  {
    company: 'Sudo Africa',
    role: 'Frontend Developer, Technical Department',
    date: 'October 2025 - Present',
    points: [
      'Delivered production-ready applications using React, Next.js, TypeScript, and Tailwind CSS.',
      'Developed secure, responsive interfaces for customer-facing and administrative platforms.',
      'Integrated frontend applications with backend services through RESTful APIs.'
    ]
  },
  {
    company: 'Mackodev Tech Lab',
    role: 'Frontend Intern / Technical Support',
    date: 'January 2024 - July 2024',
    points: [
      'Provided technical support and troubleshooting for software and web-related issues.',
      'Built and maintained web applications using React, JavaScript, HTML, CSS, and API integration.',
      'Collaborated with developers and mentors on real-world projects and quality assurance.'
    ]
  }
];

const skills = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript ES6+', 'TypeScript'] },
  { title: 'UI Development', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'] },
  { title: 'Tools', items: ['RESTful APIs', 'Git', 'GitHub', 'Redux Toolkit'] },
  { title: 'Strengths', items: ['Problem Solving', 'Communication', 'Technical Support', 'Teamwork'] }
];

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <Navbar />
      <main>
        <section className="home-section content-width" id="home">
          <div className="home-copy">
            <p className="hello-line">Hey, I&apos;m Opeyemi <span aria-hidden="true">👋</span></p>
            <h1><span>Frontend</span><br />Developer</h1>
            <p className="home-intro">
              I&apos;m a Junior Frontend Software Developer based in Nigeria, building responsive
              and user-friendly digital experiences with React and Next.js.
            </p>
            <div className="action-row">
              <a className="purple-button" href="/contact">Get In Touch</a>
              <a className="outline-button" href="#projects">Browse Projects</a>
            </div>
          </div>
          <div className="portrait-ring">
            <img src="/images/profile.jpeg" alt="Portrait of Opeyemi Falana" />
          </div>
        </section>

        <section className="projects-section content-width" id="projects">
          <h2 className="template-heading">Projects<span>.</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />)}
          </div>
        </section>

        <section className="experience-section content-width" id="experience">
          <h2 className="template-heading">Experience<span>.</span></h2>
          <Experience experiences={experiences} />
        </section>

        <section className="skills-section content-width" id="skills">
          <h2 className="template-heading">Skills<span>.</span></h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.title}>
                <h3>{skill.title}</h3>
                {skill.items.map((item) => <p key={item}>{item}</p>)}
              </div>
            ))}
          </div>
        </section>

        <section className="story-section content-width" id="about">
          <h2 className="template-heading">My Story<span>.</span></h2>
          <div className="story-copy">
            <p>I&apos;m a passionate Junior Frontend Software Developer with a Bachelor of Engineering in Computer Engineering from Ekiti State University.</p>
            <p>My work combines responsive interface development, REST API integration, technical problem solving, and component-based architecture.</p>
            <p>I enjoy collaborating with cross-functional teams to build scalable digital solutions with React, Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </section>

        <section className="contact-section content-width" id="contact">
          <div className="contact-copy">
            <h2 className="template-heading">Get In Touch<span>.</span></h2>
            <p>Looking to partner or work together? Reach out through email and I&apos;ll get back to you as soon as possible.</p>
            <div className="contact-details">
              <a href="mailto:falanaseun100@gmail.com"><span className="contact-icon">@</span> falanaseun100@gmail.com</a>
              <span><span className="contact-icon">+</span> Nigeria | +234 903 093 9109</span>
            </div>
          </div>
          <div className="contact-portrait portrait-ring">
            <img src="/images/profile.jpeg" alt="Portrait of Opeyemi Falana" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
