import React from 'react';
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import ImageSlide from "./../assets/images/model1.png";
import "./../assets/styles/Announcement.css"


const Announcement = () => {
  return (
    <div className="announcementContainer">
        <div className="divArrow">
            <ArrowLeftOutlined/>
        </div>

        <div className="divSlider">
            <div className="imageSlider">
                <img src={ImageSlide} alt="image du slide"/>
            </div>
            <div className="infoSlider">
                <p>Lorem ipsum</p>
            </div>
        </div>

        <div className="divArrow">
            <ArrowRightOutlined/>
        </div>
    </div>
  )
}

export default Announcement