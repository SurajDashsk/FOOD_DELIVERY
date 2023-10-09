const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://surajkumard999:gofood123@cluster0.tmcv5zy.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---" + err);
      else {
        console.log("connected to mongo");
        const fetched_Data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_Data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });
          // if (err) console.log(err);
          // else {
          //   global.food_items = data;
          // }
        });
      }
    }
  );
};
