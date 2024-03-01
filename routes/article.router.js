const articleController = require('../controllers/article.controller');


const articleRouter = require('express').Router();

articleRouter.get('/article', articleController.index);
articleRouter.get('/article/new', articleController.addNewArticle);
articleRouter.post('/article/new', articleController.addNewArticle_POST);
articleRouter.get('/article/detail/:slug', articleController.detail);

articleRouter.post('/article/add-comment', articleController.addCommentToArticle_POST)

module.exports = articleRouter;