export class LoginDTO {
  constructor(init?: Partial<LoginDTO>) {
    Object.assign(this, init);
  }

  email!: string;
  password!: string;
}
