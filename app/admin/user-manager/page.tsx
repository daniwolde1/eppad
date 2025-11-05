"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  username: string;
  email: string;
};

export default function UserManagerPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    if (res.ok && data.success) {
      setUsers(data.users);
    }
    setLoading(false);
  }

  async function addUser() {
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      fetchUsers();
      setNewUser({ username: "", email: "", password: "" });
    } else {
      alert(data.error || "Failed to add user");
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Manager</h2>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={addUser}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Add User
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Username</th>
              <th className="px-4 py-2 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.username}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
