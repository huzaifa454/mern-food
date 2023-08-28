const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://huzaifaaamir454:123@cluster0.mn9k4jn.mongodb.net/mern-food"; // Replace with your MongoDB URI

let cachedDataObj = {
  food_items: [],
  food_category: [],
};

async function fetchData() {
  try {
    const fetched_data = mongoose.connection.db.collection("food-items");
    cachedDataObj.food_items = await fetched_data.find({}).toArray();

    const fetched_category_data = mongoose.connection.db.collection(
      "food-category"
    );
    cachedDataObj.food_category = await fetched_category_data.find({}).toArray();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    await fetchData(); // Wait for fetchData to complete
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = { connectDB, cachedDataObj };
