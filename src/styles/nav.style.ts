import styled from "styled-components"

const NavWrapper = styled.div`
  display: flex;
`

const NavContainer = styled.div`
  width: 15vw;
  // border-right: 1px solid rgba(0,0,0,0.2);
`

const NavForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const NavTitle = styled.div`
  color: ${props => props.theme.mint.deepLighter};
  font-weight: 350;
  font-size: 14px;
  margin-bottom: 15px;
`

const NavSubTitle = styled.div<{curLink?: string, selectLink?: string}>`
  font-size: 16px;
  color: ${props => props.curLink === props.selectLink ? props.theme.mint.deepDarker : props.theme.fontColor.subTitle };
  font-weight: ${props => props.curLink === props.selectLink ? 'bold' : 'normal' };
  margin: 10px 20px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.mint.deepDarker};
  }
`

export { NavWrapper, NavContainer, NavForm, NavTitle, NavSubTitle }