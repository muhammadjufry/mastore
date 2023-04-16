import express from "express";
import db from "../database/database";
const router = express.Router();

router.post("/product/add-product", async (req, res) => {
  try {
    console.log(req.body);
    const {
      image,
      name,
      price,
      description,
      productSeller,
      productSource,
      sold,
      star5,
      star4,
      star3,
      star2,
      star1,
      userRating,
    } = req.body;
    const product = await db("products")
      .insert({
        image,
        name,
        price,
        description,
        "product-seller": productSeller,
        "product-source": productSource,
        sold,
        star5,
        star4,
        star3,
        star2,
        star1,
        "user-rating": userRating,
      })
      .returning("*");
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

export default router;
