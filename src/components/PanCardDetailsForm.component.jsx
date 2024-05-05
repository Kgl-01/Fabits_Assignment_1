import * as styleX from "@stylexjs/stylex"
import { useState } from "react"
import { useNavigationContext } from "../context/useNavigationContext"

const styles = styleX.create({
  ul: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "1rem",
    gap: "0.7rem",
  },
  li: (isActive) => ({
    width: "100%",
    border: isActive && "2px solid #83A720",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.75rem",
    background: isActive && "rgba(131, 167, 32, 0.08)",
    fontSize: "1.2rem",
    padding: "0.5rem",
    color: "#394C03",
  }),
  input: {
    textAlign: "center",
    padding: "0.5rem 0rem",
    fontSize: "0.9rem",
    borderRadius: "0.5rem",
    border: "2px solid #EAF0BB",
    background: "#F5F8CC",
    color: "#394C03",
    fontWeight: "600",
    letterSpacing: "0.2rem",
  },
})

const formData = [{ title: "Manual" }, { title: "Automatic" }]

const PanCardDetailsForm = () => {
  const [currentOption, setCurrentOption] = useState("Automatic")
  const { panNo, hanleChangePanNo } = useNavigationContext()

  return (
    <div style={{ width: "100%" }}>
      <ul {...styleX.props(styles.ul)}>
        {formData.map((data, index) => (
          <li {...styleX.props(styles.li(data.title == currentOption))}>
            <label
              htmlFor={`${index}-${data.title}`}
              style={{ color: "rgba(57, 76, 3, 1)", fontWeight: "600" }}
            >
              {data.title}
            </label>
            <input
              type="radio"
              id={`${index}-${data.title}`}
              value={data.title}
              checked={data.title == currentOption}
              style={{ display: "none" }}
              onClick={(e) => {
                setCurrentOption(e.target.value)
              }}
            />
            <small style={{ color: "#677C2B" }}>{data.content}</small>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "0.5rem 1.2rem",
          alignItems: "center",
        }}
      >
        <label
          style={{ color: "#575757", fontSize: "0.9rem" }}
          htmlFor="pan-no"
        >
          PAN Card Number
        </label>
        <input
          name="panNo"
          value={panNo}
          onChange={(e) => hanleChangePanNo(e)}
          id="pan-no"
          type="text"
          {...styleX.props(styles.input)}
        />
      </div>
    </div>
  )
}

export default PanCardDetailsForm
