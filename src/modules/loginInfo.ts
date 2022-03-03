import {ILoginForm} from '@pages/login/Login';

export const LOGIN = 'loginInfo/LOGIN' as const;
export const LOGOUT = 'loginInfo/LOGOUT' as const;

export const login = (payload: LoginInfoState) => ({
  type: LOGIN,
  payload: payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export type LoginInfoState = {
  oid: string;
  email: string;
  name: string;
  mobile: string;
  role?: string;
  isLogined?: boolean;
  a_c_t?: string;
};

type LoginInfoAction = ReturnType<typeof login> | ReturnType<typeof logout>;

const initialState: LoginInfoState = {
  oid: '',
  email: '',
  name: '',
  mobile: '',
  role: '',
  isLogined: false,
  a_c_t: '',
};

const loginInfo = (
  state: LoginInfoState = initialState,
  action: LoginInfoAction,
) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      return action.payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default loginInfo;
