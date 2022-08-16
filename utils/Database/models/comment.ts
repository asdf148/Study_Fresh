import { DataTypes, Model } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { Post } from "./post.ts";
import { User } from "./user.ts";

export class Comment extends Model {
  static table = "comment";

  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      length: 100,
    },
  };

  static user() {
    return this.hasOne(User);
  }

  static post() {
    return this.hasOne(Post);
  }
}
