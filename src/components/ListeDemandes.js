import React, { useEffect, useState } from 'react';
import { getDemandes, deleteDemande } from '../api/demandeApi';

function ListeDemandes() {
    const [demandes, setDemandes] = useState([]);

    useEffect(() => {
        fetchDemandes();
    }, []);

    const fetchDemandes = async () => {
        try {
            const response = await getDemandes();
            setDemandes(response.data);
        } catch (error) {
            console.error('Erreur lors du chargement des demandes :', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Confirmer la suppression ?')) {
            try {
                await deleteDemande(id);
                fetchDemandes(); // recharge la liste après suppression
            } catch (error) {
                console.error('Erreur lors de la suppression :', error);
            }
        }
    };

    return (
        <div>
            <h2>Liste des demandes</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Code Demande</th>
                    <th>Ville</th>
                    <th>Employé</th>
                    <th>Projet</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {demandes.map((d) => (
                    <tr key={d.idDemande}>
                        <td>{d.codeDemande}</td>
                        <td>{d.ville}</td>
                        <td>{d.employe?.prenom} {d.employe?.nom}</td>
                        <td>{d.projet?.codeProjet} - {d.projet?.description}</td>
                        <td>
                            <button onClick={() => handleDelete(d.idDemande)}>Supprimer</button>
                        </td>
                    </tr>
                ))}
                {demandes.length === 0 && (
                    <tr><td colSpan="5">Aucune demande trouvée.</td></tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ListeDemandes;