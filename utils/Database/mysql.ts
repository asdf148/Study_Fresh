import { Client } from "https://deno.land/x/mysql@v2.10.2/mod.ts";

export const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "fresh",
  password: "fresh",
  db: "fresh",
});

async function createTable() {
  await client.execute("DROP TABLE IF EXISTS comments");
  await client.execute("DROP TABLE IF EXISTS posts");
  await client.execute("DROP TABLE IF EXISTS users");
  await client.execute(`
    CREATE TABLE users (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(45) NOT NULL,
      email varchar(45) NOT NULL,
      password varchar(60) NOT NULL,
      created_at timestamp not null default current_timestamp,
      PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3
  `);
  await client.execute(`
    CREATE TABLE posts (
      id int NOT NULL AUTO_INCREMENT,
      image varchar(100) DEFAULT NULL,
      title varchar(45) NOT NULL,
      content varchar(200) DEFAULT NULL,
      userId int NOT NULL,
      created_at timestamp not null default current_timestamp,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3
  `);
  await client.execute(`
    CREATE TABLE comments (
      id int NOT NULL AUTO_INCREMENT,
      comment varchar(100) DEFAULT NULL,
      userId int NOT NULL,
      postId int NOT NULL,
      created_at timestamp not null default current_timestamp,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3
  `);
}

async function addConstraints() {
  await client.execute(`
    ALTER TABLE posts
    ADD FOREIGN KEY (userId) REFERENCES users(id);
  `);
  await client.execute(`
    ALTER TABLE comments
    ADD FOREIGN KEY (userId) REFERENCES users(id);
  `);
  await client.execute(`
    ALTER TABLE comments
    ADD FOREIGN KEY (postId) REFERENCES posts(id);
  `);
}

export async function DBAsync() {
  await createTable();
  await addConstraints();
}
