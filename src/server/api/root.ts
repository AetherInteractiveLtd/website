import { createRouter } from "~/server/api/trpc";

export const appRouter = createRouter({
});

export type AppRouter = typeof appRouter;
