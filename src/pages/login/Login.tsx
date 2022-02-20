import { loginAPI, kakaoLogin } from "@api/axios";
import { RootState } from "@modules/index";
import { login } from "@modules/loginInfo"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";

interface ILoginProps {
  onClose: () => void;
}

export interface ILoginForm {
  email: string;
  password: string;
}

function Login ({onClose}:ILoginProps) {
  const navigate = useNavigate()
  const loginInfo = useSelector((state:RootState) => state.loginInfo)
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

  const props = {
    onSubmit,
    moveToJoin,
    onKakaoLogin
  }

  return (
    <LoginView {...props} />
  )
}

export default Login