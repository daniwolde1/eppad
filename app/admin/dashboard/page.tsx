"use client"

import { useState } from "react"

// Panel components (placeholders)
import InboxPage from "../inbox/page"
import UserManagerPage from "../user-manager/page"
import ChangePasswordPage from "../change-password/page"

export default function AdminDashboard() {
  const [activePanel, setActivePanel] = useState<"inbox" | "user-manager" | "change-password">("inbox")

  const renderPanel = () => {
    switch (activePanel) {
      case "inbox":
        return <InboxPage />
      case "user-manager":
        return <UserManagerPage />
      case "change-password":
        return <ChangePasswordPage />
      default:
        return <div>Select a panel</div>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-2">
          <button
            className={`block w-full text-left px-3 py-2 rounded ${activePanel === "inbox" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            onClick={() => setActivePanel("inbox")}
          >
            Inbox
          </button>
          <button
            className={`block w-full text-left px-3 py-2 rounded ${activePanel === "user-manager" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            onClick={() => setActivePanel("user-manager")}
          >
            User Manager
          </button>
          <button
            className={`block w-full text-left px-3 py-2 rounded ${activePanel === "change-password" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            onClick={() => setActivePanel("change-password")}
          >
            Change Password
          </button>
          {/* Add more admin links here if needed */}
        </nav>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6">
        {renderPanel()}
      </main>
    </div>
  )
}
