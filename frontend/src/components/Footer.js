import React from 'react';
import { Link } from 'react-router-dom';
import { MediumOutlined, GithubOutlined, GitlabOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import "./../assets/styles/Footer.css"

const Footer = () => {
  return (
      <div className="footerContainer">
        <div className="footerItem">
          <h1>bydoo.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Adipisci reprehenderit ducimus nostrum corrupti officia 
            repellendus, rem rerum quisquam. Fugiat earum, assumenda 
            porro aut cupiditate perspiciatis sequi reiciendis 
            explicabo eum dolore?</p>
            <div>
              <Link to="/">Visa</Link>
              <Link to="/">MasterCard</Link>
              <Link to="/">Express American</Link>
              <Link to="/">PayPal</Link>
            </div>
        </div>

        <div className="footerItem">
          <h2>Liens</h2>

          <div>
            <Link to="/">Mon compte</Link>
            <Link to="/">Boutique</Link>
            <Link to="/">Mon panier</Link>
            <Link to="/">Mes favories</Link>
          </div>
        </div>

        <div className="footerItem">
          <h2>Reseaux sociau</h2>
          <div>
            <Link to="/">Linkedin <LinkedinOutlined/></Link>
            <Link to="/">Github <GithubOutlined/></Link>
            <Link to="/">Youtube <YoutubeOutlined/></Link>
            <Link to="/">Gitlab <GitlabOutlined/></Link>
            <Link to="/">Medium <MediumOutlined/></Link>
          </div>
        </div>

        <div className="footerItem">
          <h2>Contact</h2>
          <div>
            <p>bydoo@contact.com</p>
            <p>+221 33 000 00 00</p>
            <p>Yeumbeul Nord</p>
          </div>
        </div>

      </div>
  )
}

export default Footer;