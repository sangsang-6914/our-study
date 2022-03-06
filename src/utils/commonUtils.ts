export const changeMenuForRefresh = () => {
  const pathArray = window.location.pathname.split('/')
  const curMenu = pathArray[pathArray.length - 1]
  return curMenu
}

export const changeHeaderMenuForRefresh = () => {
  const pathArray = window.location.pathname.split('/')
  const curHeaderMenu = pathArray[2]
  return curHeaderMenu
}