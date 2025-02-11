"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const page = () => {
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
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <div className="h-[max-content] w-[max-content] flex flex-col items-center justify-center gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-black"
        />
      </div>

      <button
        className="rounded-md border border-zinc-700 hover:bg-zinc-800 text-[.8rem] px-4 py-2 bg-zinc-900"
        onClick={handleLogin}
      >
        Login
      </button>

      <h3 className="gap-3">
        Don't have an Account &nbsp;
        <Link href={"/signup"} className="text-blue-600">
          Signup
        </Link>
      </h3>
    </div>
  );
};

export default page;
