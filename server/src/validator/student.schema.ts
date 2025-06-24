import { z } from "zod";

export const studentSearchSchema = z.object({
  query: z.object({
    searchQuery: z
      .string()
      .trim()
      .min(3, "Search query must be at least 3 characters")
      .regex(
        /^[a-zA-Z\s]+$/,
        "Search query must contain only letters and spaces"
      ),
  }),
});
