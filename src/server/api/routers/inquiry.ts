import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { inquiries } from "@/server/db/schema";

export const inquiryRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
        phone: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(inquiries).values(input);
    }),
});
