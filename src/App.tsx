import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '@modules/loginInfo';
import {useEffect} from 'react';
import {isLogin} from '@api/user';
import {handleException} from '@utils/errorUtils';
import {getLoginInfo} from '@utils/LoginUtils';
import {RootState} from './modules/index';
import RouterFactory from '@pages/RouterFactory';

function App() {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  // 새로고침 시 로그인상태(토큰) 검증
  useEffect(() => {
    isLoginAPI();
  }, []);

  const isLoginAPI = async () => {
    try {
      const response = await isLogin();
      // 로그인 후에만 아래 로직 처리
      if (response?.accessToken) {
        const accessToken = response.accessToken;
        const loginInfo = getLoginInfo(accessToken);

        dispatch(login(loginInfo));
      }
    } catch (err) {
      handleException(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <RouterFactory />
    </>
  );
}

export default App;
