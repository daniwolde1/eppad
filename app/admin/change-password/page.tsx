"use client";

import { useState } from "react";

export default function ChangePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    if (password !== confirm) {
      setMessage("Passwords do not match!");
      return;
    }
    setMessage("Password change placeholder — implement database logic later.");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-2 py-1"
          />
        </div>
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full border px-2 py-1"
          />
        </div>
        <button onClick={handleChangePassword} className="bg-blue-500 text-white px-4 py-2 rounded">
          Change Password
        </button>
        {message && <p className="text-red-500">{message}</p>}
      </div>
    </div>
  );
}
