import apiClient from "../../api/apiClient";

const getOrganizations = async () => {
    const res = await apiClient.get("/organizations/getall");
    return res.data;
};

const productsService = {
    getOrganizations,
};

export default productsService;
