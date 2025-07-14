import ThemeContext from "@/context/ThemeContext"
import { useContext } from "react"

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export default useThemeContext;