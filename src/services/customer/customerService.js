import api from "services/api/api";

const url = "/customers";

export const createCustomer = (payload) => api.post(url, payload);

export const getCustomer = (id) => api.get(`${url}/${id}`);

export async function getAllCustomers() {
  const res = await api.get(url);
  return res.data.customerList || []; // ✅ return array directly
}

export async function searchCustomers(q) {
  const res = await api.get(`${url}/search`, { params: { q } });
  return res.data.customerList || [];
}
