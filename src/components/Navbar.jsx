function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Lavender</h2>

      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    backgroundColor: "#020617",
    position: "sticky",
    top: 0,
  },
  logo: {
    color: "#38bdf8",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    cursor: "pointer",
  },
}

export default Navbar