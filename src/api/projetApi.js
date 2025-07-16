import axios from 'axios';

const API_URL = 'http://localhost:8080/api/projets';

export const getProjets = () => axios.get(API_URL);                      // GET all
export const getProjetById = (id) => axios.get(`${API_URL}/${id}`);     // GET by ID
export const saveProjet = (projet) => axios.post(API_URL, projet);      // POST
export const deleteProjet = (id) => axios.delete(`${API_URL}/${id}`);   // DELETE