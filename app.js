var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pantip')
var db = mongoose.connection

Post = require('./models/post')

app.get('/',(req,res)=>{
    res.send("use api/posts or api/all")
})
app.get('/api/posts',(req,res)=>{
  Post.getPost((err,posts)=>{
    if(err) throw err
    res.json(posts)
  })
})

app.listen(3000)
console.log("running on port 3000...")