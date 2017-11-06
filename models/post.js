const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    createdAt: { type: Date},
    updatedAt: {type: Date},
    title: {type: String, required: true},
    url: { type: String, required: true },
    summary: {type: String, required: true}
});

PostSchema.pre('save', (next) => {
    const now = new Date()
    this.updatedAt = now
    if (!this.createdAt) {
        next()
    }
})

module.exports = mongoose.model('Post', PostSchema); 