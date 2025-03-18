/* eslint-disable prettier/prettier */
"use server"

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const getCurrentUser = async () => {
    const cookieStore=await cookies()
    const accessToken = cookieStore.get("accessToken")?.value;
  
    let decodedToken = null;
    
  
    if (accessToken) {
      decodedToken = await jwtDecode(accessToken);

      return decodedToken
    }
  
    return decodedToken;
  };





