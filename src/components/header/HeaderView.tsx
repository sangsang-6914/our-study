import { AnimationControls } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Col,
  Item,
  Items,
  HeaderBtn,
  Nav,
  Logo,
  navVariants,
} from '@styles/header.style';
import { useState } from 'react';
import Modal from '@components/common/Modal';
import Login from '@pages/login/Login';

interface IHeaderViewProps {
  handleChangeLanguage: () => void;
  navAni: AnimationControls;
}

function HeaderView({ handleChangeLanguage, navAni }: IHeaderViewProps) {
  const { t, i18n } = useTranslation();
  const [isLoginModal, setIsLoginModal] = useState(false)

  const showLoginModal = () => {
    setIsLoginModal(prev => !prev)
  }
  return (
    <>
      <Nav variants={navVariants} initial="top" animate={navAni}>
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
          <HeaderBtn bgColor="darkMint" onClick={showLoginModal}>
            {t('header.button.login')}
          </HeaderBtn>
          <Link to="/join">
            <HeaderBtn bgColor="lightMint">
              {t('header.button.signup')}
            </HeaderBtn>
          </Link>
        </Col>
      </Nav>
      {
        isLoginModal && (
          <Modal
            visible={true}
            maskClosable={true}
            onClose={showLoginModal}
            width="380"
          >
            <Login onClose={showLoginModal}/>
          </Modal>
        )
      }
    </>
  );
}

export default HeaderView;
