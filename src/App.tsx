import React from 'react';
import styled from 'styled-components';

import ImageUploader from './components/ImageUploader';
import PersonalInfo   from './components/PersonalInfo';
import LocationInfo   from './components/LocationInfo';
import AcademicInfo   from './components/AcademicInfo';
import ExperienceInfo from './components/ExperienceInfo';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export default function App() {
  return (
    <Wrapper>
      <ImageUploader />
      <PersonalInfo />
      <LocationInfo />
      <AcademicInfo />
      <ExperienceInfo />
    </Wrapper>
  );
}
