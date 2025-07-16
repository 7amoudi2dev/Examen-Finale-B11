import React, { useState } from "react";
import { saveEmploye } from "../api/employeApi";

function AjouterEmploye() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await saveEmploye({ nom, prenom, telephone, dateNaissance });
            alert("Employé ajouté avec succès !");
            setNom("");
            setPrenom("");
            setTelephone("");
            setDateNaissance("");
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'employé :", error);
            alert("Erreur lors de l'ajout de l'employé.");
        }
    };

    return (
        <div>
            <h2>Ajouter un employé</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Prénom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Téléphone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Date de naissance"
                    value={dateNaissance}
                    onChange={(e) => setDateNaissance(e.target.value)}
                    required
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AjouterEmploye;