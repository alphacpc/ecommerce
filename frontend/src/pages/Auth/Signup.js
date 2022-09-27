import React from 'react';
import { UserOutlined, LockOutlined, UsergroupAddOutlined, MessageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import '../../assets/styles/Signup.css'


const Signup = () => {
  return (
    <div className="divSignupContainer">

        <div className="divBackground"></div>

        <div className="divForm">

            <div className="divPanelHeader">
                <h2>Inscription</h2>
                <span></span>
            </div>

            <form action="/inscription" method="post">
                <div className="divFormGroup">
                    <label htmlFor="">Votre Prénom</label>
                    <div>
                        <UserOutlined/>
                        <input type="text" />
                    </div>
                </div>
                <div className="divFormGroup">
                    <label htmlFor="">Votre Nom de famille</label>
                    <div>
                        <UsergroupAddOutlined/>
                        <input type="text" />
                    </div>
                </div>
                <div className="divFormGroup">
                    <label htmlFor="">Votre nom d'utilisateur</label>
                    <div>
                        <UserOutlined/>
                        <input type="text" />
                    </div>
                </div>
                <div className="divFormGroup">
                    <label htmlFor="">Votre Adresse email</label>
                    <div>
                        <MessageOutlined/>
                        <input type="email" />
                    </div>
                </div>
                <div className="divFormGroup">
                    <label htmlFor="">Votre Mot de passe</label>
                    <div>
                        <LockOutlined/>
                        <input type="password" />
                    </div>
                </div>
                <div className="divFormGroup">
                    <label htmlFor="">Confirmer le Mot de passe</label>
                    <div>
                        <LockOutlined/>
                        <input type="password" />
                    </div>
                </div>

                <div className="divLine btn-connect">
                    <button>Enregistrer</button>
                </div>

                <div className="already divLine">
                    <p>Vous avez déjà un compte ! <Link to="/connexion">se connecter</Link></p>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Signup;