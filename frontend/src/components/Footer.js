import React from 'react';
import { Link } from 'react-router-dom';
import { MediumOutlined, GithubOutlined, 
  GitlabOutlined, LinkedinOutlined, 
  YoutubeOutlined, PhoneOutlined,
  MailOutlined, HomeOutlined, BuildOutlined } from '@ant-design/icons';
import "./../assets/styles/Footer.css"

const Footer = () => {
  return (
      <div className="footerContainer">
        <div className="footerItem">
          <h1><Link to="/">bydoo.</Link></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Adipisci reprehenderit ducimus nostrum corrupti officia 
            repellendus, rem rerum quisquam. Fugiat earum, assumenda 
            porro aut cupiditate perspiciatis sequi reiciendis 
            explicabo eum dolore?</p>
            
            <div className="methods-payement">
              <Link to="/">Visa</Link>
              <Link to="/">MasterCard</Link>
              <Link to="/">Express American</Link>
              <Link to="/">PayPal</Link>
            </div>
        </div>

        <div className="footerItem">
          <h2>Liens</h2>

          <div className="column">
            <Link to="/">Mon compte</Link>
            <Link to="/">Boutique</Link>
            <Link to="/">Mon panier</Link>
            <Link to="/">Mes favories</Link>
          </div>
        </div>

        <div className="footerItem">
          <h2>Réseaux sociaux</h2>
          <div className="column">
            <Link to="/">Linkedin <LinkedinOutlined/></Link>
            <Link to="/">Github <GithubOutlined/></Link>
            <Link to="/">Youtube <YoutubeOutlined/></Link>
            <Link to="/">Gitlab <GitlabOutlined/></Link>
            <Link to="/">Medium <MediumOutlined/></Link>
          </div>
        </div>

        <div className="footerItem">
          <h2>Contact</h2>
          <div className="column">
            <p><MailOutlined/> bydoo@contact.com</p>
            <p><PhoneOutlined/> +221 33 000 00 00</p>
            <p><HomeOutlined/> Yeumbeul Nord</p>
          </div>
        </div>

      </div>
  )
}

export default Footer;