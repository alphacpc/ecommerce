import React from 'react';

import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import SlideBar from '../../components/Layouts/SlideBar';
import Slider from '../../components/Account/Slider';

import "../../assets/styles/Banniere.css"


const Sliders = () => {
  return (
    <React.Fragment>
        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <SlideBar/>
            </div>

            <div className="divContentAccount">
    
                <div className="divPanelHead">
                    <h1>Bannières mis en avant</h1>
                </div>

                <form className='form'>
                    <Slider number={1} />
                    <Slider number={2} />
                    <Slider number={3} />
                    <button>Enregister</button>
                </form>

            </div>
        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default Sliders;