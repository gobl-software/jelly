const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const chalk = require("chalk");
const mongoose = require("mongoose");
const graphQlHttp = require("express-graphql");
const schema = require("./graphql/rootSchema");
const resolvers = require("./graphql/resolvers");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(morgan("short"));
app.use(express.json());

app.use(
  "/graphql",
  graphQlHttp({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PASSW}@127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT:${chalk.blue(PORT)}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
