import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { products, testimonials } from "./schema";
import { mockProducts, mockTestimonials } from "./seed-data";

const seed = async () => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);

  console.log("Seeding database...");

  try {
    await db.insert(products).values(mockProducts);
    await db.insert(testimonials).values(mockTestimonials);
    console.log("Seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }

  await sql.end();
};

void seed();
