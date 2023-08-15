import { createRouter, publicProcedure } from "../trpc";

/**
 * Mailing router is used for subscribing new people to our newslatter.
 */
export const mailingRouter = createRouter({
  subscribe: publicProcedure.mutation(async () => {
    return;
  }),

  unsubscribe: publicProcedure.mutation(async () => {
    return // We could natively add a function to unsubscribe as well
  })
})