export default function ProjectCard({ project }) {
  const isPlaceholder = project.title.includes('coming soon');

  return (
    <article className={`project-card${isPlaceholder ? ' project-placeholder' : ''}`}>
      <div className="project-art">
        <strong>{isPlaceholder ? 'Project image coming soon' : project.title}</strong>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-stack">{project.stack}</p>
        <a className="project-link" href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>
          View project
        </a>
      </div>
    </article>
  );
}
