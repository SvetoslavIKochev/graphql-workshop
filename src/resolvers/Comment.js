const Comment = {
  author(parent, args, { db }, info) {
    //TODO: Change to DB
    return db.users.find((user) => {
      return user.id === parent.author
    })
  },
  post(parent, args, { db }, info) {
    //TODO: Change to DB
    return db.posts.find((post) => {
      return post.id === parent.post
    })
  }
};

export { Comment as default }
