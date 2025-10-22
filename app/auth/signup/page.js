"use client";

import { useState } from "react";
import { registerUser } from "@/lib/auth";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (email, password) => {
    setLoading(true);
    try {
      await registerUser(email, password);
      router.push("/app");
    } catch (err) {
      alert("Signup failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return <AuthForm type="signup" onSubmit={handleSignup} loading={loading} />;
}
