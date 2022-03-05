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
  return await apiClient.post(`/join/signUp`, payload);
};

const getUser = async (oid: string) => {
    const {data: {dataMap}} = await apiClient.get(`/user/${oid}`);
    console.log(dataMap)
    return dataMap
}

const updateUser = async (payload: IModifyProps) => {
  const apiData = await apiClient.post(`/user/update`, payload, {
    withCredentials: true,
  });
  return apiData.data;
};

const updatePwd = async (payload: IChangePwdProps) => {
  const apiData = await apiClient.post(`/user/changePwd`, payload, {
    withCredentials: true,
  });
  return apiData.data;
};

export {loginAPI, joinAPI, updateUser, updatePwd, getUser};
