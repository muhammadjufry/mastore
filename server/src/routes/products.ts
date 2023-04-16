import express from "express";
import db from "../database/database";
const router = express.Router();
router.get("/products", async (req, res) => {
  try {
    const products = await db("products");
    const results = products.sort((productA, productB) => productA.id - productB.id);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});
export default router;
