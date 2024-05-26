import React,{useState, useEffect} from 'react';
import './BackToTopButton.css';


function BackToTopButton() {


    const [top, setTop] = useState(false);


    useEffect(() => {
        const scrolling = () => {
            if (window.scrollY > 300) {
                setTop(true);
            } else {
                setTop(false);
            }
        }
    
        window.addEventListener('scroll', scrolling);
        return () => {
            window.removeEventListener('scroll', scrolling);
        }
    }, []);
    
   

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };
    return (
        <div>
            <h1 className='h1'>Project 12 : Back to Top</h1>
        { top && 
        
        <div className='toTop' onClick={handleClick}> ↑ </div>

  }
    </div>
  )
}

export default BackToTopButton