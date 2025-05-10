import React from 'react';

export default function LocationInfo({ city }) {
  return (
    <section>
      <h2>Location</h2>
      <p>{city}</p>
    </section>
  );
}