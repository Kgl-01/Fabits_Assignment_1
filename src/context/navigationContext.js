import { createContext } from "react"

export const NavigationContext = createContext({
  pageCount: null,
  handleChangeNextPage: () => null,
  handleChangePreviousPage: () => null,
  panNo: null,
  hanleChangePanNo: () => null,
})
