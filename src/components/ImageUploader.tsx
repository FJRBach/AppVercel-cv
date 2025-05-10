import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PreviewImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const FileInput = styled.input`
  display: block;
  margin: 0 auto;
`;

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Container>
      {image && <PreviewImage src={image} alt="Uploaded" />}
      <FileInput type="file" accept="image/*" onChange={handleImageChange} />
    </Container>
  );
};

export default ImageUploader;
