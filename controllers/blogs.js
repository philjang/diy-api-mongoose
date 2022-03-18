const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blogs -- READ all blogs
router.get('/', (req,res) => {
    db.Blog.find({})
        .then(blogs => res.json(blogs))
        .catch(console.log)
})
// POST /blogs -- CREATE a blog
router.post('/', (req,res) => {
    // create blog with req.body
    db.Blog.create(req.body)
        .then(newBlog => {
            // send the newly created blog back/redirect
            res.json(newBlog)
        })
        // handle an error 
        .catch(console.log)
    // res.json({msg: 'create a blog'}) only one res per 
})
// GET /blogs/:id -- READ a single blog @ :id
router.get('/:id', (req,res) => {
    db.Blog.findById(req.params.id)
        .then(foundBlog => {
            if(!foundBlog) return res.status(404).json({msg: 'blog not found'})
            res.json(foundBlog)
        })
        .catch(err => {
            console.log(err)
            if (err.name === 'CastError') return res.status(404).json({msg: 'invalid id format'})
            res.status(503).json({msg: 'server error'})
        })
})
// PUT /blogs/:id -- UPDATE a single blog @ :id
router.put('/:id', (req,res) => {
    db.Blog.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(updatedBlog => res.json(updatedBlog))
        .catch(err => {
            console.log(err)
            res.status(503).json({msg: 'server error'})
        })
})
// DELETE /blogs/:id -- DESTROY a blog @ :id
router.delete('/:id', (req,res) => {
    db.Blog.findByIdAndDelete(req.params.id)
        // express won't send a json if you status a 204 (no content)
        .then(() => res.status(204)/* .json({msg: 'blog deleted'}) */)
        .catch(err => {
            console.log(err)
            res.status(503).json({msg: 'server error'})
        })
})
// CREATE
router.post('/:id/comment', async (req,res) => {
    try {
        // find the blog at :id
        const blog = await db.Blog.findById(req.params.id)
        // push it to the blog's comment array
        blog.comments.push(req.body)
        // save th blog
        await blog.save()
        // send the blog back in the response
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(503).json({msg: 'server error'})
    }
})

module.exports = router