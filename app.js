require('dotenv').config({ override: true });

// Imports
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const session = require('express-session');
const homeRouter = require('./routes/home.router');
const articleRouter = require('./routes/article.router');

// Récuperation des variables d'env
const { NODE_ENV, PORT, SESSION_SECRET } = process.env;

// Initilisation du Web Server
const app = express();

// - Config du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views'); 

// - Middlewares
//*  Logger
app.use(morgan('tiny'));
//*  Fichier public
app.use(express.static('./public'));
//*  Données des formulaires
app.use(express.urlencoded({ extended: true }));
//*  Session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}));

// - Routing
app.use(homeRouter);
app.use(articleRouter);

// Connexion à la base de donnée MongoDB
const connectDb = require('./models');
connectDb();

// Démarrage du Web serveur
app.listen(PORT, () => {
    console.log(`Web server is running on ${PORT} (${NODE_ENV})`);
});