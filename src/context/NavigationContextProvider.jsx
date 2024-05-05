import { useState } from "react"
import { NavigationContext } from "./navigationContext"

export const NavigationContextProvider = ({ children }) => {
  const [pageCount, setPageCount] = useState(1)
  const [panNo, setPanNo] = useState("CRYPG****D")
  const [loading, setLoading] = useState(true)

  const handleChangeNextPage = () => {
    if (pageCount > 2) {
      handleChangeLoading()
    } else {
      setPageCount((c) => c + 1)
    }
  }

  const handleChangePreviousPage = () => {
    setPageCount((c) => c - 1)
  }

  const hanleChangePanNo = (e) => {
    setPanNo(e.target.value)
  }

  const handleChangeLoading = () => {
    setLoading(false)
  }

  return (
    <NavigationContext.Provider
      value={{
        pageCount,
        handleChangeNextPage,
        handleChangePreviousPage,
        hanleChangePanNo,
        panNo,
        loading,
        handleChangeLoading,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
