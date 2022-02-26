import { snsRegisterAPI } from "@api/social"
import { ComponentWrapper } from "@styles/common.style"
import qs from "qs"
import { useEffect } from "react"

function GoogleRegister () {
  const {code} = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  useEffect(() => {
    snsRegisterAPI(String(code), 'google', 'userOid')
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

export default GoogleRegister