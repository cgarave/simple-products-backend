import express from 'express'
import cors from 'cors'
import connectDatabase from './config/db.connect.js'
import dotenv from 'dotenv'
dotenv.config()
import itemRoutes from "./routes/itemRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());

connectDatabase();

app.use('/', itemRoutes);

export default app;