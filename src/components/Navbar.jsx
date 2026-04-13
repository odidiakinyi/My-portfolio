import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Lavender</h2>

      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}