import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "./post.model";
import { Comment } from './comment.model';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  age: number;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Comment)
  comments: Comment[];
}
