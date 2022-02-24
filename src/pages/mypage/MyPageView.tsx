import { ComponentWrapper } from "@styles/common.style"
import { MypageComponent, MypageNav, MyPageWrapper, NavForm, NavSubTitle, NavTitle } from "@styles/mypage.style"
import { useTranslation } from "react-i18next"
import { Routes, Route, Link } from "react-router-dom"
import Account from "./account/Account"
import ChangePwd from "./changePwd/ChangePwd"
import SNSRegister from "./sns/SNSRegister"

interface IMyPageProps {
  selectLink: string;
  changeLink: (link: string) => void;
}

function MyPageView ({selectLink, changeLink}:IMyPageProps) {
  const {t} = useTranslation()
  return (
    <ComponentWrapper>
      <MyPageWrapper>
        <MypageNav>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.home')}</NavTitle>
            <NavSubTitle curLink='notice' selectLink={selectLink}>{t('mypage.nav.subTitle.notice')}</NavSubTitle>
            <NavSubTitle curLink='sub2' selectLink={selectLink}>sub2</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.study')}</NavTitle>
            <NavSubTitle curLink='write-study' selectLink={selectLink}>{t('mypage.nav.subTitle.writeStudy')}</NavSubTitle>
            <NavSubTitle curLink='submit-study' selectLink={selectLink}>{t('mypage.nav.subTitle.submitStudy')}</NavSubTitle>
            <NavSubTitle curLink='request-study' selectLink={selectLink}>{t('mypage.nav.subTitle.requestStudy')}</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.mento')}</NavTitle>
            <NavSubTitle curLink='write-mento' selectLink={selectLink}>{t('mypage.nav.subTitle.writeMento')}</NavSubTitle>
            <NavSubTitle curLink='submit-mento' selectLink={selectLink}>{t('mypage.nav.subTitle.submitMento')}</NavSubTitle>
            <NavSubTitle curLink='request-mento' selectLink={selectLink}>{t('mypage.nav.subTitle.requestMento')}</NavSubTitle>
          </NavForm>
          <NavForm>
            <NavTitle>{t('mypage.nav.title.setting')}</NavTitle>
            <Link to="account" onClick={() => changeLink('account')}>
              <NavSubTitle curLink='account' selectLink={selectLink}>{t('mypage.nav.subTitle.account')}</NavSubTitle>
            </Link>
            <Link to="change-pwd" onClick={() => changeLink('change-pwd')}>
              <NavSubTitle curLink='change-pwd' selectLink={selectLink}>{t('mypage.nav.subTitle.changePwd')}</NavSubTitle>
            </Link>
            <Link to="sns-register" onClick={() => changeLink('sns-register')}>
              <NavSubTitle curLink='sns-register' selectLink={selectLink}>{t('mypage.nav.subTitle.snsRegister')}</NavSubTitle>
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

export default MyPageView