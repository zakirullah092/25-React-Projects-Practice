import React, { useEffect, useState } from 'react';
import './Modal.css';


function Modal() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const opening = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(opening);

  }, []);


  return (
  <>
    { open && <div>
      <div className='modalContainer' onClick={()=>setOpen(false)}>
        <div className='popup' onClick={(e) => e.stopPropagation()}>
          <h2>Want to Subscribe ? </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure aperiam expedita quia, illo deserunt.</p>
          <button className='popBtn' onClick={()=>setOpen(false)}>Close</button>
  
        </div>
      </div>
      </div>
      }
      </>
      )
      
}

export default Modal