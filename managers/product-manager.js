import productModel from "../schemas/producto-schema.js";

class ProductManager{
  constructor(model){
    this.model = model;
  }

 getAll = async () => {

   try {

     return await this.model.find();


   } catch (err) {

      throw err;
   }

}


  getById = async (id) => {

   try{

    return await this.model.findById(id)

   }catch(err){
  
  throw new Error(err)

   }

  }  


  getByCategory = async (category) => {

    return this.model.find({ category })

  }

  
create = async (productData) => {

try {
  return await this.model.create(productData)

} catch(err){

 throw new Error(err)

}

}



insertMany = async(data) => {

try {
  return await this.model.insertMany(data)
}catch(err){

  throw new Error(err)
}


}





update = async (id, productData) => {

try {

    return await this.model.findByIdAndUpdate(id, productData)
} catch(err) {
    throw new Error(err)

}

}


delete = async (id) => {


try {
   return await this.model.findByIdAndDelete(id)
} catch(err) {
    throw new Error(err);
}

}






 decreaseStock = async (id, quantity) => {

const product = await this.model.findById(id);

if(!product) {
throw new Error('Producto no encontrado');
} 

if (product.stock < quantity){
throw new Error('Stock insuficiente');
} 


product.stock -= quantity; 
await product.save();

return product;

}






} 


const productManager = new ProductManager(productModel)

export default productManager;






