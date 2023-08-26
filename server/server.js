import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
//route imports
// import userRoutes from './routes/userRoutes.js';

// config dotenv
dotenv.config();

// connet to database
connectDB();

const app = express();

// cors
app.use(cors());
app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(express.static(path.join(__dirname, "./client/wmc/dist")))

// app.use('*', function(req,res){
//     res.sendFile(path.join(__dirname,'./client/wmc/dist/index.html'))
// })
    
// routes
// app.use('/api/v1/users',userRoutes);

// server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


