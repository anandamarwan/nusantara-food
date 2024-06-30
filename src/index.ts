import { Hono } from "hono";
import { type Food, dataFoods } from "./data/food";

let foods = dataFoods;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Nusantara Food API",
    foods: "/foods",
  });
});

app.get("/foods", (c) => {
  if (foods.length <= 0) {
    return c.json({
      message: "There is no Foods data",
    });
  }

  return c.json({ foods });
});

app.get("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      massage: "There is no food Id",
    });
  }

  const food = foods.find((food) => food.id == id);

  if (!food) {
    return c.json({
      massage: "There is no Food",
    });
  }

  return c.json(food);
});

app.delete("/foods", (c) => {
  foods = [];

  return c.json({
    message: "All foods data have been deleted",
  });
});

app.delete("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      massage: "There is no food Id",
    });
  }

  const food = foods.find((food) => food.id == id);

  if (!food) {
    return c.json({
      massage: "There is no food to be deleted",
    });
  }

  foods = foods.filter((food) => food.id != id);

  return c.json({
    message: `Food with Id ${id} has been deleted`,

    deletedFood: food,
  });
});

app.post("/foods", async (c) => {
  const body = await c.req.json();

  const newFood: Food = {
    id: foods[foods.length - 1].id + 1,
    name: body.name,
    category: body.category,
  };

  const updatedFoods = [...foods, newFood];

  foods = updatedFoods;

  return c.json(newFood);
});

app.put("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      massage: "There is no food Id",
    });
  }

  const food = foods.find((food) => food.id == id);

  if (!food) {
    return c.json({
      massage: "There is no Food",
    });
  }

  const body = await c.req.json();

  const newFood: Food = {
    id: food.id,
    name: body.name,
    category: body.category,
  };

  const updatedFoods = foods.map((food) => {
    if (food.id == id) {
      return newFood;
    } else {
      return food;
    }
  });

  foods = updatedFoods;

  return c.json(food);
});

console.log("👋 Nusantara Food API is running");

export default app;
