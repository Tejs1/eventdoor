import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { products } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.db.query.products.findMany();
    return products ?? null;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db
        .select()
        .from(products)
        .where(eq(products.id, input.id));
    }),
});
