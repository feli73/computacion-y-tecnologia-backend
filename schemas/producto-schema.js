import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const prdocuctoSchema = new Schema({

name:{
    type: String,
    required: true 
},


description:{
    type:String,
    required: true
}, 

price: {
    type: Number,
    required: true
},


stock:{
    type: Number,
    required: true
},

category: {

   type: String,
   required: true

},

thumbnail: {
    type: String,
    required: true
}


})




const productModel = model('products', prdocuctoSchema);
export default productModel;