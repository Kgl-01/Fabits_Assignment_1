import { useState } from "react"
import { NavigationContext } from "./navigationContext"

export const NavigationContextProvider = ({ children }) => {
  const [pageCount, setPageCount] = useState(1)
  const [panNo, setPanNo] = useState("CRYPG****D")
  const handleChangeNextPage = () => {
    setPageCount((c) => c + 1)
  }

  const handleChangePreviousPage = () => {
    setPageCount((c) => c - 1)
  }

  const hanleChangePanNo = (e) => {
    setPanNo(e.target.value)
  }

  return (
    <NavigationContext.Provider
      value={{
        pageCount,
        handleChangeNextPage,
        handleChangePreviousPage,
        hanleChangePanNo,
        panNo,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
