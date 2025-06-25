import { type StudentType } from "@/types/student.types";

type SearchItemProps = Omit<StudentType, "class"> & {
  querylength: number;
};
export const SearchItem: React.FC<SearchItemProps> = ({
  name,
  rollNumber,
  querylength,
}) => {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="font-medium">
        <span className="text-red-400">{name.slice(0, querylength)}</span>
        {name.slice(querylength)}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {rollNumber}
      </div>
    </div>
  );
};
