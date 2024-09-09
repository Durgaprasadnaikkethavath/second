const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/PrepIns_Back_end_Project")
  .then(() => console.log("server connected"))
  .catch(() => console.log("server not connected"));
