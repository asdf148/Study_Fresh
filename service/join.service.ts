import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";
import { JoinDTO } from "dto/join.dto.ts";
import { UsersRepository } from "repositories/users.repository.ts";
import { User } from "../utils/models/user.ts";
import { ExecuteResult } from "https://deno.land/x/mysql@v2.10.2/mod.ts";
export class JoinService {
  private readonly usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async join(user: JoinDTO): Promise<boolean> {
    user.password = await bcrypt.hash(user.password);
    let result: ExecuteResult;

    try {
      result = await this.usersRepository.create(
        new User({
          id: undefined,
          name: user.name,
          email: user.email,
          password: user.password,
        }),
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    return result!! ? true : false;
  }
}
