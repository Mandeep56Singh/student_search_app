import type { StudentType } from "@/types/student.types";
import React from "react";
import { SearchItem } from "./SearchItem";

type SearchResultsProps = {
  data: StudentType[];
  loading: boolean;
  error: string | null;
  onSelect: (student: StudentType) => void;
  queryLength: number;
  setOpen: (val: boolean) => void;
};
const SearchResult: React.FC<SearchResultsProps> = ({
  data,
  loading,
  error,
  onSelect,
  queryLength,
  setOpen,
}) => {
  if (loading) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400 px-4 py-2">
        loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-sm text-red-400 px-4 py-2">{error}</div>;
  }

  if (queryLength < 3) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400 px-4 py-2 ">
        Type more than 2 chars to search
      </div>
    );
  }

  if (!data.length) {
    <div className="text-sm text-gray-500 dark:text-gray-400 px-4 py-2">
      No Students Found
    </div>;
  }

  return (
    <div className="py-2">
      {data.map((student) => (
        <button
          key={`${student.rollNumber}`}
          className="w-full text-start"
          onClick={() => {
            onSelect(student);
            setOpen(true);
          }}
        >
          <SearchItem
            querylength={queryLength}
            name={student.name}
            rollNumber={student.rollNumber}
          />
        </button>
      ))}
    </div>
  );
};

export default SearchResult;
