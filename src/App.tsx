import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '@modules/loginInfo';
import {useEffect, useState} from 'react';
import {isLogin} from '@api/user';
import {loginHandleException} from '@utils/errorUtils';
import {getLoginInfo} from '@utils/LoginUtils';
import RouterFactory from '@pages/RouterFactory';
import { apiClient } from '@api/customAxios';

function App() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [isRender, setIsRender] = useState(false);

  // 새로고침 시 로그인상태(토큰) 검증
  const isLoginAPI = async () => {
    try {
      await setInitData();
      const response = await isLogin();
      // 로그인 후에만 아래 로직 처리
      if (response?.accessToken) {
        const accessToken = response.accessToken;
        const loginInfo = getLoginInfo(accessToken);
        dispatch(login(loginInfo));
      }
    } catch (err: any) {
      // 로그인 안됐을 시 에러 처리..
      // 애초에 로그인 상태가 아닌경우, 토큰이 만료된 경우 코드로 나뉘어야 할듯
      const errorCode = loginHandleException(err)
      if (errorCode === 'expired.token') {
        alert('로그인 유효시간이 지났습니다. 다시 로그인 해주세요.')
        
        apiClient.defaults.headers.common['x-access-token'] = '';
        dispatch(logout())
      } else if (errorCode === 'not.login') {
        // 애초에 로그인 상태가 아니기 때문에 그냥 렌더링 처리
      } else {
        alert(errorCode)
      }

    } finally {
      setIsRender(true)
    }
  };

  // 앱 처음 렌더링 시 초기데이터 생성
  const setInitData = async () => {
    // 정책데이터 set
  };

  useEffect(() => {
    isLoginAPI();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      {!isRender ? 'loading...' : <RouterFactory />}
    </>
  );
}

export default App;
