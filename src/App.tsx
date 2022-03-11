import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '@modules/loginInfo';
import {useEffect, useState} from 'react';
import {isLogin} from '@api/user';
import {handleException} from '@utils/errorUtils';
import {getLoginInfo} from '@utils/LoginUtils';
import {RootState} from './modules/index';
import RouterFactory from '@pages/RouterFactory';
import {useQuery} from 'react-query';

function App() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [isRender, setIsRender] = useState(false);

  // 새로고침 시 로그인상태(토큰) 검증
  const isLoginAPI = async () => {
    try {
      const response = await isLogin();
      // 로그인 후에만 아래 로직 처리
      if (response?.accessToken) {
        const accessToken = response.accessToken;
        const loginInfo = getLoginInfo(accessToken);

        dispatch(login(loginInfo));
        await setInitData();
        console.log('init data after!!!');
        setIsRender(true);
      }
    } catch (err) {
      handleException(err);
    }
  };

  const setInitData = async () => {
    const response = await isLogin();
    console.log(response);
    console.log('initdata!!');
  };

  useEffect(() => {
    isLoginAPI();
  }, []);

  console.log(isRender);

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
