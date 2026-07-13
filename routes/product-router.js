import Router from "express"
import  productController  from "../controllers/product-controller.js"

const router = Router();


router.get("/category/:category", productController.getByCategory);

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.post("/many", productController.insertMany)
router.put("/:id", productController.update);
router.delete("/:id" , productController.delete)
router.post("/:id/buy", productController.decreaseStock)




export default router;