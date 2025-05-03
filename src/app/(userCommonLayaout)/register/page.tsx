"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

import { registerSchema } from "@/src/schemas/register.schemas";
import { useUserRegistration } from "@/src/hooks/auth.hook";

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

  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit = (data: RegisterFormData) => {
    const userData = { ...data, role: "user" };
    handleUserRegistration(userData);
    reset();
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-default-400 p-4"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent), url('/carwash.jpg')",
      }}
    >
      <div className="w-full max-w-md">
        <Card className="shadow-2xl bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
          <CardBody>
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Create Account
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Input */}
              <div>
                <Input
                  className="text-white"
                  label="Full Name"
                  {...register("name")}
                  isInvalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <Input
                  className="text-white"
                  label="Email"
                  {...register("email")}
                  isInvalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <Input
                  className="text-white"
                  label="Phone Number"
                  {...register("phone")}
                  isInvalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Address Input */}
              <div>
                <Input
                  className="text-white"
                  label="Address"
                  {...register("address")}
                  isInvalid={!!errors.address}
                />
                {errors.address && (
                  <p className="text-red-400 text-sm">
                    {errors.address.message}
                  </p>
                )}
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
                {errors.password && (
                  <p className="text-red-400 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div>
                <Input
                  className="text-white"
                  label="Confirm Password"
                  type="password"
                  {...register("confirmPassword")}
                  isInvalid={!!errors.confirmPassword}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  className="w-full font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg"
                  color="primary"
                  isDisabled={isPending || isSubmitting}
                  type="submit"
                >
                  {isPending || isSubmitting ? "Registering..." : "Sign Up"}
                </Button>
              </div>
            </form>

            <p className="text-white text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link className="text-blue-400 hover:underline" href="/login">
                Log in
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
