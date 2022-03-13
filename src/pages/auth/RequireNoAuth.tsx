import { RootState } from "@modules/index"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function RequireNoAuth({children}: any) {
  const isLogined = useSelector((state:RootState) => state.loginInfo.isLogined)
  console.log(isLogined)

  // 로그인 상태가 아닐경우에만 페이지 이동
  return !isLogined ? children : <Navigate to="/" replace />
}

export default RequireNoAuth