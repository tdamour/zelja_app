const express = require("express");
const cors = require("cors");
const router = require('./routes/index');

const app = express();

// CORS
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(router);

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;