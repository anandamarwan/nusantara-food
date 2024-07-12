import { z } from "zod";

export const foodSchema = z.object({
  name: z.string(),
  category: z.string(),
  regional: z.string(),
  cookingTime: z.string(),
  calories: z.number(),
  description: z.string(),
  isVegetarian: z.boolean(),
});
