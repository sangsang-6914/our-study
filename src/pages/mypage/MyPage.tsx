import { useState } from "react"
import MyPageView from "./MyPageView"

function MyPage () {
  const [selectLink, setSelectLink] = useState('account')
  const changeLink = (link: string) => {
    setSelectLink(link)
  }

  const props = {
    selectLink,
    changeLink
  }

  return (
    <MyPageView {...props} />
  )
}

export default MyPage