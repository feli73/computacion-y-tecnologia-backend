import express from 'express';
import router from './routes/product-router.js';
import "./conexion.js"
import ordersRoutes from "./routes/order-router.js"
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 8080;


const allowedOrigins = process.env.FRONTEND_URL.split(",");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use(
  cors({
    origin: (origin, callback) => {

      if(!origin || allowedOrigins.includes(origin)) {

        callback(null, true);

      } else {

        callback(new Error("No permitido por CORS"))
      }

    }
  })
);




app.use("/productos", router )

app.use("/ordenes", ordersRoutes );



app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))