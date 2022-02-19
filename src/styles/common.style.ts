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

const Overlay = styled.div`
  position: fixed;
  top:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 9999;
`

export { ComponentWrapper, FormError, Overlay };
