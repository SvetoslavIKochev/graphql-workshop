// TODO: 11. Create resolver for comments field.
//  Retrieve them from db.comments and check "posts" resolver for example

const Post = {
    author(parent, args, { db }, info) {
        return db.users.find((user) => {
            return user.id === parent.authorId
        })
    }
};

export default Post
