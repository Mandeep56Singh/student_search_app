import { Request, RequestHandler, Response } from "express";
import * as studentService from "../service/student.service";
import { StudentQueryType } from "../types/student.type";

export const searchStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const searchQuery = req.query.searchQuery as string;
    let offset = 5;

    if (req.query.offset) {
      offset = Number(req.query.offset);
    }

    const filteredStudents = await studentService.searchStudent(
      searchQuery,
      offset
    );

    res.status(200).json({
      students: filteredStudents,
    });
    return;
  } catch (err) {
    console.error("Search student failed:", err);
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
};
