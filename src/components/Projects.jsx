function Projects() {
  const projectList = [
    {
      title: "E-commerce App",
      description: "A modern shopping experience with clean UI design.",
      link: "#",
    },
    {
      title: "Banking Dashboard",
      description: "A user-friendly financial dashboard design.",
      link: "#",
    },
    {
      title: "Food Delivery App",
      description: "A seamless food ordering mobile experience.",
      link: "#",
    },
  ]

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>My Projects</h2>

      <div style={styles.grid}>
        {projectList.map((project, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3 style={styles.cardTitle}>{project.title}</h3>

            <p style={styles.cardDesc}>{project.description}</p>

            <a href={project.link} style={styles.button}>
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  container: {
    padding: "60px 20px",
    backgroundColor: "#0f172a",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "40px",
    color: "#38bdf8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#020617",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    transition: "0.3s",
  },
  cardTitle: {
    marginBottom: "10px",
  },
  cardDesc: {
    color: "#94a3b8",
    marginBottom: "20px",
  },
  button: {
    textDecoration: "none",
    color: "#38bdf8",
    fontWeight: "bold",
  },
}

export default Projects