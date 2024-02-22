const { nanoid } = require("nanoid");
const Article = require("../models/article.model");

const articleService = {

    /**
     * Permet d'ajouter un article
     * @param {{ title: string, slug: string, tag: string[], desc: string?, content: string }} article 
     */
    create: async ({ title, slug, tag, desc, content }) => {

        // Création de l'article via le model de Mongoose
        const articleCreated = new Article({
            title,
            slug,
            tag,
            desc: desc || content.slice(0, 100),
            content
        })

        // Invocation de la métohde "save" pour enregistrer en DB
        await articleCreated.save();

        console.log(articleCreated);
    }

};

module.exports = articleService;