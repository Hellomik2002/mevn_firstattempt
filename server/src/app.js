const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
//app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

const posts1 = require("./routers/posts");// get, post, put, patch, delete
/*
app.use('/api/posts', posts);
*/const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use('/api/posts', posts1);
