export class PostDTO {
  constructor(init?: Partial<PostDTO>) {
    Object.assign(this, init);
  }

  image!: string;
  title!: string;
  content!: string;
}
