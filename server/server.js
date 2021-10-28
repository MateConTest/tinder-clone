import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Cards from './dbCards.js';

// App config
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const connection_url = process.env.DB_CONNECTION;

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url);

// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));