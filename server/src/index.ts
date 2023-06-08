import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import dotenv from "dotenv";
import cors from "cors";
import Redis from "ioredis";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";
dotenv.config({ path: "../.env.local" });
export const redisClient = new Redis();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT} and graphql server successfully run on route /graphql`
  )
);

app.get("/", (req, res) => {
  res.send("Welcome to ma store backend api");
});
