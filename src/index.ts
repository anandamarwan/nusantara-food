import { Hono } from "hono";
import { dataFoods } from "./data/food";

let foods = dataFoods;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Nusantara Food API",
    food: "/foods",
  });
});

app.get("/foods", (c) => {
  return c.json(dataFoods);
});

app.get("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      massage: "There is no Id",
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

console.log("👋 Nusantara Food API is running");

export default app;
