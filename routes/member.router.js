const memberController = require('../controllers/member.controller');


const memberRouter = require('express').Router();

memberRouter.get('/member/login', memberController.login);
memberRouter.post('/member/login', memberController.login_POST);

memberRouter.get('/member/register', memberController.register);
memberRouter.post('/member/register', memberController.register_POST);

module.exports = memberRouter;