import {
  Database,
  DataTypes,
  Model,
  MySQLConnector,
} from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { User } from "./user.ts";

const connection = new MySQLConnector({
  host: "...",
  username: "fresh",
  password: "fresh",
  database: "fresh",
});

const db = new Database(connection);

db.link([User]);

db.sync({ drop: true });
