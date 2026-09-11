import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import projects from '../../../data/projects';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find(({ slug }) => slug === params.slug);

  if (!project) notFound();

  const images = project.images || [];

  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="project-detail content-width">
        <Link className="back-link" href="/projects">← All projects</Link>
        <p className="project-eyebrow">Project case study</p>
        <h1 className="template-heading">{project.title}<span>.</span></h1>
        <p className="project-detail-description">{project.description}</p>
        <p className="project-detail-stack">{project.stack}</p>

        <section className="project-about" aria-labelledby="project-about-heading">
          <dl className="project-facts">
            <div><dt>Client</dt><dd>{project.client}</dd></div>
            <div><dt>Year</dt><dd>{project.year}</dd></div>
            <div><dt>My Role</dt><dd>{project.role}</dd></div>
          </dl>
          <div className="project-about-copy">
            <h2 id="project-about-heading">About</h2>
            <p>{project.about || project.description}</p>
            <p>This project focused on a clear, responsive interface with reusable components and thoughtful interaction details.</p>
          </div>
        </section>

        {images.length ? (
          <section className="project-gallery" aria-label={`${project.title} screenshots`}>
            {images.map((image, index) => (
              <figure key={image}>
                <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
              </figure>
            ))}
          </section>
        ) : (
          <p className="project-gallery-empty">Project screenshots will be added soon.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
