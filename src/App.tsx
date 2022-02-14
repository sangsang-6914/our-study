import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Join from './components/Join';
import DeveloperInfo from './components/DeveloperInfo';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <>
      <Helmet>
        <title>우리의 스터디</title>
      </Helmet>
      <Router>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<DeveloperInfo />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
