
"use client";
import { useEffect } from "react";
import useAuthListener from "@/lib/useAuthListener";
import { logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, loading } = useAuthListener();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  const handleLogout = async () => {
    await logoutUser();
    router.push("/auth/login");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
        PayYourSubs Dashboard
      </h1>
      <p className="text-gray-300 max-w-md mb-8">
        This will be your member and club dashboard — logins, payments,
        and management coming soon.
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition"
      >
        Log Out
      </button>

      <p className="text-sm text-gray-500 mt-10">
        Logged in as {user.email}
      </p>
    </main>
  );
}
