import { useTranslation } from 'react-i18next';
import { useAnimation, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import HeaderView from './HeaderView';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@modules/index';
import { logout } from '@modules/loginInfo';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { i18n } = useTranslation();
  const { scrollY } = useViewportScroll();
  const navAnimation = useAnimation();
  const isLogined = useSelector((state:RootState) => state.loginInfo.isLogined)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 1) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [navAnimation, scrollY]);

  const handleChangeLanguage = () => {
    const curLang = i18n.language;
    let changeLang;
    if (curLang.includes('ko')) {
      changeLang = 'en';
    } else {
      changeLang = 'ko';
    }
    i18n.changeLanguage(changeLang);
  };

  const onLogout = () => {
    alert('로그아웃 성공')
    dispatch(logout())
    navigate('/')
  }

  const props = {
    handleChangeLanguage,
    navAni: navAnimation,
    isLogined,
    onLogout,
    onProfile: () => { navigate('/mypage/account') }
  };

  return (
    <>
      <HeaderView {...props} />
    </>
  );
}

export default Header;
