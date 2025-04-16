import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
