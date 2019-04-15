const Post = {
  async author(parent, args, { db_new }, info) {
    return await db_new.User.findByPk(parent.authorId)
  },
  async comments(parent, args, { db_new }, info) {
    return await db_new.Comment.findByPostId(parent.id)
  }
};

export { Post as default }
