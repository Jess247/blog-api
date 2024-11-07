const request = require('supertest')
const { response } = require('../app')
const app =  require('../app')

describe('Blog post API',() => {
    it('should create new post', async () => {
        const response = await request(app)
        .post('/api/posts')
        .send({title:'Test Post', content:'This is a test post'})

        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe('Test Post')
        expect(response.body.content).toBe('This is a test post')
    })

    it('should retrieve all posts', async () => {
        const response =  await request(app)
        .get('/api/posts')

        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body)).toBe(true); 
    })

    it('should delete the post', async () => {
        // create a post
        const newPost = await request(app)
        .post('/api/posts')
        .send({title:'Delete post', content:'This post is being deleted'})

        // create the id
        const postId = newPost.body.id 

        // delete the post
        const deleteResponse =  await request(app).delete(`/api/posts/${postId}`)
        expect(deleteResponse.statusCode).toBe(204)

        const getResponse = await request(app).get(`/api/posts/${postId}`)
        expect(getResponse.statusCode).toBe(404)
        
    })
})