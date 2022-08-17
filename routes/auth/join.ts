import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext<any, Record<string, unknown>>) {
    return await ctx.render(null);
  },
  async POST(req: Request, ctx: HandlerContext<any, Record<string, unknown>>) {
    console.log(await req.json());

    return new Response(JSON.stringify({ "test": "test" }));
  },
};
