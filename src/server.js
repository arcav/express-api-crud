import express from "express";
import morgan from 'morgan';

//Routers
import userRoutes from "./routes/userRoutes";

//Instanciate express 
const server = express();


//MiddelWares
server.use(morgan('dev'));
server.use(express.json())

//Routes
server.use('/users',userRoutes)

//Port Settings
server.set ('port',process.env.PORT || 5000);

export default server;



 

