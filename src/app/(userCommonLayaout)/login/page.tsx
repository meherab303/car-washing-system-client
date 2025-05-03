/* eslint-disable react/no-unescaped-entities */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Input,
  Button,
  Card,
  CardBody,
  Checkbox,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import loginValidationSchema from "@/src/schemas/login.schemas";
import { useUser } from "@/src/context/user.provider";
import { useUserLogin } from "@/src/hooks/auth.hook";
import { useEffect } from "react";

import "@/src/styles/login.css";

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

  const searchParams = useSearchParams();
  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams.get("redirect");
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit = async (data: LoginFormData) => {
    handleUserLogin(data);
    userLoading(true);
    reset();
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-200 p-4"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent), url('/carwash.jpg')",
      }}
    >
      <div className="fade-in-up w-full flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl">
        {/* Left Side - Welcome Message */}
        <div className="w-full md:w-1/2 bg-blue-500 flex flex-col justify-center items-center text-white p-8 md:p-10 rounded-b-2xl md:rounded-r-full md:rounded-bl-none">
          <h2 className="text-3xl font-bold mb-4">Hello, Welcome!</h2>
          <p className="mb-6">Don't have an account?</p>
          <Link href="/register">
            <Button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all">
              Register
            </Button>
          </Link>
        </div>

        {/* Right Side - Login Form */}
        <Card className="w-full md:w-1/2 p-6 md:p-10 shadow-none bg-white rounded-t-2xl md:rounded-l-none">
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
                <Checkbox color="primary">
                  <p className="text-black">Remember me</p>
                </Checkbox>
                <Link
                  className="text-blue-500 hover:underline text-sm"
                  href="/forget-password"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-transform duration-200 text-white py-3 rounded-lg"
                  color="primary"
                  isDisabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
