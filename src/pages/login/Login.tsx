import { login } from "@api/axios";
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
  const moveToJoin = () => {
    navigate('/join')
    onClose()
  }

  const onSubmit = (data:ILoginForm) => {
    // 로그인 API 호출
    login(data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    alert('로그인 완료')
    onClose()
    navigate('/')
  }

  const props = {
    onSubmit,
    moveToJoin
  }

  return (
    <LoginView {...props} />
  )
}

export default Login