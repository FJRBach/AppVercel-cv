import React from 'react';
import styled from 'styled-components';
import PersonalInfo from './components/PersonalInfo';
import AcademicInfo from './components/AcademicInfo';
import ExperienceInfo from './components/ExperienceInfo';

// Importa tu imagen estática
import profilePhoto from './assets/images/profile-photo.png';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ProfileImage src={profilePhoto} alt="Profile" />
      <ContentContainer>
        <PersonalInfo />
        <AcademicInfo />
        <ExperienceInfo />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;