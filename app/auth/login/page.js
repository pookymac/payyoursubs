"use client";

import { useState } from "react";
import { loginUser } from "@/lib/auth";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
  await loginUser(email, password);
  router.push("/"); // redirect after login
    } catch (err) {
      alert("Login failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} loading={loading} />;
}
