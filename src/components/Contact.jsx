function Contact() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Contact Me</h2>

      <p style={styles.subtitle}>
        Let’s work together or just say hello 👋
      </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={styles.textarea}
          required
        ></textarea>

        <button type="submit" style={styles.button}
        onMouseEnter={(e) => e.target.style.background = "#1e293b"}
        onMouseLeave={(e) => e.target.style.background = "#38bdf8"}>
          Send Message
        </button>
      </form>
    </section>
  )
}

function handleSubmit(e) {
  e.preventDefault()
  alert("Message sent! (We’ll connect this later)")
}

const styles = {
  container: {
    padding: "60px 20px",
    backgroundColor: "#020617",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#38bdf8",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "30px",
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    backgroundColor: "#0f172a",
    color: "white",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    backgroundColor: "#0f172a",
    color: "white",
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

export default Contact