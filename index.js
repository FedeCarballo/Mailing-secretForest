const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const { dbConnection } = require("./db/config");

const app = express();

dbConnection();
app.use(helmet());
app.disable("x-powered-by");
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/email", require("./routes/routes"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require("./routes/index"));


app.listen(process.env.PORT, () => {
  console.log("Servidor conrriendo en puerto " + process.env.PORT);
});
