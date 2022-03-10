import {AnimationControls} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {BsBellFill} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import Korea from '@assets/img/korea.png';
import America from '@assets/img/america.png';
import {ImExit} from 'react-icons/im';
import {
  Col,
  Item,
  Items,
  HeaderBtn,
  Nav,
  Logo,
  navVariants,
  Profile,
  Notice,
  Dropdown,
  StudyDropdownContent,
  DropdownMenu,
  MentoDropdownContent,
  ProfileDropdownContent,
  Logout,
  LanguageBtn,
} from '@styles/header.style';
import {useState} from 'react';
import Modal from '@components/common/Modal';
import Login from '@pages/login/Login';
import {LoginInfoState} from '@modules/loginInfo';
import selectMenu, {selectHeader, selectNav} from '@modules/selectMenu';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

interface IHeaderViewProps {
  handleChangeLanguage: () => void;
  navAni: AnimationControls;
  loginInfo?: LoginInfoState;
  onLogout: () => void;
  changeMenu: (menu: string) => void;
  changeMenuAndHeader: (menu: string, headerMenu: string) => void;
  changeHeaderMenu: (menu: string) => void;
  selectHeaderMenu: string;
}

function HeaderView({
  handleChangeLanguage,
  navAni,
  loginInfo,
  onLogout,
  changeMenu,
  changeMenuAndHeader,
  changeHeaderMenu,
  selectHeaderMenu,
}: IHeaderViewProps) {
  const {t, i18n} = useTranslation();
  const [isLoginModal, setIsLoginModal] = useState(false);

  const showLoginModal = () => {
    setIsLoginModal((prev) => !prev);
  };

  let button;
  if (loginInfo?.isLogined) {
    button = (
      <>
        <Dropdown>
          <Link
            to="/mypage/account"
            onClick={() => changeMenuAndHeader('account', '')}
          >
            <Profile>
              <FaUserCircle className="profile" size={27} />
            </Profile>
          </Link>
          <ProfileDropdownContent></ProfileDropdownContent>
        </Dropdown>
        <Notice>
          <BsBellFill className="bell" size={23} />
        </Notice>
        <Logout title="Logout" onClick={onLogout}>
          <ImExit className="logout" size={25} />
        </Logout>
      </>
    );
  } else {
    button = (
      <>
        <HeaderBtn bgColor="darkMint" onClick={showLoginModal}>
          {t('header.button.login')}
        </HeaderBtn>
        <Link to="/join">
          <HeaderBtn bgColor="lightMint">{t('header.button.signup')}</HeaderBtn>
        </Link>
      </>
    );
  }

  return (
    <>
      <Nav variants={navVariants} initial="top" animate={navAni}>
        <Col>
          <Logo onClick={() => changeHeaderMenu('')}>
            <Link to="/">Our Study</Link>
          </Logo>
          <Items>
            <Item
              curLink="developer"
              selectLink={selectHeaderMenu}
              onClick={() => changeHeaderMenu('developer')}
            >
              <Link to="/developer">{t('header.item.developer')}</Link>
            </Item>
            <Dropdown>
              <Item type="study" curLink="study" selectLink={selectHeaderMenu}>
                {t('header.item.study.title')}
              </Item>
              <StudyDropdownContent>
                <Link
                  to="/study/developer/study"
                  onClick={() => changeMenuAndHeader('study', 'study')}
                >
                  <DropdownMenu>
                    {t('header.item.study.sub.developer')}
                  </DropdownMenu>
                </Link>
                <DropdownMenu>{t('header.item.study.sub.design')}</DropdownMenu>
                <DropdownMenu>
                  {t('header.item.study.sub.security')}
                </DropdownMenu>
                <DropdownMenu>{t('header.item.study.sub.infra')}</DropdownMenu>
                <DropdownMenu>{t('header.item.study.sub.plan')}</DropdownMenu>
              </StudyDropdownContent>
            </Dropdown>
            <Dropdown>
              <Item type="mento" curLink="mento" selectLink="developer">
                {t('header.item.mento.title')}
              </Item>
              <MentoDropdownContent>
                <DropdownMenu>{t('header.item.mento.sub.mento')}</DropdownMenu>
                <DropdownMenu>{t('header.item.mento.sub.menti')}</DropdownMenu>
              </MentoDropdownContent>
            </Dropdown>
          </Items>
        </Col>
        <Col>
          {button}
          {i18n.language.includes('ko') ? (
            <LanguageBtn src={America} onClick={handleChangeLanguage} />
          ) : (
            <LanguageBtn src={Korea} onClick={handleChangeLanguage} />
          )}
        </Col>
      </Nav>
      {isLoginModal && (
        <Modal
          visible={true}
          maskClosable={true}
          closable={true}
          onClose={showLoginModal}
          width="380"
        >
          <Login onClose={showLoginModal} />
        </Modal>
      )}
    </>
  );
}

export default HeaderView;
