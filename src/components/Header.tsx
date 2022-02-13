import { useAnimation, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Item,
  Items,
  HeaderBtn,
  Logo,
  Nav,
  navVariants,
} from '../style/header';

function Header() {
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
  return (
    <>
      <Nav variants={navVariants} initial="top" animate={navAnimation}>
        <Col>
          <Logo>
            <Link to="/">Our Study</Link>
          </Logo>
          <Items>
            <Item>
              <Link to="/developer">개발자 소개</Link>
            </Item>
            <Item>스터디</Item>
            <Item>멘토</Item>
          </Items>
        </Col>
        <Col>
          <HeaderBtn bgColor="darkMint">로그인</HeaderBtn>
          <Link to="/join">
            <HeaderBtn bgColor="lightMint">회원가입</HeaderBtn>
          </Link>
        </Col>
      </Nav>
    </>
  );
}

export default Header;
