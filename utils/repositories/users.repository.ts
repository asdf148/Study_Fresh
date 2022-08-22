import {
  Client,
  ExecuteResult,
} from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import { User } from "../models/user.ts";

export class UsersRepository {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async find() {
    const result = await this.client.execute(`select * from users`);
    return result.rows;
  }

  async findOneById(id: number) {
    const result = await this.client.execute(
      `select * from users where id = ? limit 1`,
      [id],
    );
    return result.rows;
  }

  async create(user: User): Promise<ExecuteResult> {
    return await this.client.execute(
      `INSERT INTO users(name, email, password) values(?, ?, ?)`,
      [
        user.name,
        user.email,
        user.password,
      ],
    );
  }

  async update(user: User): Promise<ExecuteResult> {
    return await this.client.execute(
      `update users set (name, email, password) = (?, ?, ?) where id = ?`,
      [user.name, user.email, user.password, user.id],
    );
  }

  async delete(id: number): Promise<ExecuteResult> {
    return await this.client.execute(`delete from users where id = ?`, [
      id,
    ]);
  }
}
