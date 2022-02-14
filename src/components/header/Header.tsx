import { Link } from 'react-router-dom';
import {
  Col,
  Item,
  Items,
  HeaderBtn,
  Logo,
  Nav,
  navVariants,
} from './header.style';
import { useTranslation } from 'react-i18next';
import { useAnimation, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';

function Header() {
  const { t, i18n } = useTranslation();

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

  return (
    <>
      <Nav variants={navVariants} initial="top" animate={navAnimation}>
        <Col>
          <Logo>
            <Link to="/">Our Study</Link>
          </Logo>
          <Items>
            <Item>
              <Link to="/developer">{t('header.item.developer')}</Link>
            </Item>
            <Item>{t('header.item.study')}</Item>
            <Item>{t('header.item.mento')}</Item>
          </Items>
        </Col>
        <Col>
          <HeaderBtn onClick={handleChangeLanguage} bgColor="lightMint">
            {i18n.language.includes('ko') ? 'en' : 'ko'}
          </HeaderBtn>
          <HeaderBtn bgColor="darkMint">{t('header.button.login')}</HeaderBtn>
          <Link to="/join">
            <HeaderBtn bgColor="lightMint">
              {t('header.button.signup')}
            </HeaderBtn>
          </Link>
        </Col>
      </Nav>
    </>
  );
}

export default Header;
