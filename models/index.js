const mongoose = require('mongoose');

function connectDb() {
    
    // Récuperation de l'URI de connection depuis les variables d'env
    const { MONGO_URI } = process.env;
    
    // Initialisation de la connexion vers MongoDB
    mongoose.connect(MONGO_URI, {  })
    .then(() => {
        console.log('Connection to MongoDB is successful !');
    })
    .catch((e) => {
        console.log('Connection to MongoDb on error !');
        console.error(e);
    });
    
    // Récuperation de l'instance de connexion
    return mongoose.connection;
}

module.exports = connectDb;