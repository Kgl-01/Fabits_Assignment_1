import { useState } from "react"
import { NavigationContext } from "./navigationContext"

export const NavigationContextProvider = ({ children }) => {
  const [pageCount, setPageCount] = useState(1)
  const handleChangeNextPage = () => {
    if (pageCount > 2) return

    setPageCount((c) => c + 1)
  }

  const handleChangePreviousPage = () => {
    setPageCount((c) => c - 1)
  }

  return (
    <NavigationContext.Provider
      value={{ pageCount, handleChangeNextPage, handleChangePreviousPage }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
