/* eslint-disable prettier/prettier */
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

/* eslint-disable prettier/prettier */
export const getCurrentUser = async () => {
    const accessToken = cookies().get("accessToken")?.value;
  
    let decodedToken = null;
  
    if (accessToken) {
      decodedToken = await jwtDecode(accessToken);
      
      return {
        _id: decodedToken._id,
        name: decodedToken.name,
        email: decodedToken.email,
        mobileNumber: decodedToken.mobileNumber,
        role: decodedToken.role,
        // status: decodedToken.status,
        // profilePhoto: decodedToken.profilePhoto,
      };
    }
  
    return decodedToken;
  };





