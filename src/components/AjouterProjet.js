import React, { useState } from "react";
import { saveProjet } from "../api/projetApi";

function AjouterProjet() {
    const [codeProjet, setCodeProjet] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await saveProjet({ codeProjet, description });
            alert("Projet ajouté !");
            setCodeProjet("");
            setDescription("");
        } catch (error) {
            console.error("Erreur lors de l'ajout du projet :", error);
            alert("Erreur lors de l'ajout du projet.");
        }
    };

    return (
        <div>
            <h2>Ajouter un Projet</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Code du projet:</label>
                    <input
                        type="text"
                        value={codeProjet}
                        onChange={(e) => setCodeProjet(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AjouterProjet;