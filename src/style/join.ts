import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 1300px;
  padding: 100px 300px;
`;

const JoinWrapper = styled.div`
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 50px;
  font-size: 20pt;
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: #828282;
  margin-top: 25px;
  margin-bottom: 5px;
`;

const InputForm = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  &::placeholder {
    color: #dcdcdc;
  }
`;

const JoinBtn = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: 0px;
  margin-top: 30px;
  background-color: ${(props) => props.theme.mint.basic};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.mint.deepDarker};
  }
`;

export { Wrapper, JoinBtn, JoinWrapper, SubTitle, Title, InputForm };
