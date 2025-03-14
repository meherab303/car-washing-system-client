"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

// Define validation schema
const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  // Submit Handler
  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
          <CardBody>
            <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name Input */}
              <div>
                <Input
                  label="Full Name"
                  {...register("name")}
                  isInvalid={!!errors.name}
                  className="text-white"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
              </div>

              {/* Email Input */}
              <div>
                <Input
                  label="Email"
                  {...register("email")}
                  isInvalid={!!errors.email}
                  className="text-white"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div>
                <Input
                  type="password"
                  label="Password"
                  {...register("password")}
                  isInvalid={!!errors.password}
                  className="text-white"
                />
                {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
              </div>

              {/* Confirm Password Input */}
              <div>
                <Input
                  type="password"
                  label="Confirm Password"
                  {...register("confirmPassword")}
                  isInvalid={!!errors.confirmPassword}
                  className="text-white"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Submit Button with Animation */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  color="primary"
                  isDisabled={isSubmitting}
                  className="w-full font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg"
                >
                  {isSubmitting ? "Registering..." : "Sign Up"}
                </Button>
              </motion.div>
            </form>

            <p className="text-white text-center mt-4 text-sm">
              Already have an account? <a href="/login" className="text-blue-400 hover:underline">Log in</a>
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
