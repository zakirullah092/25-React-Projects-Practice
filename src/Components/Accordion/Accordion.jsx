import React, { useState } from 'react';
import './Accordion.css';


function Accordion() {

  const [show, setShow] = useState(false);
  const [myShow, setMyShow] = useState(false);

  function handleShow() {
    setShow(!show);
}


  return (
    <div className='accordion'>
      <h1>Project 1 : Accordion</h1>
      <button onClick={() => setMyShow(!myShow)} style={{ padding: '14px', border: 'none', backgroundColor: 'dodgerblue', color: 'gold' }}>Show Project</button>
      {myShow && <div className="accordionMain">
        <h3 onClick={handleShow}>What is you name ?
          <span >+</span></h3>
          {show &&  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!
        </p> }
       
        <h3 onClick={handleShow}>What is your school name ?
          <span>+</span></h3>
        {!show && 
         <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique cum maiores, blanditiis recusandae quos!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad, corporis necessitatibus sunt ea molestias!</p>
        }
        
       
      </div>}
      
    </div>
  )
}

export default Accordion