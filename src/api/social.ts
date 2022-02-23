import { apiClient } from "./customAxios"

const GOOGLE_CLIENT_ID = '103151941059-t8461squ0sjjcvp6utkr192p2keke4am.apps.googleusercontent.com'
const KAKAO_API_KEY = '735b21c68f4ab7d810f8ca1e1578e69e'
const GITHUB_CLIENT_ID = '4c1db9681216f8ee8dcf'
const FACEBOOK_APP_ID = '510459117161974'

const KAKAO_REDIRECT_URI =`${process.env.REACT_APP_FRONT}/our-study/oauth/callback/kakao`
const GITHUB_REDIRECT_URI = `${process.env.REACT_APP_FRONT}/our-study/oauth/callback/github`
const FACEBOOK_REDIRECT_URI = `${process.env.REACT_APP_FRONT}/our-study/oauth/callback/facebook`
const GOOGLE_REDIRECT_URI = `${process.env.REACT_APP_FRONT}/our-study/oauth/callback/google`

const kakaoLogin = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`
const githubLogin = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}`
const facebookLogin = `https://www.facebook.com/v2.11/dialog/oauth?client_id=${FACEBOOK_APP_ID}&redirect_uri=${FACEBOOK_REDIRECT_URI}`
const googleLogin = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&access_type=online&response_type=code`

const githubLoginAPI = async (code: string) => {
  const apiData = await apiClient.get(`/auth/github/${code}`)
  return apiData.data
}

const kakaoLoginAPI = async (code: string) => {
  const apiData = await apiClient.get(`/auth/kakao/${code}`)
  return apiData.data
}

const googleLoginAPI = async (code: string) => {
  const apiData = await apiClient.get(`/auth/google/${code}`)
  return apiData.data
}

const facebookLoginAPI = async (code: string) => {
  const apiData = await apiClient.get(`/auth/facebook/${code}`)
  return apiData.data
}

export {
  kakaoLogin,
  githubLogin,
  facebookLogin,
  googleLogin,
  githubLoginAPI,
  kakaoLoginAPI,
  googleLoginAPI,
  facebookLoginAPI,
  GOOGLE_CLIENT_ID,
  FACEBOOK_APP_ID
}