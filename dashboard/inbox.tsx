import { pool } from "@/lib/db";

export default async function Inbox() {
  const [rows]: any = await pool.query(
    "SELECT id, name, email, subject, message, created_at FROM messages ORDER BY created_at DESC"
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((msg: any, i: number) => (
            <tr key={msg.id} className="border">
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{msg.name}</td>
              <td className="border p-2">{msg.email}</td>
              <td className="border p-2">{msg.subject}</td>
              <td className="border p-2">{msg.message}</td>
              <td className="border p-2">{new Date(msg.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

