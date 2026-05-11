import api from "./axios";

export const simulateCredit = async (payload) => {
    const { data } = await api.post("/simulations/simulate", payload);
    return data;
};