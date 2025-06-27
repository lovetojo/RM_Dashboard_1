"use client"

import { FilePlus } from "lucide-react"
import EcobankLogo from "../assets/Frame.svg"
import "./home.css"

interface HistoryItem {
  id: string
  buzzerType: string
  category: string
  requestTime: string
  urgency: string
  closeTime: string
  dueTime: string
  status: "Done" | "Resolved" | "In Progress"
}

const sampleHistory: HistoryItem[] = [
  {
    id: "1",
    buzzerType: "Panic Button",
    category: "EPAC",
    requestTime: "06/26/2025 08:31:47",
    urgency: "500M",
    closeTime: "Toyota Honda",
    dueTime: "Hugo Odegbami",
    status: "Done",
  },
  {
    id: "2",
    buzzerType: "Panic Button",
    category: "EPAC",
    requestTime: "06/24/2025 15:54:55",
    urgency: "250M",
    closeTime: "Volvo B7R",
    dueTime: "Ezerate Onome",
    status: "Done",
  },
  {
    id: "3",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 14:44:54",
    urgency: "550M",
    closeTime: "Solania Gminicity",
    dueTime: "Gbadebo Johnson",
    status: "Done",
  },
  {
    id: "4",
    buzzerType: "Panic Button",
    category: "EPAC",
    requestTime: "06/24/2025 13:34:53",
    urgency: "120M",
    closeTime: "BYD k9",
    dueTime: "Alaba Seun",
    status: "Done",
  },
  {
    id: "5",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 12:24:52",
    urgency: "230M",
    closeTime: "Yutong ZK6120",
    dueTime: "Ebioma Babatunde",
    status: "Done",
  },
  {
    id: "6",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 11:14:51",
    urgency: "650M",
    closeTime: "Toyota Coaster",
    dueTime: "Ilemobade Ajose",
    status: "Done",
  },
  {
    id: "7",
    buzzerType: "Teams Channel",
    category: "EPAC",
    requestTime: "06/24/2025 10:04:50",
    urgency: "450M",
    closeTime: "Iveco Urbanway",
    dueTime: "Okorie Austin",
    status: "Done",
  },
]

const History = () => {
  const getStatusClass = (status: HistoryItem["status"]) => {
    switch (status) {
      case "Done":
        return "history-status-badge history-status-done"
      case "Resolved":
        return "history-status-badge history-status-resolved"
      case "In Progress":
        return "history-status-badge history-status-in-progress"
      default:
        return "history-status-badge"
    }
  }

  const handleExport = () => {
    console.log("Exporting history...")
  }

  return (
    <div className="history-container">
      <header className="history-header">
        <div className="header-content">
          <img src={EcobankLogo || "/placeholder.svg"} alt="Ecobank Logo" className="ecobank-logo" />
          <div className="blue-line"></div>
        </div>
      </header>

      <main className="history-main">
        <div className="history-page-header">
          <h1 className="history-page-title">History</h1>
          <button onClick={handleExport} className="history-export-button">
            <FilePlus className="history-export-icon" />
            Export
          </button>
        </div>

        {/* History table */}
        <div className="history-table-container">
          <div className="history-table-wrapper">
            <table className="history-table">
              <thead className="history-table-header">
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
              <tbody className="history-table-body">
                {sampleHistory.map((item) => (
                  <tr key={item.id} className="history-table-row">
                    <td className="history-table-cell">{item.buzzerType}</td>
                    <td className="history-table-cell">{item.category}</td>
                    <td className="history-table-cell">
                      <div className="history-request-time-cell">
                        <span className="history-request-date">{item.requestTime.split(" ")[0]}</span>
                        <span className="history-request-time">{item.requestTime.split(" ")[1]}</span>
                      </div>
                    </td>
                    <td className="history-table-cell">{item.urgency}</td>
                    <td className="history-table-cell">{item.closeTime}</td>
                    <td className="history-table-cell">{item.dueTime}</td>
                    <td className="history-table-cell">
                      <span className={getStatusClass(item.status)}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty state when no history */}
        {sampleHistory.length === 0 && (
          <div className="history-empty-state">
            <svg className="history-empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="history-empty-title">No history found</h3>
            <p className="history-empty-description">Your history will appear here when available.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default History
