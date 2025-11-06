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
  const [error, setError] = useState<string | null>(null);

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/members");

      if (!res.ok) {
        throw new Error(`API returned status ${res.status}`);
      }

      const data = await res.json();
      console.log("Fetched members:", data);

      // Defensive check: ensure data is an array
      if (!Array.isArray(data)) {
        throw new Error("API response is not an array");
      }

      setMembers(data);
    } catch (err: any) {
      console.error("Failed to fetch members", err);
      setError(err.message || "Failed to load members");
      setMembers([]);
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

      if (!res.ok) {
        throw new Error(`Failed with status ${res.status}`);
      }

      alert("Member confirmed successfully!");
      fetchMembers(); // Refresh list
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to confirm member.");
    }
  };

  if (loading) return <p className="text-center mt-6">Loading members...</p>;
  if (error) return <p className="text-center mt-6 text-red-600">{error}</p>;
  if (members.length === 0) return <p className="text-center mt-6">No members found.</p>;

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
                  {m.first_name || ""} {m.last_name || ""}
                </td>
                <td className="border p-2">{m.email || "-"}</td>
                <td className="border p-2 capitalize">{m.membership_type || "-"}</td>
                <td
                  className={`border p-2 font-semibold ${
                    m.status === "completed" ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {m.status || "pending"}
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
