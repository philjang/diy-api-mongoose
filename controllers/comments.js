const express = require('express')
const router = express.Router()
const db = require('../models')

// PUT /comments -- updates a comment @ :id
router.put('/:id', async (req,res) => {
    try {
        const blog = await db.Blog.findOne({
            'comments._id': req.params.id
        })
        const comment = await blog.comments.id(req.params.id)
        comment.content = req.body.content
        await blog.save()
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(503).json({msg: 'server error'})
    }
    // db.Blog.findOne({
    //     'comments._id': req.params.id
    // })
    //     .then(blog => {
    //         blog.comments.id(req.params.id)
    //     })
})

router.delete('/:id', async (req,res) => {
    try {
        const blog = await db.Blog.findOne({
            'comments._id': req.params.id
        })
        // change the subdoc -- changes in the servers RAM (fast) -- soft state
        blog.comments.id(req.params.id).remove()
        // db actually writing the changes
        await blog.save() 
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(503).json({msg: 'server error'})
    }
})

module.exports = router