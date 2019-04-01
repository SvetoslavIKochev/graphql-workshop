import { GraphQLServer } from 'graphql-yoga'
import db from "./db/models";
import { User } from "./db/models/user.model";
import { Post } from "./db/models/post.model";
import { Comment } from "./db/models/comment.model";

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
    Query: {
        hello: (_: any, { name }: any) => {
            User.findAll().then((users: User[]) => {
                console.log(users)
            });
            Post.findAll({
                include: [{ model: User }]
            }).then((posts: Post[]) => {
                posts.forEach(post => console.log(post.author))
            });
            Comment.findAll().then((comments: Comment[]) => {
                console.log(comments);
            })
            return `Hello ${name || 'World!'}`;
        },
    },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        db
    }
})
server.start(() => console.log('Server is running on localhost:4000'))
