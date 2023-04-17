import express from "express";
import Products from "./routes/products";
import SearchProduct from "./routes/search-product";
import MostPopularProduct from "./routes/most-popular-product";
import AddProduct from "./routes/add-product";
import DeleteProduct from "./routes/delete-product";
import DeleteUser from "./routes/delete-user";
import EditProduct from "./routes/edit-product";
import ProductDetail from "./routes/product-detail";
import UserDetail from "./routes/user-detail";
import UserLogin from "./routes/user-login";
import UserRegister from "./routes/user-register";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "../.env.local" });
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", Products);
app.use("/api/v1", SearchProduct);
app.use("/api/v1", MostPopularProduct);
app.use("/api/v1", AddProduct);
app.use("/api/v1", DeleteProduct);
app.use("/api/v1", DeleteUser);
app.use("/api/v1", EditProduct);
app.use("/api/v1", ProductDetail);
app.use("/api/v1", UserDetail);
app.use("/api/v1", UserLogin);
app.use("/api/v1", UserRegister);

app.get("/api/v1/product/add-product-get", async (req, res) => {
  res.sendStatus(200).send("ok");
});

app.listen(port, () => {
  console.log(`Successfuly running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to ma store backend api");
});
