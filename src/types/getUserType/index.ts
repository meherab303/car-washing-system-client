export type TGetUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  address: string;
  isDeleted: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};
