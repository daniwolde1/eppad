"use client";

import { useEffect, useState } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

export default function InboxPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    setLoading(true);
    try {
      const res = await fetch("/api/inbox");
      const data = await res.json();
      if (res.ok && data.success) {
        setMessages(data.messages);
      } else {
        setError(data.error || "Failed to fetch messages");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(messages.map((m) => m.id));
    }
    setSelectAll(!selectAll);
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;

    if (!confirm(`Are you sure you want to delete ${selectedIds.length} message(s)?`))
      return;

    try {
      const res = await fetch("/api/delete-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchMessages();
        setSelectedIds([]);
        setSelectAll(false);
      } else {
        alert(data.error || "Failed to delete messages");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  };

  if (loading) return <p className="p-6">Loading messages...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Folders</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Inbox</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Sent</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Spam</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Junk</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Trash</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Drafts</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Inbox</h1>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
            disabled={selectedIds.length === 0}
            onClick={handleDelete}
          >
            Delete Selected
          </button>
        </div>

        {messages.length === 0 && <p>No messages found.</p>}

        {/* Messages Table */}
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 border-b">
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              </th>
              <th className="px-4 py-2 text-left border-b">From</th>
              <th className="px-4 py-2 text-left border-b">Email</th>
              <th className="px-4 py-2 text-left border-b">Subject</th>
              <th className="px-4 py-2 text-left border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedMessage(msg)}
              >
                <td className="px-4 py-2 border-b" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(msg.id)}
                    onChange={() => handleSelect(msg.id)}
                  />
                </td>
                <td className="px-4 py-2 border-b">{msg.name}</td>
                <td className="px-4 py-2 border-b">{msg.email}</td>
                <td className="px-4 py-2 border-b font-semibold text-blue-600">
                  {msg.subject}
                </td>
                <td className="px-4 py-2 border-b">
                  {new Date(msg.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-3/4 max-w-2xl p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
              onClick={() => setSelectedMessage(null)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedMessage.subject}</h2>
            <p className="text-sm text-gray-500 mb-4">
              From: {selectedMessage.name} ({selectedMessage.email})
            </p>
            <div className="border-t pt-2">
              <p>{selectedMessage.message}</p>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Received: {new Date(selectedMessage.created_at).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
