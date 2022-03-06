export const SELECT_MENU_HEADER = 'selectMenu/SELECT_MENU_HEADER' as const
export const SELECT_MENU_NAV = 'selectMenu/SELECT_MENU_NAV' as const

export const selectHeader = (menu: string) => ({
  type: SELECT_MENU_HEADER,
  menu: menu,
})

export const selectNav = (menu: string) => ({
  type: SELECT_MENU_NAV,
  menu: menu,
})

type SelectMenuAction = ReturnType<typeof selectHeader> | ReturnType<typeof selectNav>

type SelectMenuState = {
  headerMenu: string;
  navMenu: string;
}

const initialState: SelectMenuState = {
  headerMenu: '',
  navMenu: ''
}

const selectMenu = (state:SelectMenuState = initialState, action: SelectMenuAction) => {
  switch (action.type) {
    case SELECT_MENU_HEADER:
      return {
        ...state,
        headerMenu: action.menu
      }
    case SELECT_MENU_NAV:
      return {
        ...state,
        navMenu: action.menu
      }
    default:
      return state
  }
}

export default selectMenu