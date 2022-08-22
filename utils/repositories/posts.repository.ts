import {
  Client,
  ExecuteResult,
} from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import { Post } from "../models/post.ts";

export class PostsRepository {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async find() {
    const result = await this.client.execute(`select * from posts`);
    return result.rows;
  }

  async findOneById(id: number) {
    const result = await this.client.execute(
      `select * from posts where id = ? limit 1`,
      [id],
    );
    return result.rows;
  }

  async create(post: Post): Promise<ExecuteResult> {
    return await this.client.execute(
      `INSERT INTO posts(image, title, content, userId) values(?, ?, ?, ?)`,
      [
        post.image,
        post.title,
        post.content,
        post.userId,
      ],
    );
  }

  async update(post: Post): Promise<ExecuteResult> {
    return await this.client.execute(
      `update posts set (image, title, content) = (?, ?, ?) where id = ?`,
      [post.image, post.title, post.content, post.id],
    );
  }

  async delete(id: number): Promise<ExecuteResult> {
    return await this.client.execute(`delete from posts where id = ?`, [
      id,
    ]);
  }
}
