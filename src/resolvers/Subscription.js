// TODO: 3. Add the post subscription resolver. It will just register new subject with tag 'post'

const Subscription = {
    comment: {
        subscribe(parent, { postId }, { db, pubsub }, info){
            const post = db.posts.find((post) => post.id === postId && post.published)

            if (!post) {
                throw new Error('Post not found')
            }

            return pubsub.asyncIterator(`comment ${postId}`)
        }
    }
}

export default Subscription
