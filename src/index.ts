import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { dataFoods } from "./data/food";
import { prisma } from "./libs/prisma";

import { z } from "zod";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Nusantara Food API",
    foods: "/foods",
  });
});

app.get("/foods", async (c) => {
  const foods = await prisma.food.findMany();

  return c.json({
    message: "Get all foods",
    foods,
  });
});

app.get("/foods/:id", async (c) => {
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

app.post(
  "/foods",
  zValidator(
    "json",
    z.object({
      name: z.string(),
      category: z.string(),
      regional: z.string(),
    })
  ),
  async (c) => {
    const body = c.req.valid("json");

    try {
      const newFood = await prisma.food.create({
        data: {
          name: body.name,
          category: body.category,
          regional: body.regional,
        },
      });
      return c.json(newFood);
    } catch (error) {
      c.status(400);
      return c.json({
        message: "Cannot create food",
        error,
      });
    }
  }
);

app.post("/foods/seed", async (c) => {
  for (const dataFood of dataFoods) {
    await prisma.food.create({
      data: dataFood,
    });
  }

  return c.json({ message: "Many foods data has been seeded" });
});

app.delete("/foods", async (c) => {
  await prisma.food.deleteMany();

  return c.json({
    message: "All foods data have been deleted",
  });
});

app.delete("/foods/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) return c.json({ message: "There is no food ID" });

  const deletedFood = await prisma.food.delete({
    where: { id },
  });

  return c.json({
    message: `food with ID ${id} has been deleted`,
    deletedFood,
  });
});

app.put("/foods/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) return c.json({ message: "There is no food Id" });

  const body = await c.req.json();
  const newFood = await prisma.food.update({
    where: { id },
    data: {
      name: body.name ? String(body.name) : undefined,
      category: body.category ? String(body.category) : undefined,
      regional: body.regional ? String(body.regional) : undefined,
    },
  });

  return c.json(newFood);
});

console.log("👋 Nusantara Food API is running");

export default app;
