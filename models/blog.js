const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: String
})
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    name: String,
    comments: [commentSchema]
}) 

module.exports = mongoose.model('Blog', blogSchema)