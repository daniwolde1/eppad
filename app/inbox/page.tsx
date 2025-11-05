import { db } from "@/lib/db";

export default async function InboxPage() {
  const [rows] = await db.query("SELECT * FROM contacts ORDER BY created_at DESC");

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Inbox</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(rows) &&
            rows.map((row: any) => (
              <tr key={row.id}>
                <td className="p-3 border">{row.name}</td>
                <td className="p-3 border">{row.email}</td>
                <td className="p-3 border">{row.message}</td>
                <td className="p-3 border">
                  {new Date(row.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
