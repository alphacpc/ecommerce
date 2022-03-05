import React from 'react';
import { ArrowRightOutlined } from "@ant-design/icons";
import "./../assets/styles/NewsLetter.css";


const NewsLetter = () => {
  return (
    <div className="contactContainer">
        <div>
            <h2>contactez-nous</h2>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            <form>
                <input type="email" placeholder="Entrer votre adresse email"/>
                <button>
                    <ArrowRightOutlined/>
                </button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter;