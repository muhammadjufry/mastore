import express from "express";
import db from "../database/database";
const router = express.Router();

router.delete("/product/delete-product/:productId", async (req, res) => {
  const { productId } = req.params;
  await db("products").where({ id: productId }).del();
  res.sendStatus(204);
});

export default router;
