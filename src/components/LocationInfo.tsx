import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const LocationText = styled.p`
  margin-bottom: 5px;
`;

const LocationInfo: React.FC = () => {
  return (
    <Container>
      <Title>LOCATION</Title>
      <LocationText>Colima, Colima, México</LocationText>
    </Container>
  );
};

export default LocationInfo;
