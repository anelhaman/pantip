var compression = require('compression')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(compression())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/pantip', { useMongoClient: true })
var db = mongoose.connection

Post = require('./models/post')

app.get('/',(req,res)=>{
    res.send("use api/posts or api/all")
})
app.get('/api/posts',(req,res)=>{
  Post.getPosts((err,posts)=>{
    if(err) throw err
    res.json(posts)
  })
})
app.get('/api/post/:_id',(req,res)=>{
  Post.getPostById(req.params._id,(err,post)=>{
    if(err) throw err
    res.json(post)
  })
})

app.post('/api/post/',(req,res)=>{
  let post = req.body
  Post.newPost(post,(err,post)=>{
    if(err) throw err
    res.json(post)
  })
})

app.listen(3000)
console.log("running on port 3000...")