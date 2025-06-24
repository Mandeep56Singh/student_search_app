import type { StudentType } from "@/types/student.types";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import studentData from "../../data/students_data.json";
import StudentDetailsDailog from "../Detials/StudentDetailsDailog";

import { Input } from "../ui/input";
import { SearchItem } from "./SearchItem";
export const StudentSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<StudentType[]>([]);
  const [isDailogOpen, setIsDailogOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentType | null>(
    null
  );
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query.length >= 3) {
        const Data = studentData.filter((student) =>
          student.name.toLowerCase().startsWith(query)
        );
        setData(Data);
      } else {
        return setData([]);
      }
    }, 300);

    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10 rounded-md border border-gray-300 py-2 pl-4 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      {query.trim() ? (
        <div className="mt-2 max-h-[300px] overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="py-2">
            {data.length ? (
              data.map((student) => (
                <button
                  key={`${student.rollNumber}`}
                  className="w-full text-start"
                  onClick={() => {
                    setSelectedStudent(student);
                    setIsDailogOpen(true);
                  }}
                >
                  <SearchItem
                    name={student.name}
                    rollNumber={student.rollNumber}
                  />
                </button>
              ))
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400 px-4">
                No Students Found
              </div>
            )}
          </div>
        </div>
      ) : null}
      <StudentDetailsDailog
        student={selectedStudent}
        isOpen={isDailogOpen}
        setIsOpen={setIsDailogOpen}
      ></StudentDetailsDailog>
    </div>
  );
};
