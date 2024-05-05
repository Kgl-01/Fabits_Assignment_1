import { useContext } from "react"
import { NavigationContext } from "./navigationContext"

export const useNavigationContext = () => {
  const value = useContext(NavigationContext)
  if (value == null) {
    throw new Error("Child should be wrapped inside context provider")
  }

  return value
}
