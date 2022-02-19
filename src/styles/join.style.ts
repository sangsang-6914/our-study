import styled from 'styled-components';

const JoinWrapper = styled.div`
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 30px;
  font-size: 20pt;
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: #828282;
  margin-top: 25px;
  margin-bottom: 5px;
`;

const JoinForm = styled.form``;

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

const GenderForm = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const GenderBtn = styled.div<{ click: boolean }>`
  text-align: center;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 300;
  border: 1px solid #dcdcdc;
  color: ${(props) => (props.click ? 'white' : 'black')};
  background-color: ${(props) =>
    props.click ? props.theme.mint.deepLighter : 'white'};
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.mint.deepLighter};
  }
`;

export {
  JoinBtn,
  JoinWrapper,
  SubTitle,
  Title,
  InputForm,
  JoinForm,
  GenderForm,
  GenderBtn,
};