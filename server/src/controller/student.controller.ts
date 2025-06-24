import { Request, Response } from "express";
import * as studentService from "../service/student.service";

export const searchStudent = async (
  req: Request<{}, {}, {}, { searchQuery: string }>,
  res: Response
) => {
  try {
    const query = req.query.searchQuery;
    const filteredStudents = await studentService.searchStudent(query);

    res.status(200).json({
      students: filteredStudents,
    });
  } catch (err) {
    console.error("Search student failed:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
