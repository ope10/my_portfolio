'use client';

import { useEffect, useState } from 'react';

export default function AboutExperience({ experiences }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rows = Array.from(document.querySelectorAll('[data-experience-row]'));
    if (!rows.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible[0]) setActiveIndex(Number(visible[0].target.dataset.experienceRow));
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.2, 0.8, 1] }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  // const progress = experiences.length > 1
  //   ? (activeIndex / (experiences.length - 1)) * 100
  //   : 0;

  return (
    <div className="experience-list" >
      <span className="experience-progress" aria-hidden="true"><span /></span>
      {experiences.map((experience, index) => (
        <article
          className={`experience-row${activeIndex === index ? ' is-active' : ''}`}
          data-experience-row={index}
          key={experience.number}
        >
          <strong>{experience.number}</strong>
          <div className="experience-row-content">
            <p className="experience-role">{experience.role}</p>
            <h3>{experience.company}</h3>
            <p className="experience-text">{experience.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
