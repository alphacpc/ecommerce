import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {sliderItems} from "../../Datas"

import "../../assets/styles/Announcement.css"

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Announcement = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className="announcementContainer">
            <div className="divArrow left" direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </div>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map( (item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <div className="imageSlider">
                            <img src={item.img} alt={item.title}/>
                        </div>
                        <div className={`infoSlider ${item.classname}`}>
                            <h2 className="titleSlide">{item.title}</h2>
                            <p className="">{item.desc}</p>
                            <Link to="/">Voir plus</Link>
                        </div>
                    </Slide>
                ))}
            </Wrapper>

            <div className="divArrow right" direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </div>
        </div>
    )
}

export default Announcement