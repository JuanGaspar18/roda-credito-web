import api from "../api/axios";

export const simulateCredit = async (payload) => {
    const response = await api.post("/simulation/simulate", payload);

    return response.data;
};