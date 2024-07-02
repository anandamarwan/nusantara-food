import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newFood = await prisma.food.create({
    data: {
      name: "Rendang",
      category: "main dishes",
      regional: "Sumatera Barat",
    },
  });
  console.log({ newFood });

  const allFoods = await prisma.food.findMany();
  console.log({ allFoods });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
