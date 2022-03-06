import { RootState } from "@modules/index"
import { selectNav } from "@modules/selectMenu"
import { changeMenuForRefresh } from "@utils/commonUtils"
import { useDispatch, useSelector } from "react-redux"
import MyPageView from "./MyPageView"

function MyPage () {
  const selectMenu = useSelector((state: RootState) => state.selectMenu.navMenu)
  const dispatch = useDispatch()
  // 화면 refresh로 들어온 경우 선택메뉴 재정의를 위한처리
  if (selectMenu === '') {
    changeMenuForRefresh()
  }
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