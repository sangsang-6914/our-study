import { ComponentWrapper } from "@styles/common.style"
import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import styled from "styled-components"
import Account from "./account/Account"
import ChangePwd from "./changePwd/ChangePwd"
import SNSRegister from "./sns/SNSRegister"

const MyPageWrapper = styled.div`
  display: flex;
`

const MypageNav = styled.div`
  width: 15vw;
  height: 90vh;
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

function MyPage () {
  const [selectLink, setSelectLink] = useState('account')
  const changeLink = (link: string) => {
    setSelectLink(link)
  }
  return (
    <ComponentWrapper>
      <MyPageWrapper>
        <MypageNav>
          <NavForm>
            <NavTitle>HOME</NavTitle>
            <NavSubTitle curLink='notice' selectLink={selectLink}>알림</NavSubTitle>
            <NavSubTitle curLink='sub2' selectLink={selectLink}>sub2</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>스터디 관리</NavTitle>
            <NavSubTitle curLink='write-study' selectLink={selectLink}>작성한 스터디</NavSubTitle>
            <NavSubTitle curLink='submit-study' selectLink={selectLink}>신청한 스터디</NavSubTitle>
            <NavSubTitle curLink='request-study' selectLink={selectLink}>요청받은 스터디</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>멘토링 관리</NavTitle>
            <NavSubTitle curLink='write-mento' selectLink={selectLink}>작성한 멘토링</NavSubTitle>
            <NavSubTitle curLink='submit-mento' selectLink={selectLink}>신청한 멘토링</NavSubTitle>
            <NavSubTitle curLink='request-mento' selectLink={selectLink}>신청받은 멘토링</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>설정</NavTitle>
            <Link to="account" onClick={() => changeLink('account')}>
              <NavSubTitle curLink='account' selectLink={selectLink}>회원정보 수정</NavSubTitle>
            </Link>
            <Link to="sns-register" onClick={() => changeLink('sns-register')}>
              <NavSubTitle curLink='sns-register' selectLink={selectLink}>SNS 등록</NavSubTitle>
            </Link>
            <Link to="change-pwd" onClick={() => changeLink('change-pwd')}>
              <NavSubTitle curLink='change-pwd' selectLink={selectLink}>비밀번호 변경</NavSubTitle>
            </Link>
          </NavForm>
        </MypageNav>
        <MypageComponent>
          <Routes>
            <Route path="sns-register" element={<SNSRegister />} />
            <Route path="account" element={<Account />} />
            <Route path="change-pwd" element={<ChangePwd />} />
          </Routes>
        </MypageComponent>
      </MyPageWrapper>
    </ComponentWrapper>
  )
}

export default MyPage