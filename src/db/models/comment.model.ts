import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Post } from "./post.model";

@Table
export class Comment extends Model<Comment>{

  @Column
  text: string;

  @ForeignKey(() => User)
  @Column({ field: 'author_id' })
  authorId: number;

  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => Post)
  @Column({ field: 'post_id' })
  postId: number;

  @BelongsTo(() => Post)
  post: Post;
}
