import axios from "axios";
import { apiClient } from "./customAxios";

const BASE_URL = 'https://127.0.0.1:14000/api/v1';

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

const login = async (payload: ILoginProps) => {
  const apiData = await apiClient.post(`/auth`, {
    payload
  })
  return apiData.data
}

const join = async (payload: IJoinProps) => {
  payload.role = 'USEr';
  const apiData = await apiClient.post(`/join/signUp`, {
    payload
  })
  return apiData.data
}

export {
  login,
  join
}