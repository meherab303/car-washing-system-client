/* eslint-disable prettier/prettier */

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Card, CardBody, Checkbox } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";

// import { loginSchema } from "@/src/schemas/login.schemas";
// import loginUser from "@/src/services/loginUser";

// Define validation schema
type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(),
  });

  // Submit Handler
  const onSubmit = async (data: LoginFormData) => {
    try {
    //   const result = await loginUser(data);
      
      if (result.success) {
        toast.success("✅ Login successful!", {
          position: "top-right",
          duration: 3000,
        });
      } else {
        toast.error(result.errorSource?.[0]?.message || "Login failed", {
          position: "top-right",
          duration: 3000,
        });
      }
      reset();
    } catch (error: any) {
      toast.error(error.message || "Login failed", {
        position: "top-right",
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <CardBody>
            <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div>
                <Input
                  className="text-white"
                  label="Email"
                  {...register("email")}
                  isInvalid={!!errors.email}
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div>
                <Input
                  className="text-white"
                  label="Password"
                  type="password"
                  {...register("password")}
                  isInvalid={!!errors.password}
                />
                {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center">
                <Checkbox color="primary" className="text-white">Remember me</Checkbox>
                <Link href="/forgot-password" className="text-blue-400 hover:underline text-sm">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button with Animation */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg"
                  color="primary"
                  isDisabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Logging in..." : "Sign In"}
                </Button>
              </motion.div>
            </form>

            <p className="text-white text-center mt-4 text-sm">
              Don't have an account? <Link className="text-blue-400 hover:underline" href="/register">Sign up</Link>
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
