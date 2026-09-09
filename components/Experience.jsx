'use client';

import { useState } from 'react';

export default function Experience({ experiences }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <div className="experience-layout">
      <div className="experience-tabs" role="tablist" aria-label="Experience">
        {experiences.map((experience, index) => (
          <button
            className={index === activeIndex ? 'active' : ''}
            key={experience.company}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {experience.company}
          </button>
        ))}
      </div>
      <div className="experience-detail" role="tabpanel">
        <h3>{active.role} <span>@ {active.company}</span></h3>
        <p className="experience-date">{active.date}</p>
        <ul>{active.points.map((point) => <li key={point}>{point}</li>)}</ul>
      </div>
    </div>
  );
}
