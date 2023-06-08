const { PORT, mongoose, app } = require("./app");

// mongoose.connect(DATABASE);

const mongooseConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, async () => {
  console.log(`server run at http://127.0.0.1:${PORT}`);
  await mongooseConnect();
});
