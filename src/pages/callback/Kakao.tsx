import { ComponentWrapper } from "@styles/common.style"

function Kakao () {
  const code = new URL(window.location.href).searchParams.get('code')
  
  return (
    <ComponentWrapper>
      {code}
    </ComponentWrapper>
  )
}

export default Kakao