
import styled from 'styled-components';
import Card from './Card';

const PixelCard = styled(Card)`
  border: 4px solid #000;
  box-shadow: 0 0 0 4px #000;
  position: relative;
  image-rendering: pixelated;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #000;
  }

  &:before {
    top: -8px;
    left: -8px;
  }

  &:after {
    bottom: -8px;
    right: -8px;
  }
`;

export default PixelCard;
