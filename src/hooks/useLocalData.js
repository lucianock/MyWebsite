const useLocalData = () => {
  const [locale, setLocale] = useState({
    rtl: "",
    mode: "",
  });

  useEffect(() => {
    // Access the locale data once the DOM is ready
    const localeMeta = document.querySelector("meta[name=locale]");

    if (localeMeta) {
      const dir = localeMeta.getAttribute("content") === "ar" ? "rtl" : "ltr";
      const bodyClass =
        localeMeta.getAttribute("content") === "ar" ? "dark" : "light";
      setLocale({
        rtl: dir,
        mode: bodyClass,
      });
    }
  }, [document.querySelector("meta[name=locale]")]);

  return locale;
};

export default useLocalData;
