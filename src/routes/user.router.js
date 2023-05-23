const { getAll, create, getOne, remove, update, verifyCode, login, getLoggedUser } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/')
    .post(create)
    .get(verifyJWT, getAll);

userRouter.route('/verify/:code')
    .get(verifyCode);

userRouter.route('/login')
    .post(login);

userRouter.use(verifyJWT);

userRouter.route('/me')
    .get(verifyJWT, getLoggedUser);

userRouter.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = userRouter;