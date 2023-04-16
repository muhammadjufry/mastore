import express from "express";
import db from "../database/database";
const router = express.Router();

router.get("/product/product-detail/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const productDetail = await db("products").where({ id: productId }).first();
    console.log(productDetail);

    if (!productDetail) {
      return res.status(404).send("Product not found");
    }
    res.send(productDetail);
  } catch (error) {
    console.log(error);
  }
});

export default router;
