import { z } from "zod";

export const createServiceSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  duration: z.coerce.number().min(1, "Duration must be greater than 0"),
});

export type TCreateServiceInput = z.infer<typeof createServiceSchema>;
