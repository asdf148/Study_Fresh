export class Post {
  constructor(init?: Partial<Post>) {
    Object.assign(this, init);
  }

  id: number | undefined;
  image: string | undefined;
  title: string | undefined;
  content: string | undefined;
  userId: number | undefined;
}
