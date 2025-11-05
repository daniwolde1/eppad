"use client"

import { useState } from "react"

// Import sibling pages correctly
import UserManagerPage from "../user-manager/page"
import ChangePasswordPage from "../change-password/page" // only if you create it later

export default function AdminDashboard() {
  const [activePanel, setActivePanel] = useState<"inbox" | "user-manager" | "change-password">("inbox")

  const renderPanel = () => {
    switch (activePanel) {
      case "user-manager":
        return <UserManagerPage />
      case "change-password":
        return <ChangePasswordPage />
      case "inbox":
      default:
        return <div>Inbox panel goes here</div>
    }
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <button onClick={() => setActivePanel("inbox")} className="w-full text-left">
              Inbox
            </button>
          </li>
          <li>
            <button onClick={() => setActivePanel("user-manager")} className="w-full text-left">
              User Manager
            </button>
          </li>
          <li>
            <button onClick={() => setActivePanel("change-password")} className="w-full text-left">
              Change Password
            </button>
          </li>
        </ul>
      </div>

      {/* Main panel */}
      <div className="flex-1 p-6 overflow-auto">{renderPanel()}</div>
    </div>
  )
}
