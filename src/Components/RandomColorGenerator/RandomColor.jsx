import React from 'react';
import './RandomColor.css';
import { useState } from 'react';

function RandomColor() {

    const [color, setColor] = useState('gold');
    const [show, setShow] = useState(false);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
       let newColor = '#';
        for (let i = 0; i < 6; i++) {
            newColor += letters[Math.floor(Math.random()*16)] ;
            
        }
        return newColor;
    }


    function handleColor() {
        setColor(getRandomColor());
    }


    return (
      <div className='randomColor'>
            <h1>Project 2 : Random Color Generator</h1>
            <button onClick={() => setShow(!show)} style={{ padding: '14px', border: 'none', backgroundColor: 'dodgerblue', color:'gold'}}>Show Project</button>
            {show && <div className="randomColorContainer">
              <div className="colorBtn">
                  <button onClick={handleColor}>Create Random Color</button>
              </div>
              <div className='ColorReciver'
              style={{backgroundColor:color}}
              ></div>
          </div>}

          
      </div>
  )
}

export default RandomColor