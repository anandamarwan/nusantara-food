import { Hono } from "hono";

import { prisma } from "../libs/prisma";
import { zValidator } from "@hono/zod-validator";
import { foodSchema } from "./schema";
import { dataFoods } from "../data/food";

const app = new Hono();

app.get("/", async (c) => {
  const foods = await prisma.food.findMany();

  return c.json({
    message: "Get all foods",
    foods,
  });
});

app.get("/:id", async (c) => {
  const id = c.req.param("id");

  const food = await prisma.food.findUnique({
    where: { id },
  });

  if (!food) {
    c.status(404);
    return c.json({ message: "Food not found", id });
  }

  return c.json({ food });
});

app.post("/", zValidator("json", foodSchema), async (c) => {
  const body = c.req.valid("json");

  try {
    const newFood = await prisma.food.create({
      data: body,
    });
    return c.json(newFood);
  } catch (error) {
    c.status(400);
    return c.json({
      message: "Cannot create food",
      error,
    });
  }
});

app.post("/seed", async (c) => {
  for (const dataFood of dataFoods) {
    await prisma.food.create({
      data: dataFood,
    });
  }

  return c.json({ message: "Many foods data has been seeded" });
});

app.delete("/", async (c) => {
  await prisma.food.deleteMany();

  return c.json({
    message: "All foods data have been deleted",
  });
});

app.delete("/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) return c.json({ message: "There is no food ID" });

  try {
    const deletedFood = await prisma.food.delete({
      where: { id },
    });

    return c.json({
      message: `Food with ID ${id} has been deleted`,
      deletedFood,
    });
  } catch (error) {
    c.status(400);
    return c.json({
      message: "Cannot delete food",
      error,
    });
  }
});

app.put("/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) return c.json({ message: "There is no food Id" });

  let body;
  try {
    body = await c.req.json();
  } catch (error) {
    c.status(400);
    return c.json({ message: "Failed to parse JSON" });
  }

  try {
    const updatedFood = await prisma.food.update({
      where: { id },
      data: {
        name: body.name ? String(body.name) : undefined,
        category: body.category ? String(body.category) : undefined,
        regional: body.regional ? String(body.regional) : undefined,
        cookingTime: body.cookingTime ? String(body.cookingTime) : undefined,
        calories: body.calories ? Number(body.calories) : undefined,
        description: body.description ? String(body.description) : undefined,
        isVegetarian:
          typeof body.isVegetarian === "boolean"
            ? body.isVegetarian
            : undefined,
      },
    });

    return c.json(updatedFood);
  } catch (error) {
    c.status(400);
    return c.json({
      message: "Cannot update food",
      error,
    });
  }
});

export default app;
