import express from "express";
import bodyParser from "body-parser";
import universityRouter from "./router/universityRouter.js";
import authRouter from "./router/authRouter.js";
import taskRouter from "./router/taskRouter.js";

const api = express();
const port = 3000;

const router = express.Router();

api.use(bodyParser.json());

api.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

api.use("/auth", authRouter);
api.use("/university", universityRouter);
api.use("/task", taskRouter);

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
