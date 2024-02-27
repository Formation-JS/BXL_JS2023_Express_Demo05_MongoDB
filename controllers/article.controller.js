const { articleValidator } = require("../validators/article.validator");

const articleController = {

    index : async (req, res) => {
        res.render('article/index');
    },

    detail: async (req, res) => {
        res.render('article/detail');
    },

    addNewArticle: async (req, res) => {
        // Donnée initial du form
        const data= {};
        // Rendu du formulaire
        res.render('article/form', { data });
    },
    
    addNewArticle_POST: async (req, res) => {
        try {
            const data = await articleValidator
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
        
        res.sendStatus(501);
    },

};

module.exports = articleController;