import React from 'react';

const Adresse = () => {
  return (
    <div className="divLocationContainer">

        <p>Détail Adresse - Domicile - Facturation</p>
              
        <div className="divLocation divLess">
            <span>Ville</span>
            <p>Luka</p>
        </div>

        <div className="divLocation divLess">
            <span>Région</span>
            <p>Luka</p>
        </div>

        <div className="divLocation divLess">
            <span>Code Postal</span>
            <p>Luka</p>
        </div>

        <div className="divLocation">
            <span>Rue</span>
            <p>Luka</p>
        </div>

        <div className="divLocation">
            <span>Avenue</span>
            <p>Luka</p>
        </div>

        <div className="divLocation">
            <span>Appartement</span>
            <p>Luka</p>
        </div>

        <div className="divLocation divFull">
            <span>Adresse complet</span>
            <p>Luka</p>
        </div>
              
    </div>
  )
}

export default Adresse;