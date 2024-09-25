import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ansariaffan818:Affan818@ss-furniture.k124u.mongodb.net/SSF"
  )
  .then(() => console.log("database connected"))
  .catch((error) => console.log(`error${error}`));

const userSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, unique: true },
});

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

const UsersModel = mongoose.model("users", userSchema);
const HomePageModel = mongoose.model("homepage", homePageSchema);

app.get("/api/homepage", async (req, res) => {
  const homePageData = await HomePageModel.find({});
  res.json(homePageData);
});

app.get("/api/users", async (req, res) => {
  const userData = await UsersModel.find({});
  res.json(userData);
});

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
