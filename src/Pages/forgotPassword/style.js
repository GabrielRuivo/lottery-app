import styled, { keyframes }  from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  background-color: #F7F7F7;
  display: grid;
  grid-template-columns: 1fr 1fr;

`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;
  `;