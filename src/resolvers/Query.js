const Query = {
    // users(parent, args, { db }, info) {
    //     if (!args.query) {
    //         return db.users
    //     }
    //
    //     return db.users.filter((user) => {
    //         return user.name.toLowerCase().includes(args.query.toLowerCase())
    //     })
    // },
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
