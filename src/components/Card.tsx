
import styled from 'styled-components';

const Card = styled.div`
  background: #7A7A7A;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  &:hover, &:active {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: #FFFFFF;
  }
`;

export default Card;
