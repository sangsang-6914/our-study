import { isLogin } from "@api/user"
import useLoginCheck from "@hooks/useLoginCheck"
import { RootState } from "@modules/index"
import { handleException } from "@utils/errorUtils"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function RequireAuth ({children} : any) {
  const isLogined = useSelector((state:RootState) => state.loginInfo.isLogined)
  // let realAuth = false
  // useLoginCheck().then((auth) => {
  //   console.log(auth)
  //   realAuth = true
  // })

  // 1. store의 isLogined 검증
  // 2. isLogined true 일때 서버로 토큰 유효성 검증

  return isLogined ? children : <Navigate to="/" replace />
}

export default RequireAuth