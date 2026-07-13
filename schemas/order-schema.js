import mongoose from "mongoose";
const { Schema, model } = mongoose

const orderSchema = new Schema({

  nombre: String,
  email: String,
  telefono: Number,
  date: String,
  total: Number,
  items : Array
});



const order = model('orders', orderSchema);

export default order;



