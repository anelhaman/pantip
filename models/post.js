var mongoose = require('mongoose')

var postsSchema = mongoose.Schema(
  {
    "postname" : {type:String,required:true},
    "imgurl" : [{type:String}],
    "description" : [{type:String}],
    "tag" :[{type:String}],
    "timecreate" : {type:Date,default:Date.now},
    "owner" : {
      "uid"   : {type:String},
      "name" : {type:String}
    },
    "comments" : [{
        "description" : {type:String},
        "imgurl" : [{type:String}],
        "owner" : {
          "uid"   : {type:String},
          "name" : {type:String}
        },
        "timecreate" : {type:Date,default:Date.now}
    }]
})

var Post = module.exports = mongoose.model('Post',postsSchema)
//Get Book
module.exports.getPosts = (callback,limit)=>{
  Post.find(callback).limit(limit)
}

//get book from id
module.exports.getPostById = (id,callback)=>{
  Post.findById(id,callback)
}

//add post
module.exports.newPost = (post,callback)=>{
  Post.create(post,callback)
}