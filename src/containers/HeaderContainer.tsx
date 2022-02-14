import { useAnimation, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

function HeaderContainer() {
  const { scrollY } = useViewportScroll();
  const navAnimation = useAnimation();
  const { i18n } = useTranslation();

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

  return (
    <Header
      navAnimation={navAnimation}
      handleChangeLanguage={handleChangeLanguage}
    />
  );
}

export default HeaderContainer;
