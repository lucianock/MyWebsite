const useTopToBottom = (value) => {
  try {
    const result = document.querySelector(value);
    if (result) {
      document.addEventListener("scroll", () => {
        try {
          if (
            document.body.scrollTop > window.innerHeight ||
            document.documentElement.scrollTop > window.innerHeight
          ) {
            result.style.display = "block";
          } else {
            result.style.display = "none";
          }
        } catch (error) {
          console.warn('Error in scroll handler:', error);
        }
      });
    }
  } catch (error) {
    console.warn('Error setting up top to bottom hook:', error);
  }
};

export default useTopToBottom;
