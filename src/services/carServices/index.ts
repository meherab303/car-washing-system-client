/* eslint-disable prettier/prettier */
import envConfig from "@/src/config/envConfig";
const getCarService = async () => {
  const res = await fetch(`${envConfig.baseApi}/services`);

  return res.json();
};

export default getCarService;
