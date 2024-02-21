# Demo 05 - Express + MongoDB

## Package
- express: Framework WebServer
- express-session: Middleware pour gérer la session
- express-async-errors: Fix de Express avec la synthaxe « async-await »
- dotenv: Gestion du fichier .env
- ejs: Moteur de vue « EJS »
- morgan: Logger de requete

## Structure
```
controllers [Traitement de requete]
middlewares [Middleware custom]
models      [Définition de la DB - Mongoose]
public      [Fichier accessible]
routes      [Lien entre l'url et le controller]
services    [Traitement metier (Business)]
views       [Génération du visuel]
 .env
 .gitignore
 app.js
 package.json
 readme.md
```