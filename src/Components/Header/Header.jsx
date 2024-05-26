import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='myHeader'>
            <header>
                <ul>
                    <li>Home </li>
                    <li>About Me </li>
                    <li>Why Choose Me </li>
                    <li>Contact </li>
                    <li>Services </li>
                </ul>
            </header>
            <section className='hero'>
                <div className="left">
                    <h2>Hi, I'm <span className='me'>Zakir Ullah</span></h2>
                    <h1 className='crafting'>Crafting Visual Wonders: <br />
                        Unleashing Creativity as a <br />
                        <span className='senior'>   Senior Frontend </span>
                        <span className='developer'>Developer</span>
                        <br />
                    </h1>
                    <p className='heroP'>A <span className='meta'>Meta</span>  Certified React Js Developer</p>
                    <div className='heroBtns'>
                        <button>View Work</button>
                        <button>Hire Me</button>

                    </div>
                </div>
                <div className="right">
                    <div className="innerRight">
                        <img src="/zakir.jpg" alt="" />
                        
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Header