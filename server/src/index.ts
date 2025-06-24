import dotenv from "dotenv";
import express, { Request, Response } from "express";
import studentRouter from "./routes/student.route";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());

// routes
app.get("/", (_res: Request, res: Response) => {
  res.send("App is running!");
});
app.use("/search", studentRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
