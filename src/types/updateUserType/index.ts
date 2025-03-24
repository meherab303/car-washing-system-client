export type TUser={
    name: string;
    email: string;
    phone: string;
    password: string;
    role: "admin" | "user";
    address: string;
    isDeleted?: boolean;
    passwordChangeAt?: Date;
  }

  export type TUpdateUser = {
    _id: string;
    payload: Partial<TUser>;
  };