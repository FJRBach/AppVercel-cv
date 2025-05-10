import React from 'react';
import styled from 'styled-components';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

const Section = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 15px;
`;

const Company = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Role = styled.p`
  margin-bottom: 2px;
`;

const Period = styled.p`
  font-style: italic;
`;

const Description = styled.p`
  margin-bottom: 8px;
`;

const ExperienceInfo: React.FC = () => {
  const experience: Experience[] = [
    {
      company: 'Freelancer',
      role: 'Freelancer Developer',
      period: '2022 - Present',
      description: 'Creating systems for business clients using Laravel or Django.',
    },
    {
      company: 'IA Interactive',
      role: 'Web Developer Intern',
      period: 'Jan - June 2023',
      description: 'Developed a mobile application in React Native and web management platform in React JS.',
    },
  ];

  return (
    <Section>
      <SectionTitle>EXPERIENCE</SectionTitle>
      {experience.map((item, index) => (
        <ExperienceItem key={index}>
          <Company>{item.company}</Company>
          <Role>{item.role}</Role>
          <Period>{item.period}</Period>
          <Description>{item.description}</Description>
        </ExperienceItem>
      ))}
    </Section>
  );
};

export default ExperienceInfo;
