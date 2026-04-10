function Hero() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>
        Hi, I'm Lavender 👋
      </h1>

      <p style={styles.subtitle}>
        UI/UX Designer crafting beautiful digital experiences
      </p>

      <button style={styles.button}
      onMouseEnter={(e) => e.target.style.background = "#1e293b"}
      onMouseLeave={(e) => e.target.style.background = "#38bdf8"}>
        View My Work
      </button>
    </section>
  )
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#94a3b8",
    marginBottom: "20px",
  },
  button: {
  padding: "12px",
  backgroundColor: "#38bdf8",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
}
}

export default Hero