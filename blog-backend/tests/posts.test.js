const request = require('supertest')
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
    })
})