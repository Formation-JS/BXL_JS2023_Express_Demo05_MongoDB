const articleService = require("../services/article.service");
const { articleValidator } = require("../validators/article.validator");

const articleController = {

    index : async (req, res) => {
        const articles = await articleService.getAll();
        res.render('article/index', { articles });
    },

    detail: async (req, res) => {
        res.render('article/detail');
    },

    addNewArticle: async (req, res) => {

        // Si on n'est pas connecté → Redirection sur la page login
        const userId = req.session.user?.id;  // res.locals.session.user?.id;
        if(!userId) {
            res.redirect('/member/login');
            return;
        }

        // Donnée initial du form
        const data= {};
        // Rendu du formulaire
        res.render('article/form', { data });
    },
    
    addNewArticle_POST: async (req, res) => {

        // Si on n'est pas connecté → Erreur !
        const userId = req.session.user?.id;
        if(!userId) {
            res.sendStatus(400);
            return;
        }

        let data;
        try {
            data = await articleValidator
                            .noUnknown()
                            .validate(req.body, { abortEarly: false });

            console.log('data', data);
        }
        catch(error) {
            
            //! Création d'un objet error sur base de l'erreur de Yup
            const validationError= {};
            for(const fieldError of error.inner) {
                const path = fieldError.path;
                const message = fieldError.errors[0];
                
                if(!validationError.hasOwnProperty(path)) {
                    validationError[path] = message;
                }
            }

            // console.log('error', error.inner.map(e => e.path));
            // console.log('error', error.inner.map(e => e.errors[0]));
            // console.log('final', validationError);
            
            res.render('article/form', {
                error: validationError,
                data: req.body
            });
            return;
        }
        
         // Save article in DB
         await articleService.create({
            title: data.title,
            author: userId,
            desc: data.description,
            slug: data.slug || null,
            tag: data.tag,
            content: data.content
        });

        // Redirection vers la page accueil (ou page detail)
        res.redirect('/');
    },

};

module.exports = articleController;