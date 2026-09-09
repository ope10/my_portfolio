import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectStack from '../../components/ProjectStack';

const projects = [
  {
    title: 'Foodie Finder App',
    description: 'Restaurant discovery platform with search, reviews, ratings, and responsive location-based interfaces.',
    stack: 'React / TypeScript / Tailwind',
    image: null
  },
  {
    title: 'Safe Haven Website',
    description: 'Financial platform with secure, responsive customer-facing experiences and backend integration.',
    stack: 'Next.js / Tailwind',
    image: null
  },
  {
    title: 'Kanban Dashboard',
    description: 'Task management dashboard with reusable components, modern layout, and responsive interaction patterns.',
    stack: 'JavaScript / CSS',
    image: null
  },
  {
    title: 'Construction Company Website',
    description: 'Fully responsive corporate website created to present a construction company and its services clearly.',
    stack: 'React / TypeScript / Tailwind',
    image: null
  },
  {
    title: 'CloudCard Institution Dashboard',
    description: 'Integrated institution dashboard with responsive interfaces and REST API integrations.',
    stack: 'Next.js / TypeScript / Tailwind',
    image: null
  },
  {
    title: 'International Student Loan Platform',
    description: 'Frontend platform supporting students seeking educational funding opportunities abroad.',
    stack: 'React / JavaScript / Responsive UI',
    image: null
  }
];

export default function ProjectsPage() {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="projects-page">
        <div className="content-width projects-page-heading">
          <h1 className="template-heading">My <span>Best</span> Creations</h1>
          <p>Designing and Developing Robust and Stylish Web Applications<br />for a Decade and Counting</p>
        </div>
        <ProjectStack projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
