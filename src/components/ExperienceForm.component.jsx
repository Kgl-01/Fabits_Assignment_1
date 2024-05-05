import * as styleX from "@stylexjs/stylex"
import { useState } from "react"

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
  }),
})

const formData = [
  { title: "None", content: "<1Y" },
  { title: "Beginner", content: "1Y-3Y" },
  { title: "Mid", content: "3Y-5Y" },
  { title: "Pro", content: ">5Y" },
]

const ExperienceForm = () => {
  const [currentOption, setCurrentOption] = useState("Beginner")
  return (
    <>
      {" "}
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
              onChange={(e) => {
                setCurrentOption(e.target.value)
              }}
            />
            <small style={{ color: "#677C2B" }}>{data.content}</small>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ExperienceForm
