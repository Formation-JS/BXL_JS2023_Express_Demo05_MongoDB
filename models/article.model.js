const mongoose = require('mongoose');

// Définition du schema des données
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
    }
}, {
    collection: 'Article',
    timestamps: true
});

// Créer le model de données
const Article = mongoose.model('Article', articleSchema);

// Export du model « Article »
module.exports = Article;