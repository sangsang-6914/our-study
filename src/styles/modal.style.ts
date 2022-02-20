import styled from "styled-components"

const ModalWrapper = styled.div<{visible:boolean}>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div<{visible:boolean}>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div<{width?: string}>`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${props => props.width ? `${props.width}px` : '360px'};
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
`

const CloseButton = styled.div`
  text-align: right;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.mint.deepDarker};
  }
`

export { ModalWrapper, ModalOverlay, ModalInner, CloseButton }