const useTopToBottom = (value) => {
  try {
    const result = document.querySelector(value);
    if (result) {
      const handleScroll = () => {
        try {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          const windowHeight = window.innerHeight;
          
          if (scrollTop > windowHeight) {
            result.style.display = "block";
            result.classList.add("btn-show");
          } else {
            result.style.display = "none";
            result.classList.remove("btn-show");
          }
        } catch (error) {
          console.warn('Error in scroll handler:', error);
        }
      };

      // Add event listener
      document.addEventListener("scroll", handleScroll);
      
      // Initial check
      handleScroll();
      
      // Cleanup function
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  } catch (error) {
    console.warn('Error setting up top to bottom hook:', error);
  }
};

export default useTopToBottom;
