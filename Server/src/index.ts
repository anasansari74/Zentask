import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma and Express
const prisma = new PrismaClient();
const app: Express = express();
const port = 3000;

// Middleware (top-level, before routes)
app.use(express.json()); // 👈 Must come before routes

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('ZenTask Backend is running! 🚀');
});

app.get('/test-db', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'DB connection failed' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});