import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'


const server = new GraphQLServer({

    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!')
})
