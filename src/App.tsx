import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from '@pages/home/Home';
import Join from '@pages/join/Join';
import DeveloperInfo from '@pages/developer/DeveloperInfo';
import Header from '@components/header/Header';
import { useTranslation } from 'react-i18next';
import Footer from '@components/footer/Footer';
import styled from 'styled-components';
import Login from '@pages/login/Login';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Router>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<DeveloperInfo />} />
            <Route path="/join" element={<Join />} />
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
