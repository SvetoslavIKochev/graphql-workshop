// TODO: 4. Change the resolver to filter posts if title or body includes query
// If no query is available - return all posts
// If query is available - check if title or body contains the query
// Hint: Use Arrays.filter method - for example db.posts.filter(...)

const Query = {
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    // TODO: 2. Define posts resolver and return all posts from `db.posts`
    me() {
        return {
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        }
    },
    post() {
        return {
            id: '092',
            title: 'GraphQL 101',
            body: '',
            published: false
        }
    }
};

export default Query
