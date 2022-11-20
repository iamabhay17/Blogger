import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import userRoute from "./routes/userRoute.js";
import blogRoute from "./routes/blogRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
env.config();

const PORT = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(db, () => {
      console.log("Database connected");
    });
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`server started on PORT : ${PORT}`);
});
