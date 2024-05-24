const express = require('express');

const app = express();

app.use(express.json());

// Empty object to store data
const transactionsData = {};

app.post('/transactions', async (req, res) => {
  // Generate random ID for the transaction
  const {date, recipientId, description, amount} = req.body;
  transactionsData[recipientId] = {date, recipientId, description, amount};
  // Server has successfully processed the request, 
  // the new resource has been created and is now ready for interaction
  res.status(201).send(transactionsData[recipientId]);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})

