"use client"

import { useNavigate } from "react-router-dom"
import EcobankLogo from "../assets/Frame.svg"
import "./Home.css"

const Home = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/form")
  }

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
          <button onClick={handleButtonClick} className="action-button">
            <span className="button-icon">👥</span>
            <span>Teams Channel</span>
          </button>
          <button onClick={handleButtonClick} className="action-button">
            <span className="button-icon">⚠️</span>
            <span>PANIC</span>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
