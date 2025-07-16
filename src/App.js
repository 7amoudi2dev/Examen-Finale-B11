import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AjouterProjet from "./components/AjouterProjet";
import ListeProjets from "./components/ListeProjets";
import AjouterEmploye from "./components/AjouterEmploye";
import ListeEmployes from "./components/ListeEmployes";
import AjouterDemande from "./components/AjouterDemande";
import ListeDemandes from "./components/ListeDemandes";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<ListeProjets />} />
                <Route path="/projets" element={<ListeProjets />} />
                <Route path="/ajouter-projet" element={<AjouterProjet />} />
                <Route path="/ajouter-employe" element={<AjouterEmploye />} />
                <Route path="/employes" element={<ListeEmployes />} />
                <Route path="/ajouter-demande" element={<AjouterDemande />} />
                <Route path="/demandes" element={<ListeDemandes />} />
            </Routes>
        </Router>
    );
};

export default App;