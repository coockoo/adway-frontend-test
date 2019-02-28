const { MongoClient } = require('mongodb');

let client;
let db;

async function init() {
  client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  db = client.db('adwayFrontendTest');
}

function getClient() {
  return client;
}

function getDb() {
  return db;
}

module.exports.init = init;
module.exports.getClient = getClient;
module.exports.getDb = getDb;
