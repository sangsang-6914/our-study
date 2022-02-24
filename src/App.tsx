import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from '@pages/home/Home';
import Join from '@pages/join/Join';
import DeveloperInfo from '@pages/developer/DeveloperInfo';
import Header from '@components/header/Header';
import { useTranslation } from 'react-i18next';
import Footer from '@components/footer/Footer';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '@modules/loginInfo';
import Kakao from '@pages/callback/Kakao';
import GitHub from '@pages/callback/GitHub';
import Facebook from '@pages/callback/Facebook';
import Google from '@pages/callback/Google';
import MyPage from '@pages/mypage/MyPage';


const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  console.log('render')
  const { t } = useTranslation();
  const loginInfo = localStorage.getItem('loginInfo')
  if (loginInfo !== null) {
    const realData = JSON.parse(loginInfo)
    const dispatch = useDispatch()
    dispatch(login(realData))
  }
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Router basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<DeveloperInfo />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage/*" element={<MyPage />} />
            <Route path="/oauth/callback/kakao" element={<Kakao />} />
            <Route path="/oauth/callback/github" element={<GitHub />} />
            <Route path="/oauth/callback/facebook" element={<Facebook />} />
            <Route path="/oauth/callback/google" element={<Google />} />
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
