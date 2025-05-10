import React, { useState } from 'react';

export default function ImageUploader() {
  const [preview, setPreview] = useState(null);

  const handleChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <section>
      <h2>Foto de perfil</h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && <img src={preview} alt="Preview" style={{ width: 120, borderRadius: '50%', marginTop: 10 }} />}
    </section>
  );
}