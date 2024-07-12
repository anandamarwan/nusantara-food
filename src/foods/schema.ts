import { z } from "zod";

export const foodCreateSchema = z.object({
  name: z.string().min(5).max(100),
  category: z.string(),
  regional: z.string().optional(),
  cookingTime: z.string().optional(),
  calories: z.number().optional(),
  description: z.string().optional(),
  isVegetarian: z.boolean().optional(),
});
