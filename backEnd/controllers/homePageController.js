import HomePageModel from "../models/homepage-Schema.js";

const homePageController = async (req, res) => {
  const homePageData = await HomePageModel.find({});
  res.json(homePageData);
};

export default homePageController;
