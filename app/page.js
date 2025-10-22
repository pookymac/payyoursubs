
"use client";

import { useEffect } from "react";
import useAuthListener from "@/lib/useAuthListener";
import { logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function AppPage() {
  const { user, loading } = useAuthListener();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-slate-900">
        <p>Loading...</p>
      </div>
    );
  }

  const handleLogout = async () => {
    await logoutUser();
    router.push("/auth/login");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-4">PayYourSubs Dashboard</h1>
      <p className="mb-8 text-gray-400">
        Logged in as: {user.email}
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-medium"
      >
        Log Out
      </button>
    </main>
  );
}
