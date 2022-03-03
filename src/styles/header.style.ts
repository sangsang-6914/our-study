import {motion} from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.div)`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 0px 13%;
  position: fixed;
  font-size: 18px;
  z-index: 1;
  background-color: white;
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.mint.basic};
  margin-right: 50px;
  font-style: italic;
  padding: 20px 0px;
`;

const Items = styled.ul`
  font-size: 15px;
  color: ${(props) => props.theme.fontColor.subTitle};
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  float: left;
  overflow: hidden;
`;

const DropdownMenu = styled.a`
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.mint.deepDarker};
  }
`;

const AbstractDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    display: block;
  }
`;

const StudyDropdownContent = styled(AbstractDropdownContent)``;

const MentoDropdownContent = styled(AbstractDropdownContent)``;

const ProfileDropdownContent = styled(AbstractDropdownContent)`
  min-width: 300px;
  height: 200px;
`;

const Item = styled.li<{type?: string}>`
  margin-right: 40px;
  padding: 10px 0px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.mint.deepDarker};
  }
  &:hover
    ~ ${(props) =>
      props.type === 'study'
        ? StudyDropdownContent
        : props.type === 'mento'
        ? MentoDropdownContent
        : null} {
    display: block;
  }
`;

const HeaderBtn = styled.button<{bgColor: string}>`
  background-color: ${(props) =>
    props.bgColor === 'darkMint'
      ? props.theme.mint.darker
      : props.theme.mint.deepLighter};
  color: white;
  font-weight: bold;
  border-radius: 10px;
  font-size: 15px;
  border: 0px;
  padding: 8px 15px;
  margin-right: 15px;
  &:hover {
    background-color: ${(props) =>
      props.bgColor === 'darkMint'
        ? props.theme.mint.deepDarker
        : props.theme.mint.lighter};
  }
  cursor: pointer;
`;

const Notice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  .bell {
    color: #73b2b4;
    &:hover {
      color: #5f9ea0;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  padding: 10px 0px;
  &:hover ~ ${ProfileDropdownContent} {
    display: block;
  }
  .profile {
    color: #50c785;
    cursor: pointer;
    &:hover {
      color: #429f6b;
    }
  }
`;

const LanguageBtn = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 1px;
  cursor: pointer;
  .logout {
    color: #ff6464;
    &:hover {
      color: #ff3232;
    }
  }
`;

const navVariants = {
  scroll: {
    borderBottom: '1px solid #d4d3d3',
    boxShadow: '0px 1px 20px #d4d3d3',
  },
  top: {
    borderBottom: '1px solid #f1f1f1',
    boxShadow: '0px 1px 20px #f1f1f1',
  },
};

export {
  Nav,
  Col,
  Logo,
  Items,
  Item,
  HeaderBtn,
  navVariants,
  Profile,
  Notice,
  Dropdown,
  DropdownMenu,
  MentoDropdownContent,
  StudyDropdownContent,
  ProfileDropdownContent,
  LanguageBtn,
  Logout,
};
