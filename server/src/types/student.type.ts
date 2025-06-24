export type StudentType = {
  name: string;
  class: number;
  rollNumber: number;
};

export type StudentQueryType = {
    searchQuery: string,
    offset?: number
}