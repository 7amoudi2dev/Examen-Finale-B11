import React, { useEffect, useState } from "react";
import { getProjets, deleteProjet } from "../api/projetApi";

function ListeProjets() {
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        fetchProjets();
    }, []);

    const fetchProjets = async () => {
        try {
            const response = await getProjets();
            setProjets(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des projets :", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteProjet(id);
            fetchProjets(); // refresh après suppression
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };

    return (
        <div>
            <h2>Liste des Projets</h2>
            <ul>
                {projets.map((projet) => (
                    <li key={projet.idProjet}>
                        <strong>Code:</strong> {projet.codeProjet} |
                        <strong> Description:</strong> {projet.description}
                        <button onClick={() => handleDelete(projet.idProjet)} style={{ marginLeft: "10px" }}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListeProjets;