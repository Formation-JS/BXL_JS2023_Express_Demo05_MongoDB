const mongoose = require('mongoose');

// Définition du schema des données
const commentSchema = mongoose.Schema({
    message: {
        type: String,
        require: true,
        trim: true,
        minLength: 1,
        maxLength: 500
    },
    rating : {
        type: Number,
        require: true,
        default: 0,
    },
    isVisible : {
        type: Boolean,
        require: true,
        default: false,
    }
}, {
    timestamps: true
});

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        minLength: 5
    },
    slug: {
        type: String,
        require: true,
        unique: true
    },
    tag: [String],
    desc: {
        type: String,
        require: false,
        maxLength: 200
    },
    content: {
        type: String,
        require: true,
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