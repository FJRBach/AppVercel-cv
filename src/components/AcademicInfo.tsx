import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import  gsap  from 'gsap';
import  ScrollTrigger  from 'gsap/ScrollTrigger';
import AnimatedGradientText from './AnimatedGradientText';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
    { name: 'Laravel/php (11.3.1/8.2.4), Django/python (4.2/3.9.11), React (22)' },
    { name: 'Blazor/C# (NET 10/13.0), ASP NET Core/C# (NET 10/13.0)' },
    { name: 'Kotlin (2.1), React Native/Typescript (0.81.4)' },
    { name: 'Microsoft SQL Server (2022), MySQL (8.0.92), MongoDB (7.0)' },
    { name: 'Git/GitHub handling' },
    { name: 'Using Trello and Jira' },
    { name: 'Teamwork' },
  ];

  return (
    <Container ref={containerRef}>
      <Section>
        <AnimatedGradientText colors={['#000B69', '#0B7534', '#40ffaa', '#4079ff', '#0B7534']} animationSpeed={3.5} showBorder={true}>EDUCATION</AnimatedGradientText>
        {education.map((item, index) => (
          <EducationItem key={index}>
            <Institution>{item.institution}</Institution>
            <Degree>{item.degree}</Degree>
            <Period>{item.period}</Period>
          </EducationItem>
        ))}
      </Section>

      <Section>
        <AnimatedGradientText colors={['#000B69', '#0B7534', '#40ffaa', '#4079ff', '#0B7534']} animationSpeed={3.5} showBorder={true}>SKILLS</AnimatedGradientText>
        {skills.map((skill, index) => (
          <SkillItem key={index}>• {skill.name}</SkillItem>
        ))}
      </Section>
    </Container>
  );
};

export default AcademicInfo;