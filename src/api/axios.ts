import axios from "axios";
import { KAKAO_API_KEY } from "./apiKey";
import { apiClient } from "./customAxios";

const REDIRECT_URI ='http://localhost:3000/our-study/oauth/callback/kakao'
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
  const apiData = await apiClient.post(`/auth`, payload)
  return apiData.data
}

const joinAPI = async (payload: IJoinProps) => {
  payload.role = 'USEr';
  const apiData = await apiClient.post(`/join/signUp`, payload)
  return apiData.data
}

const kakaoLogin = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

export {
  loginAPI,
  joinAPI,
  kakaoLogin
}