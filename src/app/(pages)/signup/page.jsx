// "use client";

// import { useAuth } from "@/hooks/useAuth";
// import { toast } from "react-toastify";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const page = () => {
//   const { signup } = useAuth();
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const handleSignup = async () => {
//     const response = await signup(name, email, password);
//     if (response.success) {
//       toast.success("Signup successful!");
//       router.push("/login");
//     } else {
//       toast.error(response.message);
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
//       <div className="h-[max-content] w-[max-content] flex flex-col items-center justify-center gap-3">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="p-2 text-black"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="p-2 text-black"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="p-2 text-black"
//         />
//       </div>

//       <button
//         className="rounded-md border border-zinc-700 hover:bg-zinc-800 text-[.8rem] px-4 py-2 bg-zinc-900"
//         onClick={handleSignup}
//       >
//         Signup
//       </button>

//       <h3 className="gap-3">
//         Already have an Account &nbsp;
//         <Link href={"/login"} className="text-blue-600">
//           Login
//         </Link>
//       </h3>
//     </div>
//   );
// };

// export default page;



"use client";

import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignupPage = () => {
  const { signup } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
    const response = await signup(name, email, password);
    if (response.success) {
      toast.success("Signup successful!");
      router.push("/login");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-black ">
      <Card className="w-[400px] p-6 bg-gray-800 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-white">Create an Account</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black"
          />
          <Button onClick={handleSignup} variant="secondary" className="w-full bg-blue-600 hover:bg-blue-700">
            Sign Up
          </Button>
          <p className="text-center text-sm text-gray-400">
            Already have an account? &nbsp;
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
