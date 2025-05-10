import React from 'react';
import styled from 'styled-components';

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface Skill {
  name: string;
}

const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const EducationItem = styled.div`
  margin-bottom: 15px;
`;

const Institution = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Degree = styled.p`
  margin-bottom: 2px;
`;

const Period = styled.p`
  font-style: italic;
`;

const SkillItem = styled.p`
  margin-bottom: 5px;
`;

const AcademicInfo: React.FC = () => {
  const education: Education[] = [
    {
      institution: 'Tecnológico Nacional de México Campus Colima',
      degree: 'Computer Engineering',
      period: '2020 - Present',
    },
    {
      institution: 'CBTis 19 Miguel Hidalgo y Costilla',
      degree: 'Programmer Technician',
      period: '2016 - 2019',
    },
  ];

  const skills: Skill[] = [
    { name: 'Java 8, PHP 8.2.4, Python 3 (3.9.19-3.12.6)' },
    { name: 'Laravel/php (11.3.1/8.2.4), Django/python (4.2/3.9.11)' },
    { name: 'Microsoft SQL Server (2022), MySQL (8.0.92), MongoDB (7.0)' },
    { name: 'Git/GitHub handling' },
    { name: 'Using Trello and Jira' },
    { name: 'Teamwork' },
  ];

  return (
    <Container>
      <Section>
        <SectionTitle>EDUCATION</SectionTitle>
        {education.map((item, index) => (
          <EducationItem key={index}>
            <Institution>{item.institution}</Institution>
            <Degree>{item.degree}</Degree>
            <Period>{item.period}</Period>
          </EducationItem>
        ))}
      </Section>

      <Section>
        <SectionTitle>SKILLS</SectionTitle>
        {skills.map((skill, index) => (
          <SkillItem key={index}>• {skill.name}</SkillItem>
        ))}
      </Section>
    </Container>
  );
};

export default AcademicInfo;
