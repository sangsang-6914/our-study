import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 1300px;
  padding: 100px 300px;
`;

const Title = styled.div`
  font-size: 18pt;
`;

function Home() {
  return (
    <>
      <Wrapper>
        <Title>Home Hello</Title>
      </Wrapper>
    </>
  );
}

export default Home;
