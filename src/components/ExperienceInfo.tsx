import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import  gsap  from 'gsap';
import  ScrollTrigger  from 'gsap/ScrollTrigger';
import AnimatedGradientText from './AnimatedGradientText';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

const Section = styled.div`
  padding: 20px;
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

  const experience: Experience[] = [
    {
      company: 'Freelancer',
      role: 'Freelancer Developer',
      period: '2022 - Present',
      description: 'Creating systems for business clients using principally Kotlin, Laravel y Django.',
    },
    {
      company: 'Central Informatica',
      role: 'Web Developer Internship',
      period: 'September 2025 - Present',
      description: 'Developed web apps using Blazor and ASP NET Core, enhancing my skills in C# and .NET technologies.',
    },
  ];

  return (
    <Section ref={containerRef}>
      <AnimatedGradientText colors={['#000B69', '#0B7534', '#40ffaa', '#4079ff', '#0B7534']} animationSpeed={3.5} showBorder={true}>EXPERIENCE</AnimatedGradientText>
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