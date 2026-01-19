import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";
import { keyRouter } from "./routers/keyRouter";

// FIX: Explicitly load .env from the backend folder
// ---------------------------------------------------------
dotenv.config({ path: path.join(__dirname, "../.env") });
// -----

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ecommerce";

// Debug Log (Check your terminal for this!)
console.log("--- DATABASE CONNECTION DEBUG ---");
console.log("Attempting to connect to:", MONGODB_URI);
console.log("---------------------------------");

mongoose.set("strictQuery", true);

// 4. Connect
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err.message);
  });

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(morgan("dev"));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/seed", seedRouter);
app.use("/api/orders", orderRouter);
app.use("/api/keys", keyRouter);

app.use(
  express.static(path.join(__dirname, "../../ecommerce-frontend-nodejs/dist"))
);

app.get("*", (req: Request, res: Response) =>
  res.sendFile(
    path.join(__dirname, "../../ecommerce-frontend-nodejs/dist/index.html")
  )
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

const PORT: number = parseInt((process.env.PORT || "4000") as string, 10);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
