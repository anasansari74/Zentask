import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('ZenTask Backend is running! 🚀');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});