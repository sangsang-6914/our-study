import axios from "axios";
import { apiClient } from "./customAxios";

const API_KEY = '735b21c68f4ab7d810f8ca1e1578e69e'
const REDIRECT_URI ='http://localhost:3000/oauth/callback/kakao'
interface ILoginProps {
  email: string;
  password: string;
}

interface IJoinProps {
  email: string;
  password: string;
  userName: string;
  mobile: string;
  birthdata?: string;
  gender: string;
  address: string;
  addressDetail?: string;
  postNum: string;
  role?: string;
}

const loginAPI = async (payload: ILoginProps) => {
  const apiData = await apiClient.post(`/auth`, {
    payload
  })
  return apiData.data
}

const joinAPI = async (payload: IJoinProps) => {
  payload.role = 'USEr';
  const apiData = await apiClient.post(`/join/signUp`, {
    payload
  })
  return apiData.data
}

const kakaoLogin = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

export {
  loginAPI,
  joinAPI,
  kakaoLogin
}