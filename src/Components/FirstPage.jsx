import React from "react";
import image from '../scholarsiportal.png';
import './FirstPage.css';

const FirstPage=()=>{
    return <React.Fragment>
        <div className="bgimg">
            <img src={image} alt='' />
        </div>
        <div className="footer">
            <button>Enter Site!</button>
        </div>
    </React.Fragment>
};

export default FirstPage;