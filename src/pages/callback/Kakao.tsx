import { kakaoLoginAPI } from "@api/social"
import { ComponentWrapper } from "@styles/common.style"
import qs from 'qs'
import { useEffect } from "react"

function Kakao () {
  const {code} = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  useEffect(() => {
    kakaoLoginAPI(String(code))
      .then(response => {
        console.log(response)
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

export default Kakao