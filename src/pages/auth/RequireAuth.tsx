import {apiClient} from '@api/customAxios';
import {isLogin} from '@api/user';
import {RootState} from '@modules/index';
import {logout} from '@modules/loginInfo';
import {ComponentWrapper} from '@styles/common.style';
import {loginHandleException} from '@utils/errorUtils';
import {useAsync} from 'react-async';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

function RequireAuth({children}: any) {
  // 1. store의 isLogined 검증
  // 2. isLogined true 일때 서버로 토큰 유효성 검증
  const isLogined = useSelector(
    (state: RootState) => state.loginInfo.isLogined,
  );
  const {data, error, isLoading} = useAsync({
    promiseFn: isLogin,
  });
  const dispatch = useDispatch();

  if (isLoading) return <ComponentWrapper>API loading....</ComponentWrapper>;

  if (isLogined) {
    // 로그인 토큰 만료
    if (!!error) {
      const errorCode = loginHandleException(error);
      if (errorCode === 'token.expired') {
        apiClient.defaults.headers.common['x-access-token'] = '';
        dispatch(logout());
        alert('로그인 유효시간이 지났습니다. 다시 로그인해 주세요.');
      }
      return <Navigate to="/" replace />;

      // 로그인 상태
    } else if (!!data?.accessToken) {
      return children;
    } else {
      return children;
    }
  } else {
    return <Navigate to="/" replace />;
  }
}

export default RequireAuth;
