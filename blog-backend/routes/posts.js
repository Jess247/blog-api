const express = require('express')
const router = express.Router()
const fs = require('fs-extra') // build in node.js library that adds methods to manipulate files and directories with promises and additional functionality
const path = require('path') // imports path module which provides utilities for working with file and directory paths
const dataPath = path.join(__dirname, '../data/posts.json') // where the posts will be stored

// Helper function to read json file
const getPosts = async () => {
    const data = await fs.readFile(dataPath, 'utf-8')
    return JSON.parse(data)
}

// helper function to save JSON file
const savePosts = async () => {
    await fs.writeFile(dataPath, JSON.stringify(posts,null,2))
}

// Get all posts
router.get('/', async (req, res) => {
    const posts = await getPosts()
    res.json(posts)
})

// create new post
router.post('/', async (req, res) => {
    const posts = await getPosts()
    const newPost = {id: Date.now(), ...req.body}
    posts.push(newPost)
    await savePosts(posts)
    res.status(201).json(newPost)
})

// delete post
router.delete('/:id', async (req, res) => {
    const posts = await getPosts()
    const updatedPosts = posts.filter(post => post.id !== Number(req.params.id))
    await savePosts(updatedPosts)
    res.status(204).end()
})

nodule.exports = router