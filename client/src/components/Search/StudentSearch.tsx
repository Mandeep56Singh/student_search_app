import { useSearchStudent } from "@/hooks/useSearchStudent";
import type { StudentType } from "@/types/student.types";
import { useState } from "react";
import StudentDetailsDailog from "../Detials/StudentDetailsDailog";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import { useDebounce } from "@/hooks/useDebounce";

export const StudentSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [isDailogOpen, setDailogOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentType | null>(
    null
  );

  const debouncedQuery = useDebounce(query, 300)
  const { data, loading, error } = useSearchStudent(debouncedQuery);

  return (
    <div className="w-full max-w-md">
      <SearchInput val={query} onChange={setQuery}></SearchInput>
      {debouncedQuery.trim() ? (
        <div className="mt-2 max-h-[300px] overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <SearchResult
            loading={loading}
            error={error}
            data={data!}
            queryLength={debouncedQuery.length}
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
