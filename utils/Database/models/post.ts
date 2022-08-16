import { DataTypes, Model } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { Comment } from "./comment.ts";
import { User } from "./user.ts";

export class Post extends Model {
  static table = "posts";

  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      length: 100,
    },
    title: DataTypes.STRING,
    content: {
      type: DataTypes.STRING,
      length: 200,
    },
  };

  static user() {
    return this.hasOne(User);
  }

  static comments() {
    return this.hasMany(Comment);
  }
}
