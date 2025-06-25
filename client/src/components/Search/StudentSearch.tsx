import { useSearchStudent } from "@/hooks/useSearchStudent";
import type { StudentType } from "@/types/student.types";
import { useState } from "react";
import StudentDetailsDailog from "../Detials/StudentDetailsDailog";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

export const StudentSearch = () => {
  const [query, setQuery] = useState<string>("");

  const [isDailogOpen, setDailogOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentType | null>(
    null
  );
  const { data, loading, error } = useSearchStudent(query);

  return (
    <div className="w-full max-w-md">
      <SearchInput val={query} onChange={setQuery}></SearchInput>
      {query.trim() ? (
        <div className="mt-2 max-h-[300px] overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <SearchResult
            loading={loading}
            error={error}
            data={data!}
            queryLength={query.length}
            setOpen={setDailogOpen}
            onSelect={setSelectedStudent}
          ></SearchResult>
        </div>
      ) : null}
      <StudentDetailsDailog
        student={selectedStudent}
        isOpen={isDailogOpen}
        setIsOpen={setDailogOpen}
      ></StudentDetailsDailog>
    </div>
  );
};
