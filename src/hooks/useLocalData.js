import { useEffect, useState } from "react";

const useLocalData = () => {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    try {
      const localeMeta = document.querySelector("meta[name=locale]");
      if (localeMeta) {
        setLocale(localeMeta.content);
      }
    } catch (error) {
      console.warn('Error reading locale meta:', error);
    }
  }, []);

  useEffect(() => {
    try {
      const localeMeta = document.querySelector("meta[name=locale]");
      if (localeMeta) {
        setLocale(localeMeta.content);
      }
    } catch (error) {
      console.warn('Error reading locale meta:', error);
    }
  }, [document.querySelector("meta[name=locale]")]);

  return locale;
};

export default useLocalData;
