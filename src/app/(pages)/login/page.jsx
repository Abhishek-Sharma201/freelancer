
"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";


const Page = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await login(email, password);
    if (response.success) {
      toast.success("Login successful!");
      router.push("/");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-center text-2xl font-semibold text-white mb-4">Login</h2>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button
            className="w-full p-3 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
