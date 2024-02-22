const { nanoid } = require("nanoid");
const Article = require("../models/article.model");

const articleService = {

    /**
     * Permet d'ajouter un article
     * @param {{ title: string, slug: string, tag: string[], desc: string?, content: string }} article 
     */
    create: async ({ title, slug, tag, desc, content }) => {

        let slugFinal = slug.toLowerCase().trim().replaceAll(/\s/g, '-');

        // Check si le slug existe
        const articleExists = await Article.findOne({
            slug: slugFinal
        });

        // - Un article trouvé avec le slug -> Modifier le slug
        if(articleExists) {
            const slugSufix = nanoid(5);
            slugFinal = slugFinal + '-' + slugSufix;
            // TODO Idéalement, il faut recheck le slug ;)
        }
        
        // Création de l'article via le model de Mongoose
        const articleCreated = new Article({
            title,
            slug: slugFinal,
            tag,
            desc: desc || content.slice(0, 100),
            content
        })

        // Invocation de la métohde "save" pour enregistrer en DB
        await articleCreated.save();

        return articleCreated;
    },

    /**
     * Permet d'ajouter un commentaire à un article
     * @param {string} slug 
     * @param {string} message 
     */
    addComment: async (slug, message) => {
        // Récuperation de l'article ciblé par le "slug"
        const articleTarget = await Article.findOne({ slug });
        
        // Stop si l'article n'existe pas 
        if(!articleTarget) {
            // Possibilité d'envoyé une erreur à la place (cf : Demo API)
            return false; 
        }

        // Mise à jours de l'article
        const articleUpdated = await Article.updateOne({ slug }, {
            $push: {
                comments : { message }
            }
        });

        return !!articleUpdated; // articleUpdated !== null
    }

};

module.exports = articleService;