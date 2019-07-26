// TODO: 7. Create resolver for comments field.
//  Retrieve them from db.comments and check "posts" resolver for example

const User = {
    posts(parent, args, { db }, info) {
        return db.posts.filter((post) => {
            return post.author === parent.id
        })
    }
};

export default User
