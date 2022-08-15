import React from 'react'
import { LockOutlined, MessageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"
import "./../assets/styles/Signin.css"

const Signin = () => {
  return (
    
    <div className="divSigninContainer">
        <div className="divForm">

            <div className="divPanelHeader">
                <h2>Connexion</h2>
                <span></span>
            </div>


            <form action="/inscription" method="post">
        
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
                

                <div className="divForget divLine">
                    <Link to="/connexion">Mot de passe oublié !</Link>
                </div>

                <div className="divLine btn-connect">
                    <button>se connecter</button>
                </div>

                <div className="already divLine">
                    <p>Vous n'avez pas de compte ! <Link to="/inscription">s'inscrire</Link></p>
                </div>

            </form>
        </div>
    </div>

  )
}

export default Signin