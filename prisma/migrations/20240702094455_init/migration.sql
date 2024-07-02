-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "regional" VARCHAR(255),
    "ingredients" VARCHAR(255),
    "cookingTime" VARCHAR(255),
    "calories" INTEGER,
    "description" VARCHAR(255),
    "isVegetarian" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);
