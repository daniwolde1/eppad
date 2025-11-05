"use client";

import { useState, useEffect } from "react";
import InboxPage from "../inbox/page"; // Import your existing inbox page
import UserManagerPage from "./user-manager/page"; // We'll create next
import ChangePasswordPage from "./change-password/page"; // We'll create next

type Section = "inbox" | "users" | "change-password";

export default function AdminDashboard() {
  const [section, setSection] = useState<Section>("inbox");

  const username = "Admin"; // You can extract from JWT if needed

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">Howdy, {username}!</h2>
        <ul className="space-y-2">
          <li
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => setSection("inbox")}
          >
            Inbox
          </li>
          <li
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => setSection("users")}
          >
            User Manager
          </li>
          <li
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => setSection("change-password")}
          >
            Change Admin Password
          </li>
        </ul>
      </aside>

      {/* Right Panel */}
      <main className="flex-1 overflow-auto bg-gray-100 p-6">
        {section === "inbox" && <InboxPage />}
        {section === "users" && <UserManagerPage />}
        {section === "change-password" && <ChangePasswordPage />}
      </main>
    </div>
  );
}
