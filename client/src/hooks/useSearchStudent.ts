import type { StudentType } from "@/types/student.types";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

const api_url = import.meta.env.VITE_API_URL;
type StudentsResponse = {
  students: StudentType[];
};
export const useSearchStudent = (query: string) => {
  const [studentsData, setStudentsData] = useState<StudentType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query.length < 3) {
      setStudentsData([]);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await axios.get<StudentsResponse>(
          `${api_url}/search`,
          {
            params: {
              searchQuery: query,
            },
            signal,
          }
        );

        setStudentsData(data.students);
      } catch (err) {
        if (isAxiosError(err)) {
          const msg = err.response?.data?.errors?.[0]?.message ?? err.message;
          setError(msg);
        } else {
          setError("Unexpected Error");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [query]);

  return { data: studentsData, loading, error };
};
