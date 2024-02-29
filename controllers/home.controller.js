const articleService = require("../services/article.service");

const homeController = {

    index: async (req, res) => {

        console.log(req.session.user?.name ?? 'Non connecté');

        res.render('home/index');
    }

};

module.exports = homeController;