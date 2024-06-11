import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/recipient/get', (req: Request, res: Response) => {
  console.log("Recipient GET is working")
});

router.post('/api/recipient/post', (req: Request, res: Response) => {
  console.log("Recipient POST is working")
});

export { router }