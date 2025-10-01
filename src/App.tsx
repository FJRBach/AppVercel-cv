import React from 'react';
import styled from 'styled-components';
import PersonalInfo from './components/PersonalInfo';
import AcademicInfo from './components/AcademicInfo';
import ExperienceInfo from './components/ExperienceInfo';
import profilePhoto from './assets/images/profile-photo.png';
import Card from './components/Card';
import PixelCard from './components/PixelCard';
import SpotlightCard from './components/SpotlightCard';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #171717;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 30px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <PixelCard>
        <ProfileImage src={profilePhoto} alt="Profile" />
      </PixelCard>
      <ContentContainer>
        <Card>
          <PersonalInfo />
        </Card>
        <Card>
          <AcademicInfo />
        </Card>
        <SpotlightCard>
          <ExperienceInfo />
        </SpotlightCard>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
