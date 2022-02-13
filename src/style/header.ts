import { motion } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.div)`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 0px 300px;
  position: fixed;
  font-size: 18px;
  z-index: 1;
  background-color: white;
`;

const Col = styled.div`
  display: flex;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.mint.basic};
  margin-right: 50px;
  font-style: italic;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 40px;
`;

const HeaderBtn = styled.button<{ bgColor: string }>`
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
  margin-right: 10px;
  &:hover {
    background-color: ${(props) =>
      props.bgColor === 'darkMint'
        ? props.theme.mint.deepDarker
        : props.theme.mint.lighter};
  }
  cursor: pointer;
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

export { Nav, Col, Logo, Items, Item, HeaderBtn, navVariants };
