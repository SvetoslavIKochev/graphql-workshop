// TODO: 2. Add the post subscription resolver. It will just register new subject with tag 'CREATED_POST'

const Subscription = {
    user: {
        subscribe(parent, args, { pubsub }) {
            return pubsub.asyncIterator('CREATED_USER')
        }
    }
}

export default Subscription
