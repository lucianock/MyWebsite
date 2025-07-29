import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { en } from '@/staticData/translations/en';
import { es } from '@/staticData/translations/es';

const translations = {
  en,
  es
};

export const useTranslation = () => {
  const { language } = useContext(ThemeContext);
  
  const t = (key) => {
    // Handle undefined or null keys
    if (!key) {
      console.warn('Translation key is undefined or null');
      return '';
    }
    
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && value[fallbackKey] !== undefined) {
            value = value[fallbackKey];
          } else {
            console.warn(`Translation not found for key: ${key}`);
            return key; // Return the key if translation not found
          }
        }
        break;
      }
    }
    
    return value || key;
  };

  return { t, language };
};