import { Router } from "express";
import * as studentController from "../controller/student.controller";
import { validateRequest } from "../middleware/requestValidation.middleware";
import { studentSearchSchema } from "../validator/student.schema";
const studentRouter = Router();

studentRouter.get(
  "/",
  validateRequest(studentSearchSchema),
  studentController.searchStudent
);

export default studentRouter;
