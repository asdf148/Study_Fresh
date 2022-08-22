export class Comment {
  constructor(init?: Partial<Comment>) {
    Object.assign(this, init);
  }

  id: number | undefined;
  comment: string | undefined;
  userId: number | undefined;
  postId: number | undefined;
}
