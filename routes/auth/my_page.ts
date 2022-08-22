import {
  HandlerContext,
  Handlers,
} from "https://deno.land/x/fresh@1.0.2/server.ts";
import { UsersRepository } from "repositories/users.repository.ts";
import { AuthService } from "../../service/auth/auth.service.ts";
import { client } from "../../utils/Database/mysql.ts";

const authService: AuthService = new AuthService(new UsersRepository(client));

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    return await ctx.render(null);
  },
  async PUT(req: Request, _: HandlerContext) {
    const url: URL = new URL(req.url);
    const userId: number = +(url.searchParams.get("id")!);

    try {
      await authService.modify(userId, await req.json());

      return new Response(null, { status: 200, statusText: "OK" });
    } catch (error) {
      console.log(`%c${error}`, "color:red;");
      return new Response(JSON.stringify({ "error": error.message }), {
        status: 400,
        statusText: "Bad Request",
      });
    }
  },
  async DELETE(req: Request, _: HandlerContext) {
    const url: URL = new URL(req.url);
    const userId: number = +(url.searchParams.get("id")!);

    try {
      await authService.delete(userId);

      return new Response(null, { status: 200, statusText: "OK" });
    } catch (error) {
      console.log(`%c${error}`, "color:red;");
      return new Response(JSON.stringify({ "error": error.message }), {
        status: 400,
        statusText: "Bad Request",
      });
    }
  },
};
