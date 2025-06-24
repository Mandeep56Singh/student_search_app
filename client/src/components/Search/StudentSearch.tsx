import type { StudentType } from "@/types/student.types";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import studentData from "../../data/students_data.json";
import { Input } from "../ui/input";
import { SearchItem } from "./SearchItem";
export const StudentSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<StudentType[]>([]);

  useEffect(() => {
    const Data = studentData.filter((student) =>
      student.name.toLowerCase().startsWith(query)
    );

    setData(Data);
  }, [query, data]);

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
                <SearchItem
                  key={`${student.rollNumber}`}
                  name={student.name}
                  rollNumber={student.rollNumber}
                />
              ))
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400 px-4">
                No Students Found
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
