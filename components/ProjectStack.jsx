'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ProjectStack({ projects }) {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.stack-card'));

    const updateCardScale = () => {
      cards.forEach((card) => {
        const topOffset = card.getBoundingClientRect().top;
        const shrinkFactor = topOffset <= 120
          ? 1 - Math.min(0.08, (120 - topOffset) / 2000)
          : 1;

        card.style.setProperty('--card-scale', shrinkFactor.toFixed(3));
      });
    };

    updateCardScale();
    window.addEventListener('scroll', updateCardScale, { passive: true });

    return () => window.removeEventListener('scroll', updateCardScale);
  }, []);

  return (
    <section className="projects-stack-container" aria-label="Projects">
      {projects.map((project, index) => (
        <article className="stack-card" style={{ '--i': index }} key={`${project.title}-${index}`}>
          <Link className="stack-card-link" href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
          <div className="stack-card-inner">
            <div className="stack-card-media">
              <div className="purple-stripe" />
              <div className="mockup-frame">
                <div className="mockup-placeholder"> 
                  <span>{project.title}</span>
                  <small>Project image coming soon</small>
                </div>
                {project.image ? <img src={project.image} alt={`${project.title} preview`} onError={(event) => { event.currentTarget.style.display = 'none'; }} /> : null}
              </div>
            </div>
            <div className="stack-card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="stack-tag">{project.stack}</span>
            </div>
          </div>
          </Link>
        </article>
      ))}
    </section>
  );
}
