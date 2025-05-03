// src/app/forget-password/page.tsx
"use client";

import { useForgetPassword } from "@/src/hooks/auth.hook";
import { useState } from "react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const { mutate: sendResetLink, isPending } = useForgetPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendResetLink(email);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-100  px-4">
      <form
        onSubmit={handleSubmit}
        className="text-default-600 shadow-2xl p-8 rounded-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-default-600">
          Forgot Password
        </h2>
        <div>
          <label htmlFor="email" className="block text-default-600 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="input text-default-600 input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full text-default-600"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
