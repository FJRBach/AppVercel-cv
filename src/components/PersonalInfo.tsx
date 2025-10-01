import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedGradientText from './AnimatedGradientText';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  padding: 20px;
`;

const InfoText = styled.p`
  margin-bottom: 5px;
`;

const PersonalInfo: React.FC = () => {
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

  return (
    <Container ref={containerRef}>
      <AnimatedGradientText colors={['#000B69', '#0B7534', '#40ffaa', '#4079ff', '#0B7534']} animationSpeed={3.5} showBorder={true}>
        PERSONAL INFORMATION
      </AnimatedGradientText>
      <InfoText>Name: Francisco Javier Ramirez Bachomo</InfoText>
      <InfoText>Phone: +52 312 243 9309</InfoText>
      <InfoText>Email: franciscobachomo@gmail.com</InfoText>
      <InfoText>Location: Colima, Col.</InfoText>
      <InfoText>Languages: Spanish (Native), English (B1)</InfoText>
    </Container>
  );
};

export default PersonalInfo;