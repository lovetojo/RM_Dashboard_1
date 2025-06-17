"use client"

import type React from "react"

import { useState } from "react"
import "../App.css"
import EcobankLogo from "../assets/Frame.svg"

interface FormData {
  category: string
  accountNumber: string
  nin: string
  impact: string
  urgency: string
  description: string
}

function TeamsChannel() {
  const [formData, setFormData] = useState<FormData>({
    category: "Central IT Service",
    accountNumber: "",
    nin: "",
    impact: "Affects Only Me",
    urgency: "Affects Only Me",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="container">
      <header className="header">
        <img src={EcobankLogo || "/placeholder.svg"} alt="Ecobank Logo" className="logo" />
        <div className="divider"></div>
      </header>

      <main className="main">
        <h1 className="form-title">Teams Channel</h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="category">Category of Issue</label>
              <div className="select-wrapper">
                <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                  <option value="Central IT Service">Central IT Service</option>
                  <option value="Banking Services">Banking Services</option>
                  <option value="Account Issues">Account Issues</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="accountNumber">Customer's Account Number*</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="1234567890"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="impact">Impact*</label>
              <div className="select-wrapper">
                <select id="impact" name="impact" value={formData.impact} onChange={handleChange} required>
                  <option value="Affects Only Me">Affects Only Me</option>
                  <option value="Affects Department">Affects Department</option>
                  <option value="Affects Multiple Users">Affects Multiple Users</option>
                  <option value="Affects Business">Affects Business</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nin">NIN</label>
              <input
                type="text"
                id="nin"
                name="nin"
                value={formData.nin}
                onChange={handleChange}
                placeholder="12345678"
              />
            </div>

            <div className="form-group">
              <label htmlFor="urgency">Urgency*</label>
              <div className="select-wrapper">
                <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} required>
                  <option value="Affects Only Me">Affects Only Me</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="description">Description*</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
          </div>

          <div className="form-row submit-row">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>

          <div className="form-row">
            <p className="representative-note">*A Representative will reach out to you within an Hour</p>
          </div>
        </form>
      </main>
    </div>
  )
}

export default TeamsChannel
