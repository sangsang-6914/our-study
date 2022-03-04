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
  birthdata?: string;
  gender: string;
  address: string;
  addressDetail?: string;
  postNum: string;
  role?: string;
}

interface IModifyProps {
  userName: string;
  mobile: string;
  birthdata?: string;
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
  return await apiClient.post(`/join/signUp`, payload, {
    withCredentials: true,
  });
};

const updateUser = async (payload: IModifyProps) => {
  const apiData = await apiClient.post(`/user/update`, payload);
  return apiData.data;
};

const updatePwd = async (payload: IChangePwdProps) => {
  const apiData = await apiClient.post(`/user/changePwd`, payload);
  return apiData.data;
};

export {loginAPI, joinAPI, updateUser, updatePwd};
