export class User {
  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}
