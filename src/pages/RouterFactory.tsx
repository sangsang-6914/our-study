import Header from '@components/header/Header';
import {Facebook, Google} from '@styles/login.style';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GitHub from './callback/GitHub';
import Kakao from './callback/Kakao';
import DeveloperInfo from './developer/DeveloperInfo';
import Home from './home/Home';
import Join from './join/Join';
import MyPage from './mypage/MyPage';
import Developer from './study/developer/Developer';
import KakaoRegister from '@pages/callback/KakaoRegister';
import GithubRegister from '@pages/callback/GithubRegister';
import FacebookRegister from '@pages/callback/FacebookRegister';
import GoogleRegister from '@pages/callback/GoogleRegister';
import Footer from '@components/footer/Footer';
import {Wrapper} from '@styles/router.style';
import RequireAuth from './auth/RequireAuth';

function RouterPage() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<DeveloperInfo />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage/*" element={<RequireAuth><MyPage /></RequireAuth>} />
          {/* Study */}
          <Route path="/study/developer/*" element={<Developer />} />
          {/* SNS 관련 page */}
          <Route path="/oauth/callback/kakao" element={<Kakao />} />
          <Route path="/oauth/callback/github" element={<GitHub />} />
          <Route path="/oauth/callback/facebook" element={<Facebook />} />
          <Route path="/oauth/callback/google" element={<Google />} />
          <Route
            path="/oauth/callback/register/kakao"
            element={<KakaoRegister />}
          />
          <Route
            path="/oauth/callback/register/github"
            element={<GithubRegister />}
          />
          <Route
            path="/oauth/callback/register/facebook"
            element={<FacebookRegister />}
          />
          <Route
            path="/oauth/callback/register/google"
            element={<GoogleRegister />}
          />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default RouterPage;
