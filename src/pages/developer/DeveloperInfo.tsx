import { ComponentWrapper } from '@styles/common.style';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 18pt;
`;

function DeveloperInfo() {
  return (
    <>
      <ComponentWrapper>
        <Title>Server(Backend) : 김동규</Title>
        <Title>Client(Frontend) : 우상훈</Title>
      </ComponentWrapper>
    </>
  );
}

export default DeveloperInfo;
