import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav style={{ padding: '1rem', backgroundColor: '#f2f2f2' }}>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li><Link to="/projets">Projets</Link></li>
            <li><Link to="/ajouter-projet">Ajouter Projet</Link></li>

            <li><Link to="/employes">Employés</Link></li>
            <li><Link to="/ajouter-employe">Ajouter Employé</Link></li>

            <li><Link to="/demandes">Demandes</Link></li>
            <li><Link to="/ajouter-demande">Ajouter Demande</Link></li>
        </ul>
    </nav>
);

export default Navigation;