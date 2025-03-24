import { z } from "zod";

export const updateUserValidationSchema = z.object({
    body: z.object({
      name: z.string().optional(),
      email: z.string().optional(),
      password: z.string().optional(),
      phone: z.string().optional(),
      role: z.enum(["admin", "user"]).optional(),
      address: z.string().optional(),
    }),
  });