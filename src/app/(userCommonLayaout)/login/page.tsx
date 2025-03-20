/* eslint-disable react/no-unescaped-entities */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Card, CardBody, Checkbox } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import loginValidationSchema from "@/src/schemas/login.schemas";
import { loginUser } from "@/src/services/loginUser";

// Define validation schema
type LoginFormData = z.infer<typeof loginValidationSchema>;

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationSchema),
  });

  // Submit Handler
  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await loginUser(data);

      if (result.success) {
        toast.success("✅ Login successful!", {
          position: "top-right",
          duration: 3000,
        });
        router.push("/");
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
    <div
      className="flex  justify-center items-center min-h-screen bg-gray-200 p-4"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent), url('/carwash.jpg')",
      }}
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl flex  bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Left Side - Welcome Message */}
        <div className="w-1/2 bg-blue-500 flex flex-col justify-center items-center text-white p-10 rounded-r-full  ">
          <h2 className="text-3xl font-bold mb-4">Hello, Welcome!</h2>
          <p className="mb-6"> Don't have an account?</p>
          <Link href="/register">
            <Button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all">
              Register
            </Button>
          </Link>
        </div>

        {/* Right Side - Login Form */}
        <Card className="w-1/2 p-10 shadow-none  bg-white rounded-l-none">
          <CardBody>
            <h2 className="text-2xl text-black font-bold text-center mb-6">
              Login
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div>
                <Input
                  label="Email"
                  {...register("email")}
                  isInvalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <Input
                  label="Password"
                  type="password"
                  {...register("password")}
                  isInvalid={!!errors.password}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center">
                <Checkbox color="primary" className="hover:none">
                  <p className="text-black">Remember me</p>
                </Checkbox>
                <Link
                  href="/forgot-password"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-white py-3 rounded-lg"
                  color="primary"
                  isDisabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </motion.div>
            </form>

            {/* Social Login */}
            <p className="text-center text-sm mt-4 text-black">
              or login with social platforms
            </p>
            <div className="flex justify-center space-x-4 mt-3">
              <Button isIconOnly color="default" className="p-3 shadow-md">
                <span className="text-lg">G</span>
              </Button>
              <Button isIconOnly color="default" className="p-3 shadow-md">
                <span className="text-lg">f</span>
              </Button>
              <Button isIconOnly color="default" className="p-3 shadow-md">
                <span className="text-lg">G</span>
              </Button>
              <Button isIconOnly color="default" className="p-3 shadow-md">
                <span className="text-lg">in</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
