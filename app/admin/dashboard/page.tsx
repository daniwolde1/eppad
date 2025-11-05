"use client"

import { useState } from "react"
import UserManagerPage from "./user-manager/page"

export default function AdminDashboard() {
  const [activePanel, setActivePanel] = useState<"user-manager" | "login">("user-manager")

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <nav className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activePanel === "user-manager" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setActivePanel("user-manager")}
            >
              User Manager
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activePanel === "login" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setActivePanel("login")}
            >
              Login Page
            </button>
          </li>
        </ul>
      </nav>

      {/* Right Panel */}
      <main className="flex-1 p-6 overflow-auto">
        {activePanel === "user-manager" && <UserManagerPage />}
        {activePanel === "login" && (
          <div>
            <h3 className="text-lg font-bold mb-4">Login Page</h3>
            <p>Use this panel to log in as admin (or implement the login form here).</p>
          </div>
        )}
      </main>
    </div>
  )
}
