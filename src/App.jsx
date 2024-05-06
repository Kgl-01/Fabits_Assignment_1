import { Component, useState } from "react"
import * as styleX from "@stylexjs/stylex"
import AppBackground from "./assets/appBackground.png"
import FormBackground from "./assets/formBackground.png"
import ExperienceForm from "./components/ExperienceForm.component"
import { useNavigationContext } from "./context/useNavigationContext"
import ArrowLeft from "./assets/keyboard_backspace.png"
import ArrowRight from "./assets/arrow_right_alt.svg"
import PanCardDetailsForm from "./components/PanCardDetailsForm.component"
import LoadingScreenBackground from "./assets/loadingBackgroundimg.png"
import ProfileIcon from "./assets/profileIconNew.svg"
import AuthIcon from "./assets/authIcon.svg"
import AddressIcon from "./assets/addressIcon.svg"
import CloseIcon from "./assets/closeIcon.svg"

import CarImgV2 from "./assets/new_car_rcb.png"
import InfoCard from "./components/InfoCard.component"

const driveCar = styleX.keyframes({
  "0%": {
    transform: "translateX(-8rem)",
  },
  "50%": {
    transform: "translateX(100vw)",
  },
  "100%": {
    transform: "translateX(100vw)",
  },
})

const pauseDrive = styleX.keyframes({
  "0%": {
    transform: "translateX(-10rem)",
  },
  "50%": {
    transform: "translateX(50%) translateY(0rem) ",
    transition: "all 1s",
  },
  "55%": {
    transform: "translateX(50%) translateY(-0.2rem)",
    transition: "all 4s",
  },
  "60%": {
    transform: "translateX(50%) translateY(0.2rem)",
    transition: "all 4s",
  },
  "65%": {
    transform: "translateX(50%) translateY(-0.2rem)",
    transition: "all 4s",
  },
  "70%": {
    transform: "translateX(50%) translateY(0.2rem)",
    transition: "all 4s",
  },
  "75%": {
    transform: "translateX(50%) translateY(-0.2rem)",
    transition: "all 4s",
  },
  "80%": {
    transform: "translateX(50%) translateY(0.2rem)",
    transition: "all 4s",
  },
  "85%": {
    transform: "translateX(50%) translateY(0rem)",
    transition: "all 4s",
  },
  "100%": {
    transform: "translateX(100vw)",
  },
})

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
  overlay: (isClosed) => ({
    opacity: "0.6",
    background: "#F4F7FE",
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    display: isClosed ? "none" : "block",
  }),
  formContainer: (isClosed) => ({
    width: "100%",
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    display: isClosed ? "none" : "block",
    transform: `translateY(${isClosed ? 100 : 0}%)`,
    transition: "transform 1s, display 1s",
  }),
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

  loading: {
    position: "relative",
  },
  loadingScreenBg: (loading) => ({
    height: !loading ? "90vh" : "50vh",
    borderRadius: "2rem 2rem 0rem 0rem",
    width: "100%",
    transform: `translateY(${loading ? 10 : 0}%)`,
    filter: `blur(${!loading ? 0.3 : 0}rem)`,
    transition: "transform 0.25s, filter 1s",
    position: "relative",
  }),
  moveCar: {
    width: "8rem",
    position: "absolute",
    bottom: "1.6rem",
    transform: "translateX(-8rem)",
    animationName: driveCar,
    animationDuration: "8s",
    animationDirection: "normal",
    animationIterationCount: "infinite",
    animationFillMode: "forwards",
  },
  slowDownAndSpeedUp: {
    width: "10rem",
    left: "0",
    transform: "translateX(-10rem)",
    animationName: pauseDrive,
    animationDuration: "8s",
    animationDirection: "normal",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    position: "absolute",
    bottom: 0,
  },
})

function App() {
  const {
    panNo,
    pageCount,
    handleChangeNextPage,
    handleChangePreviousPage,
    loading,
    currentPageValue,
    closeForm,
    handleCloseForm,
    handleOpenForm,
  } = useNavigationContext()

  const formDetails = {
    0: {},
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

  const cardInfo = [
    {
      id: 1,
      src: ProfileIcon,
      header: panNo,
      subHeader: "ASHAR RAI MUJEEB",
      content: [
        { infoHeader: "Fetched Via", infoContent: "NSDL" },
        { infoHeader: "Last Updated", infoContent: "24/04/2024" },
      ],
    },
    {
      id: 2,
      src: AuthIcon,
      header: "Address",
      subHeader: "Aadhaar",
      secondarySubHeader: "UID",
      content: [
        { infoHeader: "Fetched Via", infoContent: "Digio" },
        { infoHeader: "Date of birth", infoContent: "18/10/1994" },
      ],
    },
    {
      id: 3,
      src: AddressIcon,
      header: "Address",
      subHeader: "16/2, 8 Jat Regiment, c/o 56 APO",

      content: [
        { infoHeader: "Fetched Via", infoContent: "Digio" },
        { infoHeader: "Address Type", infoContent: "Correspondence" },
      ],
    },
  ]

  return (
    <div {...styleX.props(styles.main)}>
      <img src={AppBackground} {...styleX.props(styles.bg)} loading="lazy" />
      <div {...styleX.props(styles.overlay(closeForm))} />
      {closeForm && (
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <button
            {...styleX.props(styles.primaryButton)}
            style={{ width: "fit-content" }}
            onClick={handleOpenForm}
          >
            Open Onboarding Form
          </button>
        </div>
      )}
      <div {...styleX.props(styles.formContainer(closeForm))}>
        {!loading && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 0rem 0rem 0rem",
            }}
          >
            <button
              style={{
                left: "40%",
                background: "none",
                transform: "translateY(0%)",
                transition: "transform 0.5s",
                zIndex: "10",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleCloseForm}
            >
              <img src={CloseIcon} />
            </button>
          </div>
        )}

        {currentPageValue?.current != "complete" ? (
          <>
            <figure
              style={{
                margin: "0",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <img src={CarImgV2} {...styleX.props(styles.moveCar)} />

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
              {formDetails?.formComponent}
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
                  onClick={(e) => handleChangeNextPage(e)}
                  value={formDetails.buttonName}
                >
                  <>{formDetails?.buttonName}</>{" "}
                  <img src={ArrowRight} style={{ width: "fit-content" }} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div style={{ position: "relative" }}>
            <img
              src={LoadingScreenBackground}
              {...styleX.props(styles.loadingScreenBg(loading))}
            />
            {loading && (
              <img
                src={CarImgV2}
                {...styleX.props(styles.slowDownAndSpeedUp)}
              />
            )}
            <div
              style={{
                position: "absolute",
                top: loading ? "12%" : "0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {loading ? (
                <div style={{ width: "100vw", padding: "0rem 1.5rem" }}>
                  <h2>Fetching your PAN Details</h2>
                  <small style={{ margin: "0rem", padding: "0rem" }}>
                    Getting your PAN details by your chosen mehtod
                  </small>
                </div>
              ) : (
                <div
                  style={{
                    width: "100vw",
                    padding: "1.2rem 1.5rem",
                  }}
                >
                  <>
                    <h2 style={{ padding: "0rem", margin: "0rem" }}>
                      Verify you details
                    </h2>
                    <div>Aadhaar link found</div>
                  </>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {cardInfo.map((info, index) => (
                      <InfoCard index={index} info={info} key={info.id} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
