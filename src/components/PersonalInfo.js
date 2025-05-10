import React from 'react';

export default function PersonalInfo({ name, title }) {
  return (
    <section>
      <h1>{name}</h1>
      <p>{title}</p>
      <div>
        <h2>Profile</h2>
        <p>I am a computer engineering student, with a taste and experience of working with PHP and Java as languages with more proficiency, creating desktop and web applications collaboratively with an (academic) development team. During high school, my team and I made a warehouse management system developed in Java 8 with MySQL 5.7 and hybrid web applications in PHP 7 with Materialize and Bootstrap. Recently in my career I have worked collaboratively on projects, where I have been a dev Backend (php/laravel), as well as working collaboratively using Scrum for project management.</p>
      </div>
    </section>
  );
}
