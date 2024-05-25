import React, { useState } from 'react'
import './ThemeChanger.css';


function ThemeChanger() {

    const [show, setShow] = useState(true);
    const [theme, setTheme] = useState(true);

    return (
        <div className='ThemeChangerMain'
            style={{ backgroundColor: theme ? 'black' : 'white', color: theme ? 'white' : 'black' }}
        >


            <h1>Project 7 : Light / black Theme </h1>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"} Project</button>
            {show && (

                <div className='theme'>
                    <button onClick={() => setTheme(!theme)}>Change Theme</button>
                    <div>
                        <h3>Try to change the theme</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ex sapiente beatae in suscipit numquam amet tempore sint cum? At corporis fugiat ad vero iste.</p>

                    </div>
                </div>
            )

            }

        </div>
    )
}

export default ThemeChanger