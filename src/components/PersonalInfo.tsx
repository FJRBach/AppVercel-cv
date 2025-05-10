import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  margin-bottom: 5px;
`;

const PersonalInfo: React.FC = () => {
  return (
    <Container>
      <Title>PERSONAL INFORMATION</Title>
      <InfoText>Name: Francisco Bachomo Torres</InfoText>
      <InfoText>Phone: +52 312 139 9996</InfoText>
      <InfoText>Email: franciscobachomo@gmail.com</InfoText>
      <InfoText>Location: Colima, Col.</InfoText>
      <InfoText>Languages: Spanish (Native), English (B1)</InfoText>
    </Container>
  );
};

export default PersonalInfo;
