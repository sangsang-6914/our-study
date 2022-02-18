import { useTranslation } from 'react-i18next';
import { useAnimation, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import HeaderView from './HeaderView';

function Header() {
  const { i18n } = useTranslation();
  const { scrollY } = useViewportScroll();
  const navAnimation = useAnimation();

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

  const props = {
    handleChangeLanguage,
    navAni: navAnimation,
  };

  return (
    <>
      <HeaderView {...props} />
    </>
  );
}

export default Header;
