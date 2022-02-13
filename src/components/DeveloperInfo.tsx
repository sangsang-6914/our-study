import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 1300px;
  padding: 100px 300px;
`;

const Title = styled.div`
  font-size: 18pt;
`;

function DeveloperInfo() {
  return (
    <>
      <Wrapper>
        <Title>Server(Backend) : 김동규</Title>
        <Title>Client(Frontend) : 우상훈</Title>
      </Wrapper>
    </>
  );
}

export default DeveloperInfo;
