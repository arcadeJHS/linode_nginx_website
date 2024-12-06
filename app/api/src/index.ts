import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';

const app = new Elysia()
              .get("/", () => "Hello Elysia")
              .get("/data", async () => { return {prop: 1}; })
              .use(cors())
              .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
