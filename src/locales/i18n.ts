import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranEn from './message_en.json';
import tranKo from './message_ko.json';

export const languages = ['en', 'ko'] as const;
export type Languages = typeof languages[number];

const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
};

// ie에서의 지원을 위해 userLanguage 추가..
// const userLanguage = window.navigator.language || window.navigator.userLanguage;
const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || userLanguage || 'en',
  fallbackLng: 'en',
  // json의 depth가 깊어질 시 입력해야함
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
