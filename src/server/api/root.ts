import { createRouter } from "~/server/api/trpc";
import { mailingRouter } from "./routers/mailing";

export const appRouter = createRouter({
    mail: mailingRouter,
});

export type AppRouter = typeof appRouter;
