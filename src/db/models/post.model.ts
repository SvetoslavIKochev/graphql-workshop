import { BelongsTo, Column, ForeignKey, Model, HasMany, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Comment } from './comment.model'

@Table
export class Post extends Model<Post>{
  @Column
  title: string;

  @Column
  body: string;

  @Column
  published: boolean;

  @ForeignKey(() => User)
  @Column({ field: 'author_id' })
  authorId: number;

  @BelongsTo(() => User)
  author: User;

  @HasMany(() => Comment)
  comments: Comment[]
}
