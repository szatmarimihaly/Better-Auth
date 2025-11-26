"use client";

import { ReactEventHandler, useState } from "react"
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link"
import Spinner from "../Spinner/Spinner";
import Error from "../error/Error";


const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      await signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });
      router.push("/dashboard");
      router.refresh();
      
    } catch (err: any) {
      setError(err.message || "Failed to create account. Email may already exist.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col max-w-lg mx-auto bg-white px-4 py-6 rounded-lg border border-gray-200 shadow-gray-200 shadow-sm">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sign in to Rankify.</h1>
        <p className="text-gray-600 mt-2">Welcome back! Please sign in to continue</p>
      </div>
      <p className="text-center">OR</p>

      {error && (
        <Error error={error} />
      )}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="mx-4 text-md font-medium">Email address</label>
          <input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 focus:outline-none w-full px-4 py-2 rounded-lg"
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="mx-4 text-md font-medium">Password</label>
          <input 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 focus:outline-none w-full px-4 py-2 rounded-lg"
            placeholder="********"
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-black text-white px-4 py-2 rounded-lg shadow-black shadow-md font-medium"
        >
          {loading ?  (<Spinner/>) : "Sign In"}
        </button>
        <p className="text-center text-gray-600">Don't have an account? <Link href={`/sign-up`} className="text-black">Sign Up</Link> </p>
      </div>
    </div>
  )
}

export default SignIn