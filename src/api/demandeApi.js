import axios from 'axios';

const API_URL = 'http://localhost:8080/api/demandes';

export const getDemandes = () => axios.get(API_URL);                      // GET all
export const getDemandeById = (id) => axios.get(`${API_URL}/${id}`);     // GET by ID
export const saveDemande = (demande) => axios.post(API_URL, demande);    // POST
export const deleteDemande = (id) => axios.delete(`${API_URL}/${id}`);   // DELETE