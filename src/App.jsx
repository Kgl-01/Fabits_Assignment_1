import { useState } from "react"
import * as styleX from "@stylexjs/stylex"
import AppBackground from "./assets/appBackground.png"

const sm = "@media (max-width: 476px)"

const styles = styleX.create({
  main: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },

  bg: {
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },
  overlay: {
    opacity: "0.6",
    background: "#F4F7FE",
    width: "100%",
    height: "100vh",
    position: "absolute",
    zIndex: "2",
    top: 0,
  },
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div {...styleX.props(styles.main)}>
      <img src={AppBackground} {...styleX.props(styles.bg)} loading="lazy" />
      <div {...styleX.props(styles.overlay)}></div>
    </div>
  )
}

export default App
