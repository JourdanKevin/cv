import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index.js';
import cors from 'cors';


dotenv.config();




const app = express();
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:8080', // Autoriser uniquement cette origine
    methods: ['GET', 'POST'], // Autoriser uniquement ces méthodes HTTP
    allowedHeaders: ['Content-Type'], // Autoriser uniquement ces en-têtes
  };
  
app.use(cors(corsOptions)); // Utilisation du middleware CORS avec options
app.use(express.json());

app.use('/',router)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});