var mongoose = require('mongoose')

var postsSchema = mongoose.Schema(
  {
    "postname" : {type:String,required:true},
    "imgurl" : [{type:String}],
    "description" : [{type:String}],
    "tag" :[{type:String}],
    "timecreate" : {type:Date,default:Date.now},
    "timemodified" : {type:Date,default:Date.now},
    "owner" : {
      "uid"   : {type:String},
      "name" : {type:String}
    },
    "comments" : [{
        "description" : {type:String},
        "imgurl" : [{type:String}],
        "timecreate" : {type:Date,default:Date.now},
        "timemodified" : {type:Date,default:Date.now},
        "owner" : {
          "uid"   : {type:String},
          "name" : {type:String}
        }
        
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

//update post
module.exports.updatePost = (id,post,options,callback)=>{
  var query = {_id: id}
  var update = {
    
      postname : post.postname,
      imgurl : post.imgurl,
      description : post.description,
      tag : post.tag,
      timemodiflied : Date.now()
  }
  Post.findOneAndUpdate(query,update,options,callback)
}

//delete post
module.exports.removePost = (id,callback)=>{
  var query = { _id:id}
  Post.remove(query,callback)
}