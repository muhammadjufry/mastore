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
import scrapeProducts from "./utils/scrapeProduct";
import scrapeProductDetail from "./utils/scrapeProductDetail";
import dotenv from "dotenv";
dotenv.config({ path: "../.env.local" });

import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
scrapeProductDetail(
  "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg7_1?ie=UTF8&adId=A08120221ZEK8TDHNPRBF&qualifier=1681660080&id=3405685643316622&widgetName=sp_btf&url=%2FFORITO-Protector-Compatible-MacBook-Scratch%2Fdp%2FB0BVMFX2QQ%2Fref%3Dsr_1_102_sspa%3Fkeywords%3Dmacbook%2Bpro%2Bm2%2Bmax%26qid%3D1681660080%26sr%3D8-102-spons%26psc%3D1"
).then((res) => {
  console.log(res);
});
// scrapeProducts("https://www.amazon.com/s?k=macbook+pro+m2+max").then((res) =>
//   console.log(res)
// );

app.use(express.json()); // for parsing application/json
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
