/* eslint-disable prettier/prettier */
import axios from "axios";

import envConfig from "@/src/config/envConfig";
import { TUpdateUser } from "@/src/types/updateUserType";



export const updateUser = async ({ _id,payload }: TUpdateUser) => {
  

    const response = await axios.patch(`${envConfig.baseApi}/users/${_id}`, payload, {
      headers: { "Content-Type": "application/json" },
      withCredentials:true
    });
    
    return response.data;
  };