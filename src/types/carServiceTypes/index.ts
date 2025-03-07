/* eslint-disable prettier/prettier */
export type TService = {
    _id?:string
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted?: boolean;
  };