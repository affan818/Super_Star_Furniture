import mongoose from "mongoose";

const homePageSchema = mongoose.Schema({
  banner: {
    no_of_customers: {
      type: String,
    },
    no_of_furnitures: {
      type: String,
    },
  },
});

const HomePageModel = mongoose.model("homepage", homePageSchema);

export default HomePageModel;
