/* eslint-disable prettier/prettier */
import axios from "axios";

import envConfig from "@/src/config/envConfig";
import { TUpdateUser } from "@/src/types/updateUserType";
import { getToken } from "@/src/utils/getToken";

export const updateUser = async ({ _id,payload }: TUpdateUser) => {
  const token=getToken()
    const response = await axios.patch(`${envConfig.baseApi}/users/${_id}`, payload, {
      headers: { Authorization: `${token}`, "Content-Type": "application/json" },
      withCredentials:true
    });
    
    return response.data;
  };


export const getUserData = async () => {
  const token=getToken()
    const { data } = await axios.get(`${envConfig.baseApi}/users/getMe`, { 
      headers: {
        Authorization: `${token}`, 
        "Content-Type": "application/json", 
      },
      withCredentials: true,
    });



    return data.data;
  };