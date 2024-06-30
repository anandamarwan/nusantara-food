export type Food = {
  id: number;
  name: string;
  category: string;
  regional?: string;
  ingredients?: string[];
  cookingTime?: string;
  calories?: number;
  description?: string;
  isVegetarian?: boolean;
};

export const dataFoods: Food[] = [
  {
    id: 1,
    name: "Rendang",
    category: "Main Dishes",
    regional: "Sumatera Barat",
    ingredients: [
      "beef",
      "coconut milk",
      "lemongrass",
      "garlic",
      "shallots",
      "ginger",
      "chili",
    ],
    cookingTime: "4 hours",
    calories: 500,
    description: "Spicy beef stew slow-cooked in coconut milk and spices.",
    isVegetarian: false,
  },
  {
    id: 2,
    name: "Bolu Berendam",
    category: "Dessert",
    regional: "Riau",
    ingredients: ["eggs", "sugar", "flour", "vanilla", "syrup"],
    cookingTime: "1 hour",
    calories: 300,
    description: "Soft and moist cake soaked in syrup.",
    isVegetarian: true,
  },
  {
    id: 3,
    name: "Sate Madura",
    category: "Main Dishes",
    regional: "Madura",
    ingredients: ["chicken", "peanut sauce", "soy sauce", "shallots", "garlic"],
    cookingTime: "30 minutes",
    calories: 350,
    description: "Grilled chicken skewers served with a spicy peanut sauce.",
    isVegetarian: false,
  },
  {
    id: 4,
    name: "Babi Guling",
    category: "Main Dishes",
    regional: "Bali",
    ingredients: [
      "pork",
      "turmeric",
      "lemongrass",
      "garlic",
      "shallots",
      "ginger",
      "chili",
    ],
    cookingTime: "5 hours",
    calories: 600,
    description:
      "Balinese-style roast pork with a blend of traditional spices.",
    isVegetarian: false,
  },
];
