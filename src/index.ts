import { Hono } from "hono";

import foodsRoute from "./foods/route";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Nusantara Food API",
    foods: "/foods",
  });
});

app.route("/foods", foodsRoute);

console.log("👋 Nusantara Food API is running");

export default app;
