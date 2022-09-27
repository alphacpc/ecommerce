import React from 'react';
import { MessageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="divSigninContainer">
        <div className="divForm">

            <div className="divPanelHeader forget-password">
                <h2>Mot de passe oublié</h2>
            </div>

            <form action="/inscription" method="post">
                <div className="divFormGroup">
                    <label htmlFor="">Votre Adresse email</label>
                    <div>
                        <MessageOutlined/>
                        <input type="email" />
                    </div>
                </div>
                
                <div className="divLine btn-connect">
                    <button>Envoyer</button>
                </div>

                <div className="already divLine">
                    <p>Vous avez déjà un compte ! <Link to="/connexion">se connecter</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword;