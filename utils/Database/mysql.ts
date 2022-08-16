import {
  Database,
  MySQLConnector,
} from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { Relationships } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { User } from "./models/user.ts";
import { Post } from "./models/post.ts";
import { Comment } from "./models/comment.ts";

const connection = new MySQLConnector({
  host: "127.0.0.1",
  username: "fresh",
  password: "fresh",
  database: "fresh",
});

const db = new Database(connection, { debug: true });

Relationships.belongsTo(Post, User);
Relationships.belongsTo(Comment, User);
Relationships.belongsTo(Comment, Post);

db.link([User, Post, Comment]);

db.sync({ drop: true });
