
// app/inbox/page.tsx
import { db } from "@/lib/db";
import { format } from "date-fns";

export const revalidate = 0; // optional, disables caching

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

async function getContacts(): Promise<Contact[]> {
  const [rows] = await db.query(
    "SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC"
  );
  return rows as Contact[];
}

export default async function InboxPage() {
  const contacts = await getContacts();

  if (contacts.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Inbox</h1>
        <p>No messages found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Inbox</h1>
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between mb-2">
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(contact.created_at), "yyyy-MM-dd HH:mm")}
              </p>
            </div>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">Email:</span> {contact.email}
            </p>
            <p className="text-gray-800">{contact.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
