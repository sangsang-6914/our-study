import { ILoginForm } from "@pages/login/Login";

export const LOGIN = 'loginInfo/LOGIN' as const;
export const LOGOUT = 'loginInfo/LOGOUT' as const;


export const login = (payload:ILoginForm) => ({
  type: LOGIN,
  payload: payload
})

export const logout = () => ({
  type: LOGOUT
})

type LoginInfoState = {
  email: string;
  name: string;
  isLogined: boolean;
}

type LoginInfoAction = ReturnType<typeof login> | ReturnType<typeof logout>

const initialState:LoginInfoState = {
  email: '',
  name: '',
  isLogined: false
}

const loginInfo = (state:LoginInfoState = initialState, action: LoginInfoAction) => {
  switch (action.type) {
    case LOGIN:
      const loginData = {
        email: action.payload.email,
        isLogined: true,
        name: 'TEST'
      }
      localStorage.setItem('loginInfo', JSON.stringify(loginData))
      return loginData
    case LOGOUT:
      localStorage.removeItem('loginInfo')
      return initialState
    default:
      return state
  }
}

export default loginInfo