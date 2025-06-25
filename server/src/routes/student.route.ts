import { Router } from "express";
import * as studentController from "../controller/student.controller.js";
import { validateRequest } from "../middleware/requestValidation.middleware.js";
import { studentSearchSchema } from "../validator/student.schema.js";
const studentRouter = Router();

studentRouter.get(
  "/",
  validateRequest(studentSearchSchema),
  studentController.searchStudent
);

export default studentRouter;
