export class UserDTO {
  constructor(init?: Partial<UserDTO>) {
    Object.assign(this, init);
  }

  name!: string;
  email!: string;
  password!: string;
}
