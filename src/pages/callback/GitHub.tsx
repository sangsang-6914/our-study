import { ComponentWrapper } from "@styles/common.style"
import { snsLoginAPI } from '@api/social'
import qs from 'qs'
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function GitHub () {
  const { code } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  const navigate = useNavigate()

  useEffect(() => {
    snsLoginAPI(String(code), 'github')
    .then(response => {
      console.log(response)
      // localStorage에 token 저장 및 관리
      navigate('/')
    })
    .catch(error => {
      console.error(error)
    })
  }, [code])

  return (
    <ComponentWrapper>
      {code}
    </ComponentWrapper>
  )
}

export default GitHub