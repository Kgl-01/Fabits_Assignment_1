import * as styleX from "@stylexjs/stylex"

const slideUp = styleX.keyframes({
  from: {
    transform: "translateY(400%)",
  },
  to: {
    transform: "translateY(0%)",
  },
})

const styles = styleX.create({
  card: (index) => ({
    width: "100%",
    padding: "0rem 0.1rem 0.5rem 1rem",
    background: "#fff",
    borderRadius: "1.25rem",
    transform: "translateY(0)",
    animationName: slideUp,
    animationDuration: "0.5s",
    animationDelay: `calc(${index + 1})s`,
  }),
  media: {
    display: "flex",
    alignItems: "center",
    padding: "0rem",
    margin: "0rem",
    width: "100%",
    marginTop: "1rem",
    gap: "1rem",
  },
  infoContainer: {
    display: "flex",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  infoHeader: { fontSize: "0.8rem", color: "#5E78AE" },
  infoContent: { fontWeight: "600", fontSize: "1.2rem" },
})

const InfoCard = ({ info, index }) => {
  return (
    <div {...styleX.props(styles.card(index))}>
      <figure {...styleX.props(styles.media)}>
        <img src={info.src} />
        <figcaption>
          <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            {info.header}
          </div>
          <div style={{ color: "#5E78AE" }}>{info.subHeader}</div>
          {info.secondarySubHeader && (
            <div style={{ color: "#5E78AE" }}>{info.secondarySubHeader}</div>
          )}
        </figcaption>
      </figure>
      <div {...styleX.props(styles.infoContainer)}>
        {info.content?.map((i, index) => (
          <div key={`${i}-${index}`}>
            <div {...styleX.props(styles.infoHeader)}>{i.infoHeader}</div>
            <div {...styleX.props(styles.infoContent)}>{i.infoContent}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoCard
