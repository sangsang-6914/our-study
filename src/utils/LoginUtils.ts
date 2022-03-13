import {apiClient} from '@api/customAxios';
import {login, LoginInfoState, logout} from '@modules/loginInfo';
import { useDispatch } from 'react-redux';
import { loginHandleException } from './errorUtils';

// jwtToken parsing
const JWTParseToString = (payload: string) => {
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
};

const JWTParseToObject = (payload: string) => {
  return JSON.parse(JWTParseToString(payload));
};

const getLoginInfo = (accessToken: string): LoginInfoState => {
  apiClient.defaults.headers.common['x-access-token'] = accessToken;
  // 토큰 parsing
  const tokenPayload = accessToken.split('.')[1];
  const tokenObj = JWTParseToObject(tokenPayload);
  const loginInfo: LoginInfoState = {
    oid: tokenObj.userinfo.oid,
    email: tokenObj.userinfo.email,
    name: tokenObj.userinfo.username,
    mobile: tokenObj.userinfo.mobile,
    isLogined: true,
    a_c_t: accessToken,
  };

  return loginInfo;
};

export {JWTParseToString, JWTParseToObject, getLoginInfo};
