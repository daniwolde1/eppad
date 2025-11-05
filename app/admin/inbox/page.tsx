"use client";

export default function InboxPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <p>This is a placeholder for the Inbox. Replace this with your message table later.</p>

      <table className="min-w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Sender</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">example@example.com</td>
            <td className="border px-4 py-2">Test Subject</td>
            <td className="border px-4 py-2">2025-11-05</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
