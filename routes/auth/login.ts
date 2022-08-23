import { HandlerContext, Handlers } from "$fresh/server.ts";
import { client } from "../../utils/Database/mysql.ts";
import { UsersRepository } from "repositories/users.repository.ts";
import { AuthService } from "../../service/auth/auth.service.ts";

const authService: AuthService = new AuthService(new UsersRepository(client));

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    return await ctx.render(null);
  },
  async POST(req: Request, _ctx: HandlerContext) {
    const user = await req.json();
    try {
      const token: string | null = await authService.login(user);
      return new Response(JSON.stringify({ "token": token }), {
        status: 201,
        statusText: "Created",
      });
    } catch (error) {
      console.log(`%c${error}`, "color:red;");
      return new Response(JSON.stringify({ "error": error.message }), {
        status: 400,
        statusText: "Bad Request",
      });
    }
  },
};
