//const express = require ('express'); se configuro  type modulo en el package.json
//forma nueva de hacer import
import  Express  from 'express';
//const cors = require ('cors');
import Cors from 'cors';
import dotenv from 'dotenv';
import { connectServer } from './db/db.js';
import rutasUser from './views/user/routes.js';

dotenv.config({ path: './.env' });

const app = Express();


app.use(Express.json());
app.use(Cors());
app.use(rutasUser);



const main = () => {
  return app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
};

connectServer(main);
