import {useTranslation} from 'react-i18next';
import {useAnimation, useViewportScroll} from 'framer-motion';
import {useEffect} from 'react';
import HeaderView from './HeaderView';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@modules/index';
import {logout} from '@modules/loginInfo';
import {useNavigate} from 'react-router-dom';
import {apiClient} from '@api/customAxios';
import {selectHeader, selectNav} from '@modules/selectMenu';
import {changeHeaderMenuForRefresh} from '@utils/commonUtils';
import {logoutAPI} from '@api/user';
import {handleException} from '@utils/errorUtils';
import {useQueryClient} from 'react-query';
import useLogout from '@hooks/useLogout';

function Header() {
  const {i18n} = useTranslation();
  const {scrollY} = useViewportScroll();
  const navAnimation = useAnimation();
  const loginInfo = useSelector((state: RootState) => state.loginInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectHeaderMenu = useSelector(
    (state: RootState) => state.selectMenu.headerMenu,
  );

  if (selectHeaderMenu === '') {
    const curHeaderMenu = changeHeaderMenuForRefresh();
    dispatch(selectHeader(curHeaderMenu));
  }

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

  const onLogout = async () => {
    try {
      await logoutAPI();

      // 로그아웃 후처리 (header accesstoken 삭제, store 초기화)
      apiClient.defaults.headers.common['x-access-token'] = '';
      dispatch(logout());
      // useLogout();

      alert('로그아웃 성공');
      navigate('/');
    } catch (err) {
      handleException(err);
    }
  };

  const props = {
    handleChangeLanguage,
    navAni: navAnimation,
    loginInfo,
    onLogout,
    changeHeaderMenu: (menu: string) => dispatch(selectHeader(menu)),
    selectHeaderMenu,
    changeMenu: (menu: string) => {
      dispatch(selectNav(menu));
    },
    changeMenuAndHeader: (menu: string, headerMenu: string) => {
      dispatch(selectNav(menu));
      dispatch(selectHeader(headerMenu));
    },
  };

  return (
    <>
      <HeaderView {...props} />
    </>
  );
}

export default Header;
