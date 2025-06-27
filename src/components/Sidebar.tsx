"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Sidebar.css"
import { FaHome, FaClipboardList, FaHistory, FaCog, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

    const menuItems = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/myissues", name: "My Issues", icon: <FaClipboardList /> },
    { path: "/history", name: "History", icon: <FaHistory /> },
    { path: "/settings", name: "Settings", icon: <FaCog /> },
        ];


  return (
    <>
      {/* Mobile menu button */}
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        <span className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-spacer"></div>
          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-text">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="sidebar-footer">
          <Link to="/logout" className="sidebar-link logout-link">
            <span className="sidebar-icon"><FaSignOutAlt /></span>
            <span className="sidebar-text">Log Out</span>
          </Link>

          <div className="powered-by">Powered by Ecobank</div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
