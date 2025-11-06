"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Member {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  membership_type: string;
  current_position: string;
  institution: string;
  years_of_experience: string;
  areas_of_interest: string;
  working_groups: string;
  how_did_you_hear: string;
  status: "pending" | "completed";
  created_at: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch members from DB
  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/members");
      const data = await res.json();
      setMembers(data);
    } catch (err) {
      console.error("Failed to fetch members", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleConfirm = async (id: number) => {
    if (!confirm("Are you sure you want to confirm this member?")) return;
    try {
      const res = await fetch(`/api/members/${id}/confirm`, { method: "POST" });
      if (res.ok) {
        alert("Member confirmed successfully!");
        fetchMembers(); // Refresh list
      } else {
        alert("Failed to confirm member.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-6">Loading members...</p>;

  return (
    <Card className="max-w-6xl mx-auto mt-8">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">Registered Members</h1>

        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={m.id} className="text-center">
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">
                  {m.first_name} {m.last_name}
                </td>
                <td className="border p-2">{m.email}</td>
                <td className="border p-2 capitalize">{m.membership_type}</td>
                <td
                  className={`border p-2 font-semibold ${
                    m.status === "completed" ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {m.status}
                </td>
                <td className="border p-2">
                  {m.status === "pending" ? (
                    <Button
                      variant="outline"
                      onClick={() => handleConfirm(m.id)}
                      className="text-sm"
                    >
                      Confirm
                    </Button>
                  ) : (
                    <span className="text-gray-500">✔ Confirmed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
