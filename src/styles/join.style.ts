import styled from 'styled-components';

const ComponentWrapper = styled.div<{type: string}>`
  padding: ${props => props.type === 'join' ? '150px 13%' : '0px'};
`

const JoinWrapper = styled.div`
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20pt;
  font-weight: 500;
  color: ${props => props.theme.fontColor.title}
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: ${props => props.theme.fontColor.subTitle};
  margin-top: 25px;
  margin-bottom: 5px;
`;

const JoinForm = styled.form``;

const GenderForm = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const GenderBtn = styled.div<{ click?: boolean }>`
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
  ComponentWrapper,
  JoinWrapper,
  SubTitle,
  Title,
  JoinForm,
  GenderForm,
  GenderBtn,
};
