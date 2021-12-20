import express from 'express';
import 'reflect-metadata';
import './database';

const app = express();

app.use(express.json());

app.listen(3000);
