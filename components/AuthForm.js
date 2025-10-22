"use client";

import { useState } from "react";

export default function AuthForm({ type = "login", onSubmit, loading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          {type === "login" ? "Welcome Back" : "Create an Account"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded text-white font-medium transition disabled:opacity-50"
          >
            {loading
              ? "Please wait..."
              : type === "login"
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
          {type === "login" ? (
            <>
              Don’t have an account?{" "}
              <a href="/auth/signup" className="text-blue-400 hover:text-blue-300">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="/auth/login" className="text-blue-400 hover:text-blue-300">
                Log in
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
