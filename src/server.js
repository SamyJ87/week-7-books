require("dotenv").config();
require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
const bookRouter = require("./books/routes");
app.use(bookRouter);



app.listen(5001, () => 
console.log(`Server is listening on port ${port}`));
