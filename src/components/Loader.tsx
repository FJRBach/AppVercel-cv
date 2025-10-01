import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #3498db;
  border-radius: 50%;
`;

const Loader: React.FC = () => {
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    animationRef.current = animate('.dot', {
      translateY: [0, -20, 0],
      easing: 'easeInOutSine',
      duration: 600,
      delay: stagger(200),
      loop: true,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  return (
    <LoaderContainer>
      <Dot className="dot" />
      <Dot className="dot" />
      <Dot className="dot" />
    </LoaderContainer>
  );
};

export default Loader;
