import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

type SearchInputProps = {
  val: string;
  onChange: (val: string) => void;
};
const SearchInput: React.FC<SearchInputProps> = ({ val, onChange }) => {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search..."
        value={val}
        onChange={(e) => onChange(e.target.value)}
        className="pr-10 rounded-md border border-gray-300 py-2 pl-4 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
