/* eslint-disable prettier/prettier */

import envConfig from "@/src/config/envConfig";

const createUser = async (userData) => {
  const response = await fetch(`${envConfig.baseApi}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return await response.json();
};

export default createUser;
