import { PostsRepository } from "repositories/posts.repository.ts";
import { PostDTO } from "dto/post.dto.ts";
import { Post } from "../../utils/models/post.ts";
import { ExecuteResult } from "https://deno.land/x/mysql@v2.10.2/mod.ts";

export class PostsService {
  private readonly postsRepository: PostsRepository;

  constructor(postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  public async create(postDTO: PostDTO, userId: number): Promise<boolean> {
    const result: ExecuteResult = await this.postsRepository.create(
      new Post({
        image: postDTO.image,
        title: postDTO.title,
        content: postDTO.content,
        userId: userId,
      }),
    );

    return result! ? false : true;
  }
}
