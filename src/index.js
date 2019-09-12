import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/query'
import User from './resolvers/user'
import Post from './resolvers/post'
import Comment from './resolvers/comment'

const pubsub = new PubSub()

// TODO: 1. Include "Comment" in the resolvers of the server.

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        User,
        Post
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => {
    console.log('The server is up!')
})
