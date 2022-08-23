import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";
import { UserDTO } from "dto/user.dto.ts";
import { UsersRepository } from "repositories/users.repository.ts";
import { ExecuteResult } from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import { User } from "../../utils/models/user.ts";
import { LoginDTO } from "../../utils/dto/login.dto.ts";
import * as djwt from "https://deno.land/x/djwt@v2.7/mod.ts";

export class AuthService {
  private readonly usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async join(user: UserDTO): Promise<boolean> {
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
    } catch (error) {
      console.log(`%c${error}`, "color:red;");
    }

    return result! ? false : true;
  }

  public async login(loginDTO: LoginDTO): Promise<string | null> {
    const result: any[] | undefined = await this.usersRepository.findOneByEmail(
      loginDTO.email,
    );
    if (typeof result == "undefined" || result?.length == 0) {
      return null;
    }

    const key: CryptoKey = await crypto.subtle.generateKey(
      { name: "HMAC", hash: "SHA-512" },
      true,
      ["sign", "verify"],
    );

    const token: string = await djwt.create({ alg: "HS512", typ: "JWT" }, {
      name: result[0].name,
      email: result[0].email,
    }, key);

    return token;
  }

  public async modify(id: number, user: UserDTO): Promise<boolean> {
    const rows: any[] | undefined = await this.usersRepository.findOneById(id);
    if (typeof rows == "undefined" || rows?.length == 0) {
      return false;
    }

    const result: ExecuteResult = await this.usersRepository.update(
      new User({
        id: id,
        name: user.name,
        email: user.email,
      }),
    );

    return result! ? false : true;
  }

  public async delete(id: number): Promise<boolean> {
    const result: ExecuteResult = await this.usersRepository.delete(id);

    return result! ? false : true;
  }
}
