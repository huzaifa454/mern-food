const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const { connectDB } = require("./db");
const router = require("./routes");

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
connectDB()
