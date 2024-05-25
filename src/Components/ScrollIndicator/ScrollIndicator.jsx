import React, { useState, useEffect } from "react";
import './ScrollIndicator.css';

function ScrollIndicator() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight;
            const visibleHeight = window.innerHeight;
            const diff = totalHeight - visibleHeight;
            const percentage = (scrollTop / diff) * 100;
            setScrollPosition(percentage);
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <h1 style={{textAlign:'center', margin:'20px 0 20px ', backgroundColor:'darkgreen', padding:'14px', color:'white'}}>
                Project: 10 Scroll Indicator 
            </h1>
            <div className="scroll-container">
                <div
                    className="scroll-indicator"
                    style={{ width: `${scrollPosition}%` }} // Corrected style property
                ></div>
            </div>
        </div>
    );
}

export default ScrollIndicator;
