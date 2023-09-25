import axios from "axios";

const API_URL = "http://localhost:3001/organizations/";

const getOrganizations = async () => {
  const res = await axios.get(API_URL + "/getall");
  return res.data;
};

const productsService = {
  getOrganizations,
};

export default productsService;
