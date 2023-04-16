import express from "express";
import db from "../database/database";
const router = express.Router();
router.get("/products/popular", async (req, res) => {
  try {
    const popularProducts = await db("products")
      .limit(50)
      .orderBy("sold", "desc");
    res.json(popularProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});
export default router;
