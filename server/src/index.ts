import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import statusMonitor from "express-status-monitor";
import studentRouter from "./routes/student.route";

dotenv.config();

const { PORT, ORIGIN, NODE_ENV } = process.env;

if (!PORT || !ORIGIN || !NODE_ENV) {
  console.error("Provide all environmeent variables");
  process.exit(1);
}

const app = express();

// Middlewares
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
if (NODE_ENV === "development") {
  app.use(statusMonitor());
}

// routes
app.get("/", (_res: Request, res: Response) => {
  res.send("App is running!");
});
app.use("/search", studentRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
