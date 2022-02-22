import styled from "styled-components"

const LoginWrapper = styled.div`
  height: 400px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.mint.basic};
  font-style: italic;
  margin-bottom: 20px;
`;

const SubList = styled.ul`
  display: flex;
  font-size: 13px;
  justify-content: center;
  margin-top: 15px;
  font-weight: 400;
`

const SubItem = styled.li`
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.mint.deepDarker};
    font-weight: 400;
  }
`

const EasyLoginWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`

const Hr = styled.hr`
  position: relative;
  bottom: -10px;
  display: block;
  margin: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f3f5;
  border: none;
`

const EasyLogin = styled.span`
  position: relative;
  padding: 0 10px;
  margin-bottom: 16px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -.3px;
  color: #abb0b5;
  z-index: 9999;
  background-color: #fff;
`
const EasyLoginList = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: center;
  margin-top: 10px;
`

const KaKao = styled.button`
  background-color: #fae500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`

const Google = styled.button`
  background-color: #f8f8f8;;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`

const Github = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  background-color: #3c4043;
`

const Facebook = styled.button`
  background-color: #325ca6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`

export {
  LoginWrapper, Github, Google, KaKao, LoginForm, EasyLogin, EasyLoginList, EasyLoginWrapper, Hr, SubItem, SubList, Title, Facebook
};