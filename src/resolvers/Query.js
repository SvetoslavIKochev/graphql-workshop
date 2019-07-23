// TODO: 3. Define resolver for "post" query
// Return object of type Post with fields: id, title, body and published
// Test the query

const Query = {
    me() {
        return {
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        }
    }
};

export default Query
