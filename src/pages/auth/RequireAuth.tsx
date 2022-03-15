import {apiClient} from '@api/customAxios';
import {isLogin} from '@api/user';
import {RootState} from '@modules/index';
import {logout} from '@modules/loginInfo';
import {ComponentWrapper} from '@styles/common.style';
import {loginHandleException} from '@utils/errorUtils';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

function RequireAuth({children}: any) {
  // 1. 로그인 상태 확인
  // 2. 로그인 상태 일때 토큰 유효성 검증
  const [isRender, setIsRender] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const isLogined = useSelector(
    (state: RootState) => state.loginInfo.isLogined,
  );
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const isLoginAPI = async () => {
    try {
      const response = await isLogin();
      if (!!response?.accessToken) {
        setIsAuth(true);
      }
    } catch (err) {
      const errorCode = loginHandleException(err);
      if (errorCode === 'token.expired') {
        apiClient.defaults.headers.common['x-access-token'] = '';
        dispatch(logout());
        alert(t('alert.tokenExpired'));
      }
    } finally {
      setIsRender(true);
    }
  };

  useEffect(() => {
    isLoginAPI();
  }, []);

  const redirectHome = () => {
    return <Navigate to="/" replace />;
  };

  return (
    <>
      {!isLogined ? (
        redirectHome()
      ) : !isRender ? (
        <ComponentWrapper>loading...</ComponentWrapper>
      ) : isAuth ? (
        children
      ) : (
        redirectHome()
      )}
    </>
  );
}

export default RequireAuth;
