export const CHANGE_KO = 'locale/CHANGE_KO';
export const CHANGE_EN = 'locale/CHANGE_EN';

export const changeKo = () => ({
  type: CHANGE_KO,
});

export const changeEn = () => ({
  type: CHANGE_EN,
});

type LocaleState = {
  locale: string;
};

const initialState = {
  locale: 'ko',
};

type ActionState = ReturnType<typeof changeKo> | ReturnType<typeof changeEn>;

const locale = (state: LocaleState = initialState, action: ActionState) => {
  switch (action.type) {
    case CHANGE_KO:
      return { locale: 'ko' };
    case CHANGE_EN:
      return { locale: 'en' };
    default:
      return state;
  }
};

export default locale;
