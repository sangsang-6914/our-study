import { ComponentWrapper } from '@styles/common.style';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 18pt;
`;

function Home() {
  return (
    <>
      <ComponentWrapper>
        <Title>Home Hello</Title>
      </ComponentWrapper>
    </>
  );
}

export default Home;
