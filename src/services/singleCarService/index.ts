/* eslint-disable prettier/prettier */
import envConfig from "@/src/config/envConfig";
const getSingleCarService = async (id: string) => {
  const res = await fetch(`${envConfig.baseApi}/services/${id}`);

  return res.json();
};

export default getSingleCarService;
