import express from "express";
import db from "../database/database";
const router = express.Router();

router.put("/product/edit-product/:productId", async (req, res, next) => {
  const { productId } = req.params;
  console.log(productId);
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

  try {
    // Use Knex to update the product in the database
    const editProduct = await db("products").where({ id: productId });
    console.log(editProduct);
    await db("products").where({ id: productId }).update({
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
    });

    // Send a success response
    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    // Send an error response
    res.status(500).json({ error: err });
  }
});

export default router;
