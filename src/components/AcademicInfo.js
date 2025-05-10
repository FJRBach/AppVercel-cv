import React from 'react';

export default function AcademicInfo({ education }) {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {education.map((edu, i) => (
          <li key={i}>
            <strong>{edu.title}</strong> — {edu.years}
          </li>
        ))}
      </ul>
    </section>
  );
}