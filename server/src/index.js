const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./mongo');

const app = express();
app.use(bodyParser.json());

app.get('/job', async (req, res) => {
  const db = mongo.getDb();
  const jobs = db.collection('jobs');

  // TODO: This is just a test data for example purposes
  await jobs.insertOne({
    logo: 'TELE2',
    title: 'Front-End developer – Comviq Join squad',
    company: 'Tele 2',
    location: 'Sweeden',
    type: 'Full-time',
    description:
      'As a Front-End developer within the Comviq Join squad you will be responsible for building great customer experiences. The squad support new cusomers...',
    benefits: ['We invest in our people', 'Next gen telecom company', 'State of the art IT stack'],
  });

  const job = await jobs.findOne({});

  res.status(200).json(job);
});

app.post('/applications', async (req, res) => {
  const db = mongo.getDb();
  const applications = db.collection('applications');

  await applications.insertOne(req.body);
  res.status(201).end();
});

async function main() {
  await mongo.init();
  app.listen(5000, () => {
    console.log('app has started');
  });
}

main();
