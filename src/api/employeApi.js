import axios from "axios";

const API_URL = "http://localhost:8080/api/employes";

export const getEmployes = () => axios.get(API_URL);

export const getEmployeById = (id) => axios.get(`${API_URL}/${id}`);

export const saveEmploye = (employe) => axios.post(API_URL, employe);

export const deleteEmploye = (id) => axios.delete(`${API_URL}/${id}`);