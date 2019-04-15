const Query = {
  users(parent, args, { db, db_new }, info) {
    //TODO: Retrieve users from DB
    if (!args.query) {
      db_new.User.findAll().then(users => {
        console.log(users)
      });
      return db.users
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  async posts(parent, args, { db_new }, info) {
    if (!args.query) {
      return await db_new.Post.findAll()
    }

    return await db_new.Post.findByTitleOrBody(args.query)
  },
  async comments(parent, args, { db_new }, info) {
    return await db_new.Comment.findAll()
  },
  me() {
    return {
      id: '123093',
      name: 'Mike',
      email: 'mike@example.com',
      age: 28
    }
  }
};

export { Query as default }
