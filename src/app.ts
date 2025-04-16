import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './app/config';

const app: Application = express();
app.use(express.json());
app.use(
    cors({
        origin: config.origin,
        credentials: true,
    })
);

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
