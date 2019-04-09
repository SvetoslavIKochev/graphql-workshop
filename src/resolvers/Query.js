import User from "../db/models/user.model";

const Query = {
  users(parent, args, { db, db_new }, info) {
    if (!args.query) {
      db_new.User.findAll().then(users => {
        console.log(users)
      });
      return db.users
    }
    //
    // return db.users.filter((user) => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase())
    // })
  },
  posts(parent, args, { db, db_new }, info) {
    if (!args.query) {
      db_new.Post.findAll().then(posts => {
        console.log(posts)
      })
      return db.posts
    }

    return db.posts.filter((post) => {

      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

      return isTitleMatch || isBodyMatch
    })
  },
  comments(parent, args, { db, db_new }, info) {
    db_new.Comment.findAll().then(comments => {
      console.log(comments)
    })
    return db.comments
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
