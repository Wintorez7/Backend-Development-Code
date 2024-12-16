const mongoose = require('mongoose');

async function connectMongoDb(url) {
    // connect wiht mongoDB
  return   mongoose.connect(url)
        
}

module.exports = {
    connectMongoDb,
}