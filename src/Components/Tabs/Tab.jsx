import React, { useState } from "react";
import './Tab.css';

function Tab() {
    const [show, setShow] = useState(true);
    const [tabIndex, setTabIndex] = useState(null);

    function handleTabIndex(index) {
        setTabIndex((previous) => previous === index ? null : index);
    }

    return (
        <div className="tabMain">
            <h1>Project : 9 Tab View</h1>
            <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Project</button>

            {show && (
                <div className="tabContent">
                    <ul>
                        <li 
                            onClick={() => handleTabIndex(1)}
                            className={`tabItem ${tabIndex === 1 ? 'active' : ''}`}
                        >
                            <h3>Home</h3>
                        </li>
                        <li 
                            onClick={() => handleTabIndex(2)}
                            className={`tabItem ${tabIndex === 2 ? 'active' : ''}`}
                        >
                            <h3>About</h3>
                        </li>
                        <li 
                            onClick={() => handleTabIndex(3)}
                            className={`tabItem ${tabIndex === 3 ? 'active' : ''}`}
                        >
                            <h3>Services</h3>
                        </li>
                    </ul>
                    <div className="tabP">
                        {tabIndex === 1 && (
                            <p>
                                Numquam obcaecati voluptatibus consectetur mollitia tempora facere ad suscipit molestias accusantium, aspernatur tempore ex perspiciatis hic consequuntur.
                            </p>
                        )}
                        {tabIndex === 2 && (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati voluptatibus consectetur mollitia tempora facere ad suscipit molestias accusantium, aspernatur tempore ex perspiciatis hic consequuntur.
                            </p>
                        )}
                        {tabIndex === 3 && (
                            <p>
                                Aspernatur tempore ex perspiciatis hic consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati voluptatibus consectetur mollitia tempora facere ad suscipit molestias accusantium.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tab;
