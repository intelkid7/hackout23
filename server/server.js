import express from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js";
import cors from 'cors';


// config dotenv
dotenv.config();

// connet to database
connectDB();

//rest object
const app = express();

// cors
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(express.static(path.join(__dirname, "./client/wmc/dist")))

// app.use('*', function(req,res){
//     res.sendFile(path.join(__dirname,'./client/wmc/dist/index.html'))
// })
    
// routes
app.use('/api/v1/auth', authRoutes);

// server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));