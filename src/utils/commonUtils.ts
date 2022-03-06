import { selectNav } from "@modules/selectMenu"
import { useDispatch } from "react-redux"

export const changeMenuForRefresh = () => {
  const dispatch = useDispatch()
  
  const pathArray = window.location.pathname.split('/')
  const curMenu = pathArray[pathArray.length - 1]
  dispatch(selectNav(curMenu))
}