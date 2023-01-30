import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json';
import tw from './locales/tw.json';
import jp from './locales/jp.json';

const resources = {
  en: {
    translation: en,
  },
  tw: {
    translation: tw,
  },
  jp: {
    translation: jp,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next, 將 i18next 傳入 react-i18next 裡面
  // 實例化 initReactI18next
  .init({
    // 語言資料
    resources,
    // 如果當前切換的語言沒有對應的翻譯則使用這個語言
    fallbackLng: "en",
    // 預設語言
    lng: "en",
    interpolation: {
      // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
      escapeValue: false
    }
  });

  export default i18n;