import { Link } from "react-router-dom"
import EcobankLogo from "../assets/Frame.svg"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <img src={EcobankLogo || "/placeholder.svg"} alt="Ecobank Logo" className="ecobank-logo" />
          <div className="blue-line"></div>
        </div>
      </header>

      <main className="home-main">
        <div className="buttons-container">
          <Link to="/teamschannel" className="action-button">
            <span className="button-icon">👥</span>
            <span>Teams Channel</span>
          </Link>
          <Link to="/ecobankform" className="action-button">
            <span className="button-icon">⚠️</span>
            <span>PANIC</span>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
