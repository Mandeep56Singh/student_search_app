import { type StudentType } from "@/types/student.types";

type SearchItemProps = Omit<StudentType, "class">;
export const SearchItem: React.FC<SearchItemProps> = ({ name, rollNumber }) => {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {rollNumber}
      </div>
    </div>
  );
};
