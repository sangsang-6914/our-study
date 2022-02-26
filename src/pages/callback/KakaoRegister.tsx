import { snsRegisterAPI } from '@api/social'
import { ComponentWrapper } from '@styles/common.style'
import qs from 'qs'
import { useEffect } from 'react'

function KakaoRegister () {
  const {code} = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  useEffect(() => {
    snsRegisterAPI(String(code), 'kakao', 'userOid')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [code])
  return (
    <ComponentWrapper>
      {code}
    </ComponentWrapper>
  )
}

export default KakaoRegister