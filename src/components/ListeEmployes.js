import React, { useEffect, useState } from "react";
import { getEmployes, deleteEmploye } from "../api/employeApi";

const ListeEmployes = () => {
    const [employes, setEmployes] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getEmployes();
            setEmployes(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des employés", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer cet employé ?")) {
            try {
                await deleteEmploye(id);
                fetchData(); // rafraîchir la liste
            } catch (error) {
                alert("Erreur lors de la suppression");
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Liste des Employés</h2>
            <ul>
                {employes.map((emp) => (
                    <li key={emp.idEmploye}>
                        {emp.nom} {emp.prenom} – Né(e) le {emp.dateNaissance}
                        <button onClick={() => handleDelete(emp.idEmploye)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListeEmployes;