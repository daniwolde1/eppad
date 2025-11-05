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

  useEffect(() => {
    async function fetchMessages() {
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

    fetchMessages();
  }, []);

  if (loading) return <p className="p-4">Loading messages...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      {messages.length === 0 && <p>No messages found.</p>}

      {messages.map((msg) => (
        <div key={msg.id} className="border rounded-lg p-4 shadow-sm bg-white">
          <p>
            <strong>Name:</strong> {msg.name}
          </p>
          <p>
            <strong>Email:</strong> {msg.email}
          </p>
          <p>
            <strong>Subject:</strong> {msg.subject}
          </p>
          <p>
            <strong>Message:</strong> {msg.message}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Received:</strong>{" "}
            {new Date(msg.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
