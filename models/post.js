const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    title: String,
    subReddit: String,
    summary: String
});

PostSchema.pre('save', (next) => {
    const now = new Date()
    this.updatedAt = now
    if (!this.createdAt) {
        this.createdAt = now
    }
    next()
})

module.exports = mongoose.model('Post', PostSchema);
