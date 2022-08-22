export class JoinDTO {
  constructor(init?: Partial<JoinDTO>) {
    Object.assign(this, init);
  }

  name!: string;
  email!: string;
  password!: string;
}
