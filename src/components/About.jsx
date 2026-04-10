function About() {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        
        {/* LEFT SIDE */}
        <div style={styles.textSection}>
          <h2 style={styles.title}>About Me</h2>

          <p style={styles.description}>
            I am a passionate UI/UX designer with a growing interest in frontend development.
            I love creating visually appealing and user-friendly digital experiences.
          </p>

          <p style={styles.description}>
            Currently, I am learning React to bring my designs to life and build
            interactive web applications.
          </p>
        </div>

        {/* RIGHT SIDE (SKILLS) */}
        <div style={styles.skillsSection}>
        <div
                style={styles.card}
                onMouseEnter={(e) => e.target.style.background = "#1e293b"}
                onMouseLeave={(e) => e.target.style.background = "#0f172a"}
                >
                UI/UX DESIGN
                </div>
          <div
                style={styles.card}
                onMouseEnter={(e) => e.target.style.background = "#1e293b"}
                onMouseLeave={(e) => e.target.style.background = "#0f172a"}>FIGMA</div>
        <div
                style={styles.card}
                onMouseEnter={(e) => e.target.style.background = "#1e293b"}
                onMouseLeave={(e) => e.target.style.background = "#0f172a"}> HTML & CSS
        </div>
          <div
                style={styles.card}
                onMouseEnter={(e) => e.target.style.background = "#1e293b"}
                onMouseLeave={(e) => e.target.style.background = "#0f172a"}>JAVASCRIPT
           </div>
          <div
                style={styles.card}
                onMouseEnter={(e) => e.target.style.background = "#1e293b"}
                onMouseLeave={(e) => e.target.style.background = "#0f172a"}> REACT
                </div>
        </div>

      </div>
    </section>
  )
}

const styles = {
  container: {
    padding: "60px 20px",
    backgroundColor: "#020617",
  },
  content: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    gap: "40px",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap", // 🔥 makes it responsive
  },
  textSection: {
    flex: "1",
    minWidth: "280px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#38bdf8",
  },
  description: {
    marginBottom: "15px",
    color: "#94a3b8",
    lineHeight: "1.6",
  },
  skillsSection: {
    flex: "1",
    minWidth: "280px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "15px",
  },
card: {
  backgroundColor: "#0f172a",
  padding: "15px",
  borderRadius: "10px",
  textAlign: "center",
  border: "1px solid #1e293b",
  fontSize: "0.9rem",
  transition: "0.3s",
},
}

export default About