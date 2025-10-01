
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors: string[];
  animationSpeed: number;
  showBorder: boolean;
}

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const borderAnimation = keyframes`
  0% { border-color: #000B69; }
  25% { border-color: #0B7534; }
  50% { border-color: #40ffaa; }
  75% { border-color: #4079ff; }
  100% { border-color: #0B7534; }
`;

const AnimatedH2 = styled.h2<{
  $colors: string[];
  $animationSpeed: number;
  $showBorder: boolean;
}>`
  background: linear-gradient(to right, ${props => props.$colors.join(', ')});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: ${props => (props.$showBorder ? '2px solid' : 'none')};
  border-image-slice: 1;
  animation: ${props =>
    props.$showBorder
      ? css`${gradient} ${props.$animationSpeed}s ease infinite, ${borderAnimation} ${props.$animationSpeed}s ease infinite`
      : css`${gradient} ${props.$animationSpeed}s ease infinite`};
`;

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className, colors, animationSpeed, showBorder }) => {
  return (
    <AnimatedH2
      className={className}
      $colors={colors}
      $animationSpeed={animationSpeed}
      $showBorder={showBorder}
    >
      {children}
    </AnimatedH2>
  );
};

export default AnimatedGradientText;
