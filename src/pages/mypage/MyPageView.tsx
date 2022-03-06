import { ComponentWrapper } from "@styles/common.style"
import { MypageComponent } from "@styles/mypage.style"
import { NavContainer, NavForm, NavSubTitle, NavTitle, NavWrapper } from "@styles/nav.style"
import { useTranslation } from "react-i18next"
import { Routes, Route, Link } from "react-router-dom"
import Account from "./account/Account"
import ChangePwd from "./changePwd/ChangePwd"
import SNSRegister from "./sns/SNSRegister"

interface IMyPageProps {
  changeLink: (link: string) => void;
  selectMenu: string;
}

function MyPageView ({changeLink, selectMenu}:IMyPageProps) {
  const {t} = useTranslation()
  return (
    <ComponentWrapper>
      <NavWrapper>
        <NavContainer>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.home')}</NavTitle>
            <NavSubTitle curLink='notice' selectLink={selectMenu}>{t('mypage.nav.subTitle.notice')}</NavSubTitle>
            <NavSubTitle curLink='sub2' selectLink={selectMenu}>sub2</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.study')}</NavTitle>
            <NavSubTitle curLink='write-study' selectLink={selectMenu}>{t('mypage.nav.subTitle.writeStudy')}</NavSubTitle>
            <NavSubTitle curLink='submit-study' selectLink={selectMenu}>{t('mypage.nav.subTitle.submitStudy')}</NavSubTitle>
            <NavSubTitle curLink='request-study' selectLink={selectMenu}>{t('mypage.nav.subTitle.requestStudy')}</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.mento')}</NavTitle>
            <NavSubTitle curLink='write-mento' selectLink={selectMenu}>{t('mypage.nav.subTitle.writeMento')}</NavSubTitle>
            <NavSubTitle curLink='submit-mento' selectLink={selectMenu}>{t('mypage.nav.subTitle.submitMento')}</NavSubTitle>
            <NavSubTitle curLink='request-mento' selectLink={selectMenu}>{t('mypage.nav.subTitle.requestMento')}</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.setting')}</NavTitle>
            <Link to="account" onClick={() => changeLink('account')}>
              <NavSubTitle curLink='account' selectLink={selectMenu}>{t('mypage.nav.subTitle.account')}</NavSubTitle>
            </Link>
            <Link to="change-pwd" onClick={() => changeLink('change-pwd')}>
              <NavSubTitle curLink='change-pwd' selectLink={selectMenu}>{t('mypage.nav.subTitle.changePwd')}</NavSubTitle>
            </Link>
            <Link to="sns-register" onClick={() => changeLink('sns-register')}>
              <NavSubTitle curLink='sns-register' selectLink={selectMenu}>{t('mypage.nav.subTitle.snsRegister')}</NavSubTitle>
            </Link>
          </NavForm>
        </NavContainer>
        <MypageComponent>
          <Routes>
            <Route path="sns-register" element={<SNSRegister />} />
            <Route path="account" element={<Account />} />
            <Route path="change-pwd" element={<ChangePwd />} />
          </Routes>
        </MypageComponent>
      </NavWrapper>
    </ComponentWrapper>
  )
}

export default MyPageView