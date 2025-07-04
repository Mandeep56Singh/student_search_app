import fs from "fs";
import path from "path";
import { chain } from "stream-chain";
import streamJson from "stream-json";
import streamArrayMod from "stream-json/streamers/StreamArray.js";
import { fileURLToPath } from "url";
import { StudentType } from "../types/student.type.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const parser = streamJson.parser;
const streamArray = streamArrayMod.streamArray;
export const searchStudent = async (
  query: string,
  offset: number
): Promise<StudentType[]> => {
  return new Promise((resolve, reject) => {
    const matches: StudentType[] = [];

    const filePath = path.resolve(__dirname, "../data/student_data.json");

    const pipeline = chain([
      fs.createReadStream(filePath),
      parser(),
      streamArray(),
    ]);

    pipeline.on("data", (data) => {
      const student: StudentType = data.value;

      if (student.name.toLowerCase().startsWith(query.toLowerCase())) {
        matches.push(student);

        // Stop when we have enough matches
        if (matches.length >= offset) {
          pipeline.destroy();
          resolve(matches);
        }
      }
    });

    pipeline.on("end", () => {
      resolve(matches);
    });

    pipeline.on("error", (err) => {
      reject(err);
    });
  });
};
