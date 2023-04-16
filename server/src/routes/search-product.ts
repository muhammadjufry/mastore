import express from "express";
import db from "../database/database";
const router = express.Router();
router.get("/product/:query", async (req, res) => {
  const { query } = req.params;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }

  try {
    const results = await db("products")
      .where("name", "like", `%${query}%`)
      .orWhere("description", "like", `%${query}%`);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});
export default router;
