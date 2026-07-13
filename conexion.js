import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

export async function conectando() {
    
   try {
          await mongoose.connect(process.env.URL_MONGO_ATLAS)


   } catch(err){

      throw new Error(`connecting error to Mongo DB ${err}`)
   }


}


conectando()
.then(res => console.log('conectado a Mongo db'))
.catch(err => console.error(err));