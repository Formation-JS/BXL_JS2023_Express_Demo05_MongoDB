const mongoose = require('mongoose');

// Définition du schema des données
const commentSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 500
    },
    rating : {
        type: Number,
        required: true,
        default: 0,
    },
    isVisible : {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
});

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    tag: [String],
    desc: {
        type: String,
        required: false,
        maxLength: 200
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
    },
    comments: [{
        type: commentSchema,
        default: []
    }]
}, {
    collection: 'Article',
    timestamps: true
});

// Créer le model de données
const Article = mongoose.model('Article', articleSchema);

// Export du model « Article »
module.exports = Article;