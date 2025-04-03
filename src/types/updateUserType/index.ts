export type TUser={
   _id:string,
    name: string;
    email: string;
    phone: string;
    password: string;
    role: "admin" | "user";
    address: string;
    isDeleted?: boolean;
    passwordChangeAt?: Date;
    createdAt?:string;
    updatedAt:string
  }

  export type TUpdateUser = {
    _id: string;
    payload: Partial<TUser>;
  };