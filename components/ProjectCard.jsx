export default function ProjectCard({ project }) {
  const isPlaceholder = project.title.includes('coming soon');

  return (
    <article className={`project-card${isPlaceholder ? ' project-placeholder' : ''}`}>
      <div className="project-card-link" aria-label={`${project.title} preview`}>
        <div className="project-art">
          <strong>{isPlaceholder ? 'Project image coming soon' : project.title}</strong>
          {project.image ? <img src={project.image} alt={`${project.title} preview`} /> : null}
        </div>
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="project-stack">{project.stack}</p>
        </div>
      </div>
    </article>
  );
}
