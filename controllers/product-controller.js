import  productManager  from "../managers/product-manager.js";

class ProductController {
    constructor(manager){
        this.manager = manager;
    }

  getAll = async (req, res) => {

    try {

      const products = await this.manager.getAll()
      res.json(products)

    }catch(err){

        res.status(500).json({ error: "Error al obtener productos" })

    }

  }



  getById = async (req, res) => {


    try {

    const { id } = req.params;    

    const product = await this.manager.getById(id)
    if(!product) return res.status(404).json({ message: "product not found" })
    res.json(product)

    } catch(err){
      res.status(500).json({ error: "el producto no existe" })
    }

  }


 getByCategory = async (req, res) => {

 try {
  const {category} = req.params;
  const products = await this.manager.getByCategory( category );
  res.json(products);
 }catch(err) {
  res.status(500).json({ error: "Error al obtener productos por categoría" })
 }

 }



  create = async (req, res) => {

    try {
     const productData = req.body;
     const newProduct = await this.manager.create(productData);
     res.status(201).json(newProduct)

    }catch(err) {
      console.error("Error en create:", err.message);
      res.status(500).json({ error: "debe llenar los campos correctamente" })
    }

  }



  insertMany = async (req, res) => {

   
    try{
     
    const products = await this.manager.insertMany(req.body);
    res.json(products)

   }catch(err){
    console.error("Error al insertar productos:", err);
    res.status(500).json({ error: "error al insertar los productos" })

   }


  }



update = async (req, res) => {

 try{
  const { id } = req.params;
  const productData = req.body;
  const updateProduct = await this.manager.update(id, productData );
  if(!updateProduct) return res.status(404).json({ message:"product not found" });
  res.json(updateProduct)

 } catch(err) {
   res.status(400).json({ error: "debe llenar los campos correctamente" })

 }

}



delete = async (req, res) => {

 try{
  const {id} = req.params;
  const deleteProduct = await this.manager.delete(id);
  if(!deleteProduct) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "product deleted", product: deleteProduct })
 } catch(error){
   console.error("product not found")
  res.status(400).json({ error: "product not found" })

 }

}







decreaseStock = async (req, res) => {

try {

    const {id} = req.params;
    const {quantity} = req.body;

  console.log("Disminuyendo stock de:", id, "cantidad:", quantity)

    const updateProduct = await this.manager.decreaseStock(id, quantity);
    return res.json(updateProduct)
    

} catch(err) {
 console.error('Error en el stock de este producto')
 res.status(400).json({ error: 'Error en el stock de este producto' })

}


}






}


const productController = new ProductController(productManager)

export default productController;

