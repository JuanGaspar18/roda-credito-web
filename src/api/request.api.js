import api from "./axios";

export const createCreditRequest = async (payload) => {
    const { data } = await api.post("/requests", payload);
    return data;
};

export const getCreditRequests = async () => {
    const { data } = await api.get("/requests");
    return data;
};

export const getCreditRequestById = async (id) => {
    const { data } = await api.get(`/requests/${id}`);
    return data;
};