var mongoose = require('mongoose')

var postsSchema = mongoose.Schema(
  {
    "post_name" : {type:String,required:true},
    "img_url" : {type:Array},
    "desc" : {type:Array,required:true},
    "tag" :{type:Array},
    "time_created" : {type:Date,default:Date.now},
    "owner" : {
      "id"   : {type:String},
      "name" : {type:String}
    },
    "comment" : {
        "desc" : {type:String},
        "img_url" : {type:Array},
        "owner" : {
          "id"   : {type:String},
          "name" : {type:String}
        },
        "time_created" : {type:Date,default:Date.now}
    }
}
)

var Post = module.exports = mongoose.model('Post',postsSchema)

module.exports.getPost = (callback,limit)=>{
  Post.find(callback).limit(limit)
}