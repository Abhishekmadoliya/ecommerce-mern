const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes  = require("./routes/userdata.js");
const listingsRoutes  = require("./routes/listingroutes.js");

const Products = require("./models/products.js");
// const { default: userController } = require('./controllers/userController');
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

async function Db_connect() {
  await mongoose
    .connect(process.env.DB_url)
    .then(() => console.log("db connected"))
    .catch((e) => console.log("error in db connection"));
}

Db_connect();



app.use("/user", userRoutes);

app.use("/products",listingsRoutes)
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// used in client : ecommerce
// app.use("/listings", listingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
