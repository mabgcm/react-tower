import React from 'react';
import Iframe from 'react-iframe';
import './App.css';


const External = () => {
    return (
        <div className='external'>
            <Iframe url="https://www.cambridgeenglish.org/learning-english/"
                width="100%"
                height="1000px"
                id=""
                className=""
                display="block"
                position="relative" />

        </div>
    )
}

export default External