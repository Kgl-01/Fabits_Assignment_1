import { useState } from "react"
import * as styleX from "@stylexjs/stylex"
import AppBackground from "./assets/appBackground.png"
import FormBackground from "./assets/formBackground.png"
import ExperienceForm from "./components/ExperienceForm.component"
import { useNavigationContext } from "./context/useNavigationContext"
import ArrowLeft from "./assets/keyboard_backspace.png"
import ArrowRight from "./assets/arrow_right_alt.svg"
import PanCardDetailsForm from "./components/PanCardDetailsForm.component"

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
    top: 0,
  },
  formContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  formBg: {
    width: "100%",
    margin: "0",
    borderRadius: "1.5rem 1.5rem 0rem 0rem",
  },
  figcaption: {
    position: "absolute",
    width: "100%",
    top: "1rem",
    fontSize: "1.5em",
    fontWeight: "600",
    padding: "1rem",
  },
  small: {
    fontSize: "1rem",
    fontWeight: "450",
  },
  form: {
    width: "100%",
    background: "linear-gradient(#E6E66A,#FFFFDB)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  primaryButton: {
    width: "100%",
    fontSize: "1.2rem",
    border: "none",
    margin: "0.5rem 0rem",
    padding: "0.5rem 0.7rem",
    background: "rgba(131, 167, 32, 1)",
    borderRadius: "0.75rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    display: "flex",
    alignItems: "center",
  },

  goBack: {
    background: " #F5F8CC",
    border: "1px solid #83A720",
    width: "fit-content",
    color: "#83A720",
  },
})

function App() {
  const { pageCount, handleChangeNextPage, handleChangePreviousPage } =
    useNavigationContext()

  const formDetails = {
    1: {
      title: "How much trading experience do you have?",
      buttonName: "Next",
      formComponent: <ExperienceForm />,
    },
    2: {
      title: "Please enter your PAN details to complete verification.",
      buttonName: "Complete",
      formComponent: <PanCardDetailsForm />,
    },
  }[pageCount]

  return (
    <div {...styleX.props(styles.main)}>
      <img src={AppBackground} {...styleX.props(styles.bg)} loading="lazy" />
      <div {...styleX.props(styles.overlay)} />
      <div {...styleX.props(styles.formContainer)}>
        <figure
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <img src={FormBackground} {...styleX.props(styles.formBg)} />
          <figcaption {...styleX.props(styles.figcaption)}>
            <div>Get Started with Fabits</div>
            <small {...styleX.props(styles.small)}>
              Answer a few questions to begin onboarding
            </small>
          </figcaption>
        </figure>
        <div {...styleX.props(styles.form)}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.8rem",
            }}
          >
            <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
              {formDetails?.title}
            </span>
            <span
              style={{
                color: "#fff",
                background: "#000",
                alignSelf: "flex-start",
                fontSize: "1.1rem",
                padding: "0.2rem 1rem",
                borderRadius: "1.3rem",
              }}
            >
              {pageCount}/2
            </span>
          </div>
          {formDetails.formComponent}
          <div style={{ width: "90%", display: "flex", gap: "1rem" }}>
            {pageCount == 2 && (
              <button
                {...styleX.props(styles.primaryButton, styles.goBack)}
                onClick={handleChangePreviousPage}
              >
                <img src={ArrowLeft} />
              </button>
            )}
            <button
              {...styleX.props(styles.primaryButton)}
              onClick={handleChangeNextPage}
            >
              <>{formDetails?.buttonName}</>{" "}
              <img src={ArrowRight} style={{ width: "fit-content" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
