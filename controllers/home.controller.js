const articleService = require("../services/article.service");

const homeController = {

    index: async (req, res) => {

        res.render('home/index');
    }

};

module.exports = homeController;