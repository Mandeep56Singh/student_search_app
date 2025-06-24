import type { StudentType } from "@/types/student.types";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type StudentDetailsDailogProps = {
  student: StudentType | null;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const StudentDetailsDailog: React.FC<StudentDetailsDailogProps> = ({
  student,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="p-2 ">
        <DialogHeader>
          <DialogTitle className="text-center">Student Details</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-8 ">
          <div className="flex flex-col gap-2 ">
            <div className="font-medium">Name</div>
            <div className="font-medium">Roll No</div>
            <div className="font-medium">Class</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="">{student?.name}</div>
            <div className="">{student?.rollNumber}</div>
            <div className="">{student?.class}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetailsDailog;
