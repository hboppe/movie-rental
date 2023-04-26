import 'express-async-errors'
import 'reflect-metadata'
import express, { Application } from 'express';
import { handleError } from './error';
import moviesRouter from './routes/movies.routes';

const app: Application = express();

app.use(express.json());

app.use('/movies', moviesRouter)

app.use(handleError);

export default app;