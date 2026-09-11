import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectStack from '../../components/ProjectStack';
import projects from '../../data/projects';

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
