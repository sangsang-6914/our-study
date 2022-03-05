import { handleException } from '@utils/errorUtils';
import {apiClient} from './customAxios';
interface ILoginProps {
  email: string;
  password: string;
}

interface IJoinProps {
  email: string;
  password: string;
  userName: string;
  mobile: string;
  birthdate?: string;
  gender: string;
  address: string;
  addressDetail?: string;
  postNum: string;
  role?: string;
}

interface IModifyProps {
  userName: string;
  mobile: string;
  birthdate?: string;
  gender: string;
  address: string;
  addressDetail?: string;
  postNum: string;
}

interface IChangePwdProps {
  originalPassword: string;
  password: string;
}

const loginAPI = async (payload: ILoginProps) => {
  return await apiClient.post(`/auth/process`, payload, {
    withCredentials: true,
  });
};

const joinAPI = async (payload: IJoinProps) => {
  return await apiClient.post(`/join/signUp`, payload);
};

const getUser = async (oid: string) => {
    const {data: {dataMap: {userinfo}}} = await apiClient.get(`/user/${oid}`);
    return userinfo
}

const updateUser = async (payload: IModifyProps, oid?: string) => {
  return await apiClient.patch(`/user/${oid}`, payload, {
    withCredentials: true,
  });
};

const updatePwd = async (payload: IChangePwdProps) => {
  const apiData = await apiClient.post(`/user/changePwd`, payload, {
    withCredentials: true,
  });
  return apiData.data;
};

export {loginAPI, joinAPI, updateUser, updatePwd, getUser};
