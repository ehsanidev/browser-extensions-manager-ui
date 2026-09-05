export type Extension = {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  logo: string;
};

export type Filter = "All" | "Active" | "Inactive";
