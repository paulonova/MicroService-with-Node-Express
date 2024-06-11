import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/routes';

const app: any = express();
app.use(express.json());
app.use(router);

const Startup = async () => {
  try {
    await mongoose.connect('mongodb://recipient-mongo-service:27017/recipient');
    console.log('Connected to MongoDB');
    app.listen(3002, () => {
      console.log("Recipient Server is running on port 3002");
    })
  } catch (error) {
    console.log(error);
  }
}

Startup();