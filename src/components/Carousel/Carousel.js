import { ArrowBackIosIcon, ArrowForwardIosIcon } from '@material-ui/icons';
import React, {useState} from 'react';
import './Carousel.css';
import {images} from './components/Carousel/Images';

function Carousel() {
    const [currImg, setCurrImg] = useState(0);
    return (
        <div className="carousel">
          <div
            className="carouselInner"
            style={{ backgroundImage: `url(${images[currImg.img]})`}}
          >
            <div 
                className="left"
                onClick={() => { 
                    currImg > 0 && setCurrImg(currImg -1)
                }}
            >
                <ArrowBackIosIcon />
            </div>
            <div className="center">
                <h1>{images[currImg].title}</h1>
                <h1>{images[currImg].subtit}</h1>
            </div>
            <div
                 className="right"
                 onClick={() => { 
                    currImg < images.length -1 && setCurrImg(currImg +1)
                }}
            >
                <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
    );
}

export default Carousel
