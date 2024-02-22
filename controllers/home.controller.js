const articleService = require("../services/article.service");

const homeController = {

    index: async (req, res) => {

        // FIXME Demo de l'utilisation. A supprimer !
        const article = {
            title : 'Demo MongoDB + Mongoose',
            slug: 'demo-mongodb-mongoose',
            tag: ['Express', 'MongoDB'],
            desc: 'Ceci est la fin de la démo 😲',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit hic molestias rem a architecto animi eligendi corrupti, dolorem in iure autem quisquam iste doloremque fugiat odio expedita ab commodi.'
        }
        const data = await articleService.create(article)
        console.log(data);

        res.render('home/index');
    }

};

module.exports = homeController;