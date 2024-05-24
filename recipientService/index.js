const express = require('express');
const app = express();

app.use(express.json());

const recipientIds = {};

app.post('/recipient/:id', async (req, res) => {
  const {category} = req.body;
  const recipientId = req.params.id;
  if(!recipientId || !category) {
    return res.status(400).send({message: 'recipientId and category are required'});
  }
  recipientIds[recipientId] = category;
  res.status(201).send({[recipientId]: category});
});

app.get('/recipient/:id', async (req, res) => {
  const recipientId = req.params.id;
  const category = recipientIds[recipientId];
  if(!category) {
    return res.status(404).send({message: 'Recipient not found'});
  }
  res.send({[recipientId]: category});
});

app.listen(3002, () => {
  console.log('recipientIds Server is running on port 3002');
})