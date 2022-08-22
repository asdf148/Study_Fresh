import { HandlerContext, Handlers } from "$fresh/server.ts";
import { JoinService } from "../../service/join.service.ts";
import { client } from "../../utils/Database/mysql.ts";
import { UsersRepository } from "repositories/users.repository.ts";

const joinService: JoinService = new JoinService(new UsersRepository(client));

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    return await ctx.render(null);
  },
  async POST(req: Request, _ctx: HandlerContext) {
    const user = await req.json();
    const result: boolean = await joinService.join(user);
    if (result == true) {
      return new Response(null, { status: 200, statusText: "OK" });
    } else {
      return new Response(JSON.stringify({ "test": "Hello" }), {
        status: 400,
        statusText: "Bad Request",
      });
    }
  },
};
