
import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import gsap  from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const SpotlightCardWrapper = styled(Card)`
  position: relative;
  overflow: hidden;
  z-index: 0;
  transition: all 1s ease-in-out;

  .spotlight {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 40%);
    pointer-events: none;
    opacity: 0;
    z-index: 1;
  }
`;

const SpotlightCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const spotlight = spotlightRef.current;

    if (!card || !spotlight) return;

    gsap.fromTo(
      card,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlight, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(spotlight, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <SpotlightCardWrapper ref={cardRef}>
      {children}
      <div className="spotlight" ref={spotlightRef} />
    </SpotlightCardWrapper>
  );
};

export default SpotlightCard;
