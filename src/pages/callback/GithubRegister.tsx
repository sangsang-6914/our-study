import { snsRegisterAPI } from "@api/social"
import { ComponentWrapper } from "@styles/common.style"
import qs from "qs"
import { useEffect } from "react"

function GithubRegister () {
  const {code} = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  useEffect(() => {
    snsRegisterAPI(String(code), 'github', 'userOid')
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

export default GithubRegister