import { loginAPI } from "@api/login";
import { githubLogin, kakaoLogin } from "@api/social";
import { login } from "@modules/loginInfo"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";

interface ILoginProps {
  onClose: () => void;
}

export interface ILoginForm {
  email: string;
  password: string;
}

interface IGoogleSuccess {
  accessToken: string;
  googleId: string;
  profileObj: {
    email: string;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
  }
  tokenId: string;
}

function Login ({onClose}:ILoginProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const moveToJoin = () => {
    onClose()
    navigate('/join')
  }

  const onSubmit = (data:ILoginForm) => {
    // 로그인 API 호출
    loginAPI(data)
      .then(response => {
        // response에 사용자 정보 담겨있어야함
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    // 로그인정보 저장 (redux)
    // email, role, isLogined, name 등 사용자 정보
    alert('로그인 성공')
    dispatch(login(data))
    onClose()
    navigate('/')
  }
  
  const onKakaoLogin = () => {
    location.href = kakaoLogin
  }

  const onGoogleSuccess = (response: IGoogleSuccess) => {
    const { accessToken, tokenId, profileObj : { googleId, email, name } } = response;
    console.log(accessToken)
    console.log(googleId)
    console.log(tokenId)
    console.log(email, name)
    // google id -> idtoken -> 백엔드 전달 -> 우리쪽 토큰 받기
  }

  const onGoogleFail = (error: any) => {
    console.log(error);
  }

  const onGithubLogin = () => {
    location.href = githubLogin
  }

  const props = {
    onSubmit,
    moveToJoin,
    onKakaoLogin,
    onGoogleSuccess,
    onGoogleFail,
    onGithubLogin
  }

  return (
    <LoginView {...props} />
  )
}

export default Login