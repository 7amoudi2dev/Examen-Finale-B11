// src/components/AjouterDemande.js
import React, { useEffect, useState } from 'react';
import { saveDemande } from '../api/demandeApi';
import { getEmployes } from '../api/employeApi';
import { getProjets } from '../api/projetApi';

function AjouterDemande() {
    const [codeDemande, setCodeDemande] = useState('');
    const [ville, setVille] = useState('');
    const [employeId, setEmployeId] = useState('');
    const [projetId, setProjetId] = useState('');
    const [employes, setEmployes] = useState([]);
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        getEmployes().then(response => setEmployes(response.data));
        getProjets().then(response => setProjets(response.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDemande = {
            codeDemande,
            ville,
            employe: { idEmploye: parseInt(employeId) },
            projet: { idProjet: parseInt(projetId) },
        };

        try {
            await saveDemande(newDemande);
            alert('Demande ajoutée avec succès');
            setCodeDemande('');
            setVille('');
            setEmployeId('');
            setProjetId('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la demande :', error);
            alert('Erreur lors de l\'ajout de la demande');
        }
    };

    return (
        <div>
            <h2>Ajouter une demande</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Code de la demande:
                    <input value={codeDemande} onChange={(e) => setCodeDemande(e.target.value)} required />
                </label>
                <br />
                <label>
                    Ville:
                    <input value={ville} onChange={(e) => setVille(e.target.value)} required />
                </label>
                <br />
                <label>
                    Employé:
                    <select value={employeId} onChange={(e) => setEmployeId(e.target.value)} required>
                        <option value="">-- Choisir un employé --</option>
                        {employes.map((e) => (
                            <option key={e.idEmploye} value={e.idEmploye}>
                                {e.prenom} {e.nom}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Projet:
                    <select value={projetId} onChange={(e) => setProjetId(e.target.value)} required>
                        <option value="">-- Choisir un projet --</option>
                        {projets.map((p) => (
                            <option key={p.idProjet} value={p.idProjet}>
                                {p.codeProjet} - {p.description}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AjouterDemande;