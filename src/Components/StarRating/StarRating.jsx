import React, { useState } from 'react';
import './StarRating.css';

function StarRating() {
    const [rating, setRating] = useState(0);

    return (
        <div className='StarRating'>
            <h1>Project 3 : Star Rating ★ &#9733;</h1>
            <div style={{ display: 'flex' }}>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setRating(index + 1)}
                        style={{
                            color: index < rating ? "gold" : 'lightgray',
                            backgroundColor: 'transparent',
                            fontSize: '40px',
                            cursor: 'pointer'
                        }}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
        </div>
    );
}

export default StarRating;
