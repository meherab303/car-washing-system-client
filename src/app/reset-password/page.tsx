"use client";

import envConfig from "@/src/config/envConfig";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !token) {
      toast.error("Invalid reset link!");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${envConfig.baseApi}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, 
        },
        body: JSON.stringify({ email, newPassword }), 
      });
      

      const data = await res.json();

      if (data.success) {
        toast.success("Password reset successfully!");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        toast.error(data.message || "Reset failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-100 px-4">
      <form
        onSubmit={handleReset}
        className="bg-default-600 shadow-2xl p-6 rounded space-y-4 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-center text-blue-500">Reset Your Password</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="border text-default-500 p-2 rounded w-full"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
