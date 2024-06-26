import { useRef, useState } from "react"
import { NavigationContext } from "./navigationContext"

export const NavigationContextProvider = ({ children }) => {
  const [pageCount, setPageCount] = useState(1)
  const [panNo, setPanNo] = useState("CRYPG****D")
  const [loading, setLoading] = useState(false)
  const currentPageValue = useRef(null)

  const [closeForm, setCloseForm] = useState(false)

  const handleCloseForm = () => {
    setPageCount(0)
    currentPageValue.current = null
    setCloseForm(true)
  }

  const handleOpenForm = () => {
    setCloseForm(false)
    setPageCount(1)
  }

  const handleChangeNextPage = async (e) => {
    const { value } = e.target
    currentPageValue.current = value.toLowerCase()
    if (value == "Complete") {
      setLoading((c) => !c)

      await setTimeout(() => {
        setLoading((c) => !c)
      }, 8000)
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
        currentPageValue,
        handleCloseForm,
        handleOpenForm,
        closeForm,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
