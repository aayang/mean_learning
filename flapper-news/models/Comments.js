/**
 * Created by aaron.yang on 8/10/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new Schema({
    body: String,
    author: String,
    upvotes: {type: Number, default: 0},
    post:{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

mongoose.model('Comment', CommentSchema);