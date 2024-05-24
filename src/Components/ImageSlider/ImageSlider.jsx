import React, { useState } from 'react';
import './ImageSlider.css';

function ImageSlider() {
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(1);

    const images = ["./1.png", "./2.png", "./3.png"];

    function handleNext() {
        setIndex((prevIndex) => (prevIndex < images.length ? prevIndex + 1 : 1));
    }

    return (
        <div className='ImageSlider'>
            <h1>Project 4: Image Slider</h1>
            <button className='show' onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"} Project
            </button>
            {show && (
                <div className="ImageSliderContainer">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <button onClick={handleNext}>Next</button>
                        <div className="image-display">
                            {images.map((imgSrc, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={imgSrc}
                                    alt={`Slide ${imgIndex + 1}`}
                                    style={{ display: index === imgIndex + 1 ? 'block' : 'none' }}
                                />
                            ))}
                        </div>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageSlider;
