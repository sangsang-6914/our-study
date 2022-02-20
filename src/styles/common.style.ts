import styled from 'styled-components';

const ComponentWrapper = styled.div`
  padding: 100px 300px;
  min-height: 90vh;
`;

const FormError = styled.div`
  margin-top: 5px;
  color: #FF3232;
  font-size: 13px;
`

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

const LoginJoinBtn = styled.button`
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


export { ComponentWrapper, FormError, InputForm, LoginJoinBtn };
