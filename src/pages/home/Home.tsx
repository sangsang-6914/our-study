import { getUser } from '@api/user';
import { ComponentWrapper } from '@styles/common.style';
import { handleException } from '@utils/errorUtils';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
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
