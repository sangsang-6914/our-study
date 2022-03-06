import { RootState } from "@modules/index"
import { selectNav } from "@modules/selectMenu"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import MyPageView from "./MyPageView"

function MyPage () {
  const selectMenu = useSelector((state: RootState) => state.selectMenu.navMenu)
  const dispatch = useDispatch()
  const changeLink = (link: string) => {
    dispatch(selectNav(link))
  }

  const props = {
    changeLink,
    selectMenu
  }

  return (
    <MyPageView {...props} />
  )
}

export default MyPage