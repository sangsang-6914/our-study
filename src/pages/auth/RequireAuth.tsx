import { RootState } from "@modules/index"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function RequireAuth ({children} : any) {
  const isLogined = useSelector((state:RootState) => state.loginInfo.isLogined)

  return isLogined ? children : <Navigate to="/" replace />
}

export default RequireAuth