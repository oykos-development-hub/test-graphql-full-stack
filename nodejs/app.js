const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb+srv://oykos:0yk0s.Devel0pmenT@cluster0.nvph6.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
  console.log('Mongo DB connected!');
})

app.use("/api", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => console.log('TestGraphQL listening at port 4000!'))
