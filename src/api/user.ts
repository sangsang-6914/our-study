import {handleException} from '@utils/errorUtils';
import {apiClient} from './customAxios';
interface ILoginProps {
  email: string;
  password: string;
}

interface IJoinProps {
  email: string;
  password: string;
  username: string;
  mobile: string;
  birthdate?: string;
  gender: string;
  address: string;
  addressDetail?: string;
  postNum: string;
  role?: string;
}

interface IModifyProps {
  username?: string;
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
  oid: string;
}

const loginAPI = async (payload: ILoginProps) => {
  return await apiClient.post(`/auth/process`, payload, {
    withCredentials: true,
  });
};

const joinAPI = async (payload: IJoinProps) => {
  return await apiClient.post(`/join/signUp`, payload);
};

const logoutAPI = async () => {
  return await apiClient.get(`/auth/logout`, {
    withCredentials: true,
  });
};

const getUser = async (oid: string) => {
  const {
    data: {
      dataMap: {userinfo},
    },
  } = await apiClient.get(`/user/${oid}`);
  return userinfo;
};

const updateUser = async (payload: IModifyProps, oid?: string) => {
  return await apiClient.put(`/user/${oid}`, payload, {
    withCredentials: true,
  });
};

const updatePwd = async (payload: IChangePwdProps) => {
  return await apiClient.post(`/user`, payload, {
    withCredentials: true,
  });
};

const isLogin = async () => {
  const {
    data: {dataMap},
  } = await apiClient.get(`/auth/`, {
    withCredentials: true,
  });
  return dataMap;
};

export {loginAPI, joinAPI, logoutAPI, updateUser, updatePwd, getUser, isLogin};
