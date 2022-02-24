import styled from "styled-components"

const MypageCompTitle = styled.div`
  font-size: 20pt;
  margin-bottom: 20px;
`

const MyPageWrapper = styled.div`
  display: flex;
`

const MypageNav = styled.div`
  width: 15vw;
  border-right: 1px solid rgba(0,0,0,0.2);
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
  margin-bottom: 10px;
`

const NavSubTitle = styled.div<{curLink?: string, selectLink?: string}>`
  font-size: 16px;
  color: ${props => props.curLink === props.selectLink ? props.theme.mint.deepDarker : '#828282' };
  font-weight: ${props => props.curLink === props.selectLink ? 'bold' : 'normal' };
  margin: 10px 20px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.mint.deepDarker};
  }
`

const MypageComponent = styled.div`
  width: 70vw;
`

export { MypageCompTitle, MyPageWrapper, MypageNav, NavForm, NavTitle, NavSubTitle, MypageComponent }