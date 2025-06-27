"use client"

import { FilePlus } from "lucide-react"
import EcobankLogo from "../assets/Frame.svg"
import "./Home.css"

interface Issue {
  id: string
  buzzerType: string
  category: string
  requestTime: string
  urgency: string
  closeTime: string
  dueTime: string
  status: "Pending" | "Resolved" | "In Progress"
}

const sampleIssues: Issue[] = [
  {
    id: "1",
    buzzerType: "Panic Button",
    category: "EPAC",
    requestTime: "06/26/2025 08:31:47",
    urgency: "500M",
    closeTime: "Toyota Honda",
    dueTime: "Hugo Odegbami",
    status: "Pending",
  },
  {
    id: "2",
    buzzerType: "Panic Button",
    category: "EPAC",
    requestTime: "06/24/2025 15:54:55",
    urgency: "250M",
    closeTime: "Volvo B7R",
    dueTime: "Ezerate Onome",
    status: "Pending",
  },
  {
    id: "3",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 14:44:54",
    urgency: "550M",
    closeTime: "Solania Gminicity",
    dueTime: "Gbadebo Johnson",
    status: "Pending",
  },
  {
    id: "4",
    buzzerType: "Panic Button",
    category: "EPAC",
    requestTime: "06/24/2025 13:34:53",
    urgency: "120M",
    closeTime: "BYD k9",
    dueTime: "Alaba Seun",
    status: "Pending",
  },
  {
    id: "5",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 12:24:52",
    urgency: "230M",
    closeTime: "Yutong ZK6120",
    dueTime: "Ebioma Babatunde",
    status: "Pending",
  },
  {
    id: "6",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 11:14:51",
    urgency: "650M",
    closeTime: "Toyota Coaster",
    dueTime: "Ilemobade Ajose",
    status: "Pending",
  },
  {
    id: "7",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 10:04:50",
    urgency: "450M",
    closeTime: "Iveco Urbanway",
    dueTime: "Okorie Austin",
    status: "Pending",
  },
]

const MyIssues = () => {
  const getStatusClass = (status: Issue["status"]) => {
    switch (status) {
      case "Pending":
        return "status-badge status-pending"
      case "Resolved":
        return "status-badge status-resolved"
      case "In Progress":
        return "status-badge status-in-progress"
      default:
        return "status-badge"
    }
  }

  const handleExport = () => {
    console.log("Exporting issues...")
  }

  return (
    <div className="issues-container">
      <header className="issues-header">
        <div className="header-content">
          <img src={EcobankLogo || "/placeholder.svg"} alt="Ecobank Logo" className="ecobank-logo" />
          <div className="blue-line"></div>
        </div>
      </header>

      <main className="issues-main">
        <div className="page-header">
          <h1 className="page-title">My Issues</h1>
          <button onClick={handleExport} className="export-button">
            <FilePlus className="export-icon" />
            Export
          </button>
        </div>

        {/* Issues table */}
        <div className="issues-table-container">
          <div className="table-wrapper">
            <table className="issues-table">
              <thead className="table-header">
                <tr>
                  <th>Buzzer Type</th>
                  <th>Category</th>
                  <th>Request Time</th>
                  <th>Urgency</th>
                  <th>Close Time</th>
                  <th>Due Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {sampleIssues.map((issue) => (
                  <tr key={issue.id} className="table-row">
                    <td className="table-cell">{issue.buzzerType}</td>
                    <td className="table-cell">{issue.category}</td>
                    <td className="table-cell">
                      <div className="request-time-cell">
                        <span className="request-date">{issue.requestTime.split(" ")[0]}</span>
                        <span className="request-time">{issue.requestTime.split(" ")[1]}</span>
                      </div>
                    </td>
                    <td className="table-cell">{issue.urgency}</td>
                    <td className="table-cell">{issue.closeTime}</td>
                    <td className="table-cell">{issue.dueTime}</td>
                    <td className="table-cell">
                      <span className={getStatusClass(issue.status)}>{issue.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {sampleIssues.length === 0 && (
          <div className="empty-state">
            <svg className="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="empty-title">No issues found</h3>
            <p className="empty-description">Your issues will appear here when they are created.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default MyIssues
