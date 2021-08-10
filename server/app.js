const express = require("express");
const graphglHTTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");
const testSchema = require("./schema/types_schema");

const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb+srv://roigaon:roigaon@cluster0.1c1s5.mongodb.net/test", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to the MongoDB successfully!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(
  "/graphql",
  graphglHTTP({
    graphiql: true,
    schema: schema,
  })
);

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});
