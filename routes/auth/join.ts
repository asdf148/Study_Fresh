import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext<any, Record<string, unknown>>) {
    return await ctx.render(null);
  },
};
