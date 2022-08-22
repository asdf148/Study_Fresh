import {
  Client,
  ExecuteResult,
} from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import { Comment } from "../models/comment.ts";

export class CommentsRepository {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async find() {
    const result = await this.client.execute(`select * from comments`);
    return result.rows;
  }

  async findOneById(id: number) {
    const result = await this.client.execute(
      `select * from comments where id = ? limit 1`,
      [id],
    );
    return result.rows;
  }

  async create(comment: Comment): Promise<ExecuteResult> {
    return await this.client.execute(
      `INSERT INTO comments(comment, userId, postId) values(?, ?, ?)`,
      [
        comment.comment,
        comment.userId,
        comment.postId,
      ],
    );
  }

  async update(comment: Comment): Promise<ExecuteResult> {
    return await this.client.execute(
      `update comments set (comment) = (?) where id = ?`,
      [comment.comment, comment.id],
    );
  }

  async delete(id: number): Promise<ExecuteResult> {
    return await this.client.execute(`delete from comments where id = ?`, [
      id,
    ]);
  }
}
