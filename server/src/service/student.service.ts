import { Request, Response } from "express";
import data from "../data/student_data.json";
import { StudentType } from "../types/student.type";

export const searchStudent = async (query: string): Promise<StudentType[]> => {
  const q = query.trim().toLowerCase();
  const students: StudentType[] = data;

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().startsWith(q)
  );
  
  return filteredStudents.slice(0, 5);
};
