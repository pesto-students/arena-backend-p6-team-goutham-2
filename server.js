import Express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import authHandler from "./src/handler/authHandler.js";
import userHandler from "./src/handler/userHandler.js";

const app = Express();

const appName = "Coolabee Backend";
const port = process.env.PORT || 4000;

const isDevelopment = port.toString().includes("4000");

const mongoUrl = isDevelopment ? 
'mongodb+srv://shubhamarora9878:GgdFtyhEfv4D9lAb@cluster0.wjg7lfk.mongodb.net/testDatabaseCoolabee?retryWrites=true&w=majority' : 
'mongodb+srv://shubhamarora9878:GgdFtyhEfv4D9lAb@cluster0.wjg7lfk.mongodb.net/mainDatabaseCoolabee?retryWrites=true&w=majority'

//mongoose connection
mongoose.connect(mongoUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB connected successfully");
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,Content-Disposition, x-auth-token"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST, PUT, DELETE, OPTIONS, PATCH");
  if (req.method === "OPTIONS") {
    return res.send();
  }
  next();
});

// TODO delete
// app.post("/api/auth", async(req,res) => {
//   console.log(req.body)
//   return ''
// });


app.use("/api/auth", authHandler);
app.use("/api/user", userHandler);

//listen
app.listen(port, () => {
  console.log(`${appName} listening on port ${port}`);
});
