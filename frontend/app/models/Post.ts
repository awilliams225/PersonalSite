import mongoose, { Schema } from "mongoose";

const postSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post; 