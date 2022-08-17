import { Model } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { User } from "../../../utils/database/models/user.ts";

export class JoinService {
  public async join(user: any): Promise<Model> {
    const result = await User.create(user);
    return result;
  }
}
