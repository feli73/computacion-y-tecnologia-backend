import orderManager from "../managers/order-manager.js";

class OrderController {
    constructor(manager){
        this.manager = manager;
    }


 createOrder = async (req, res) => {


    try {

        console.log("req.body recibido:", req.body);


     const newOrder = await this.manager.createOrder(req.body);
     console.log(newOrder)
     res.status(201).json({ message: "Orden creada", orderId: newOrder._id });
   
    } catch (error) {
       res.status(500).json({ error: "error al crear la orden" })
   

    }


 }

}




const orderController = new OrderController(orderManager)


export default orderController;
