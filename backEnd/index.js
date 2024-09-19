import express from "express";
import mongoose, { Types } from "mongoose";
const app = express();
const port = 5000;

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

const UsersModel = mongoose.model("users", userSchema);

app.get("/api/users", async (req, res) => {
  const userData = await UsersModel.find({});
  res.json(userData);
});

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
