import {loginAPI} from '@api/user';
import {facebookLogin, githubLogin, googleLogin, kakaoLogin} from '@api/social';
import {login, LoginInfoState} from '@modules/loginInfo';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import LoginView from './LoginView';
import {getLoginInfo} from '@utils/LoginUtils';
import {handleException} from '@utils/errorUtils';

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

  const onSubmit = async (data: ILoginForm) => {
    try {
      const response = await loginAPI(data);
      const accessToken = response.data.dataMap.accessToken;
      const loginInfo: LoginInfoState = getLoginInfo(accessToken);

      dispatch(login(loginInfo));

      onClose();
      navigate('/');
    } catch (err) {
      handleException(err);
    }
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
