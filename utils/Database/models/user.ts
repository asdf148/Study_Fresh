import { DataTypes, Model } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { Comment } from "./comment.ts";
import { Post } from "./post.ts";

export class User extends Model {
  static table = "users";

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
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      length: 50,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 60,
    },
  };

  static posts() {
    return this.hasMany(Post);
  }

  static comments() {
    return this.hasMany(Comment);
  }
}
