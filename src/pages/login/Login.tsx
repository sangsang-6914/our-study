import {loginAPI} from '@api/user';
import {facebookLogin, githubLogin, googleLogin, kakaoLogin} from '@api/social';
import {login, LoginInfoState} from '@modules/loginInfo';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import LoginView from './LoginView';
import {JWTParseToObject} from '@utils/JWTUtils';
import {apiClient} from '@api/customAxios';

interface ILoginProps {
  onClose: () => void;
}

export interface ILoginForm {
  email: string;
  password: string;
}

function Login({onClose}: ILoginProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moveToJoin = () => {
    onClose();
    navigate('/join');
  };

  const onSubmit = (data: ILoginForm) => {
    // 로그인 API 호출
    loginAPI(data)
      .then((response) => {
        // response에 사용자 정보 담겨있어야함
        console.log(response);
        console.log(response.dataMap.accessToken);
        const accessToken = response.dataMap.accessToken;
        apiClient.defaults.headers.common['x-access-token'] = accessToken;
        // 로그인정보 저장 (redux)
        // accesstoken save => localStorage vs Cookie ?
        const tokenPayload = accessToken.split('.')[1];
        const tokenObj = JWTParseToObject(tokenPayload);
        console.log(tokenObj);
        const loginInfo: LoginInfoState = {
          oid: tokenObj.userinfo.oid,
          email: tokenObj.userinfo.email,
          name: tokenObj.userinfo.username,
          mobile: tokenObj.userinfo.mobile,
          isLogined: true,
          a_c_t: accessToken,
        };

        // TODO: 서버에서 sid처리가 끝나면 cookie에서 가져와서 처리하도록 변경
        localStorage.setItem('loginInfo', JSON.stringify(loginInfo));

        dispatch(login(loginInfo));

        onClose();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert('로그인 실패');
      });
  };

  const props = {
    onSubmit,
    moveToJoin,
    onKakaoLogin: () => (location.href = kakaoLogin),
    onGithubLogin: () => (location.href = githubLogin),
    onFacebookLogin: () => (location.href = facebookLogin),
    onGoogleLogin: () => (location.href = googleLogin),
  };

  return <LoginView {...props} />;
}

export default Login;
