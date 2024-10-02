import mongoose from "mongoose";
const connectionDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("database connected"))
    .catch((error) => console.log(`error${error}`));
};

export default connectionDB;
