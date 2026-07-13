import orderModel from '../schemas/order-schema.js';

class OrderManager{
 constructor(model){
    this.model = model
 }



 createOrder = async (orderData) => {

    try{
       
        const newOrder = new this.model(orderData);
        return await newOrder.save();

    } catch(error) {
        throw new Error('Error creando la orden')
    }
 }




 getOrders = async () => {
    try {

        return await this.model.find()

    } catch(error) {
        throw new Error
    }
 }


 getOrderById = async (id) => {

  try {

    return await this.model.findById(id);

  } catch(error) {


    throw new Error


  }



 }
  




}


const orderManager = new OrderManager(orderModel)

export default orderManager;
