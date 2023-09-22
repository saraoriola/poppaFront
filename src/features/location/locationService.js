import axios from "axios";

const API_URL = "http://localhost:3001";

const createLocation = async (formData) => {
  const res = await axios.post(API_URL + "/locations/create", formData); 
  return res.data;
};


const locationService = {
  createLocation,
};

export default locationService;